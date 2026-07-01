# AI Triage Specification

This document defines the planned AI triage behavior for SupportOps AI.

The current MVP uses deterministic JavaScript logic. The production version should replace that logic with a backend AI service that returns validated structured output.

## Purpose

The AI triage layer turns a customer support message into operational intelligence.

It should help the support team answer:

- What is the customer issue?
- How urgent is it?
- What is the customer sentiment?
- Is there SLA risk?
- What should the agent do next?
- Which SOP or knowledge article applies?
- Should an automation run?

## Input

The AI triage endpoint should accept a normalized ticket payload.

```json
{
  "customer": {
    "name": "Sofia Mendoza",
    "company": "MetroCare Dental"
  },
  "ticket": {
    "subject": "Urgent refund and access issue",
    "message": "We were charged twice for this month, and now our admin account cannot log in. This is urgent because our staff need access before clinic hours tomorrow. Please refund the duplicate payment and fix the login issue today.",
    "channel": "Email"
  },
  "context": {
    "source": "Support Inbox",
    "known_customer": false,
    "available_categories": ["Billing", "Access", "Refund", "Reporting", "Feedback", "Technical", "Other"]
  }
}
```

## Required Output

The AI service should return structured JSON.

```json
{
  "category": "Refund",
  "secondary_categories": ["Access", "Billing"],
  "priority": "High",
  "sentiment": "Negative",
  "sla_status": "At risk",
  "urgency_score": 94,
  "summary": "Customer reports duplicate billing and admin access failure before clinic hours.",
  "next_action": "Confirm duplicate charge, restore admin access, escalate if MFA or billing sync errors are found, and give the customer a clear update time.",
  "response_draft": "Hi Sofia, thank you for flagging this. I understand this is urgent because your staff need access before clinic hours. I am checking the duplicate charge and admin access issue now. I will confirm the refund path and access status shortly.",
  "knowledge_search_terms": ["duplicate charge", "refund", "admin access", "MFA lockout", "billing sync"],
  "automation_signals": {
    "escalate_to_lead": true,
    "route_to_billing": true,
    "attach_kb_matches": true,
    "log_recurring_issue": true
  },
  "confidence": 0.91
}
```

## Field Rules

### category

Primary customer issue category.

Allowed values:

- Billing
- Access
- Refund
- Reporting
- Feedback
- Technical
- Other

### secondary_categories

Additional categories if the ticket crosses multiple issue types.

Example:

```json
["Access", "Billing"]
```

### priority

Recommended handling priority.

Allowed values:

- Low
- Medium
- High
- Critical

### sentiment

Customer emotional tone.

Allowed values:

- Positive
- Mixed
- Negative
- Unknown

### sla_status

Recommended SLA status based on urgency, priority, customer impact, and issue type.

Allowed values:

- On track
- At risk
- Breached
- Not set

### urgency_score

Integer from 0 to 100.

Recommended guide:

- 0 to 39: Low urgency
- 40 to 69: Moderate urgency
- 70 to 89: High urgency
- 90 to 100: Critical urgency

### summary

One to two sentences.

Plain language.

No hype.

### next_action

Operational instruction for the agent.

It should be specific and action-ready.

Good:

```text
Confirm duplicate charge, process refund if validated, and send the customer the refund reference number.
```

Weak:

```text
Assist the customer with their issue.
```

### response_draft

Customer-facing reply draft.

It should:

- Acknowledge the issue
- Show ownership
- State the next step
- Avoid overpromising
- Avoid legal or policy claims unless known

### knowledge_search_terms

Short terms used for knowledge base retrieval.

### automation_signals

Boolean flags that automation rules can use.

Recommended initial signals:

- `escalate_to_lead`
- `route_to_billing`
- `route_to_identity_support`
- `attach_kb_matches`
- `log_recurring_issue`
- `create_crm_note`
- `notify_customer_success`

### confidence

Decimal from 0 to 1.

If confidence is low, the UI should show a review warning.

## Prompt Shape

The backend prompt should be short, role-specific, and schema-first.

Example system instruction:

```text
You are a customer support operations triage assistant.
Classify the customer issue and return only valid JSON using the provided schema.
Focus on operational clarity, SLA risk, sentiment, and the next best support action.
Do not invent customer facts.
Do not promise refunds, credits, or technical fixes unless the message confirms eligibility.
```

Example user instruction:

```text
Analyze this customer support message and return structured triage output.

Customer: Sofia Mendoza
Company: MetroCare Dental
Channel: Email
Subject: Urgent refund and access issue
Message: We were charged twice for this month, and now our admin account cannot log in...
```

## Validation Rules

The backend should validate:

- Required fields exist.
- Category is allowed.
- Priority is allowed.
- Sentiment is allowed.
- SLA status is allowed.
- Urgency score is 0 to 100.
- Confidence is 0 to 1.
- Response draft is not empty.
- Next action is not empty.

If validation fails, the backend should:

1. Retry once with the same schema.
2. If it still fails, return a safe fallback.
3. Log the validation failure for review.

## Fallback Output

```json
{
  "category": "Other",
  "secondary_categories": [],
  "priority": "Medium",
  "sentiment": "Unknown",
  "sla_status": "Not set",
  "urgency_score": 50,
  "summary": "This ticket needs manual review because AI triage could not produce a complete result.",
  "next_action": "Review the customer message manually and assign category, priority, and SLA status.",
  "response_draft": "Hi, thank you for reaching out. I am reviewing your request and will come back with the next update shortly.",
  "knowledge_search_terms": [],
  "automation_signals": {
    "escalate_to_lead": false,
    "route_to_billing": false,
    "attach_kb_matches": false,
    "log_recurring_issue": false
  },
  "confidence": 0
}
```

## Next Concrete Action

Build a FastAPI `/triage` endpoint that accepts the input payload and returns this structured response.

