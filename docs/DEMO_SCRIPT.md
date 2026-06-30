# Demo Script

Use this document when walking through SupportOps AI in a portfolio review, job application, or technical conversation.

The goal is simple:

Show that this is not just a UI.

It is a support operations workflow.

## 30-Second Summary

SupportOps AI is a customer support intelligence workspace.

It helps a support team triage tickets, detect SLA and sentiment risk, match customer issues to SOPs, draft better responses, and trigger automation workflows.

I built it to show how AI can reduce manual support work and turn recurring tickets into process improvement opportunities.

## 2-Minute Demo

### 1. Start On The Login Screen

Say:

```text
This is a demo workspace for support agents, team leads, and operations admins.
The current version is a static MVP, so the login is a role-based demo entry point.
```

Action:

- Select a role.
- Keep the default email.
- Click `Enter workspace`.

### 2. Dashboard

Say:

```text
The dashboard shows the operational view: open tickets, SLA risk, negative sentiment, and estimated effort avoided through automation.
```

Action:

- Point to the metrics.
- Select a high-risk ticket.
- Show the ticket detail panel.

Say:

```text
For each ticket, the app shows a summary, next action, draft response, conversation context, and knowledge base matches.
```

### 3. AI Triage

Action:

- Open `AI Triage`.
- Use the sample urgent refund and access message.
- Click `Analyze message`.

Say:

```text
The triage result generates structured support intelligence: category, priority, sentiment, SLA status, urgency score, summary, next action, response draft, and suggested knowledge articles.
```

Action:

- Click `Create ticket`.

Say:

```text
This simulates how a support message becomes an enriched ticket.
```

### 4. Automations

Action:

- Open `Automations`.
- Select or review the matched automation panel.
- Run matched automations.

Say:

```text
The automation layer decides what should happen next. Examples include Slack escalation, billing route, CRM note, or process improvement backlog entry.
```

### 5. Blueprint

Action:

- Open `Blueprint`.

Say:

```text
The current app is static, but this page shows the production architecture: source intake, backend API, AI triage, database, knowledge matching, and n8n workflows.
```

Close with:

```text
The value is not only faster ticket handling.
The bigger value is turning customer support data into operational insight.
```

## 5-Minute Demo

Use this if the reviewer has more time.

### Step 1: Explain The Business Problem

Say:

```text
Support teams spend too much time reading tickets, deciding priority, finding the right SOP, and escalating issues manually.
This creates slow response time, inconsistent handling, and missed process improvement signals.
```

### Step 2: Show Dashboard

Show:

- Open ticket count
- SLA risk
- Negative sentiment
- Weekly effort avoided
- Priority queue
- Ticket filters
- Selected ticket intelligence

Say:

```text
This gives agents and team leads a faster way to understand what needs attention.
```

### Step 3: Show Ticket Intelligence

Select the billing sync issue.

Explain:

- AI summary
- Next best action
- Draft response
- Conversation context
- KB matches

Say:

```text
The app turns ticket text into a recommended operating action.
```

### Step 4: Show AI Triage

Run the sample triage.

Explain each output:

- Category
- Priority
- Sentiment
- SLA
- Score
- Summary
- Next action
- Response draft
- KB matches

Say:

```text
In the current MVP, this is deterministic logic. In production, this becomes an AI structured output endpoint.
```

### Step 5: Show Integrations

Open `Integrations`.

Show:

- Support Inbox
- CRM Cases
- Helpdesk Queue
- Generic Webhook

Say:

```text
This is how real data would enter the system. Email, CRM, helpdesk, and webhook sources are normalized into one ticket payload.
```

Action:

- Import a sample ticket.

### Step 6: Show Knowledge Base

Open `Knowledge Base`.

Show:

- Search
- Filters
- Article detail
- SOP steps
- Related queue items
- Add article form

Say:

```text
The knowledge base is where support quality becomes repeatable.
The next build would add semantic search so the best SOP can be found automatically.
```

### Step 7: Show Automations

Open `Automations`.

Show:

- Active and paused rules
- Matching ticket logic
- Payload preview
- Activity log

Say:

```text
The app does not only classify tickets.
It decides which operational workflow should run next.
```

### Step 8: Show Insights

Open `Insights`.

Show:

- Health score
- Automation coverage
- Category mix
- Risk signals
- Process backlog
- Effort avoided

Say:

```text
This connects support work to operations improvement.
The goal is to see repeated issues and fix the process behind them.
```

### Step 9: Show Blueprint

Open `Blueprint`.

Say:

```text
This is the implementation path: Supabase for data, FastAPI for AI endpoints, OpenAI structured outputs, pgvector for knowledge search, and n8n for workflow automation.
```

## Technical Talking Points

### Why start with a static MVP?

```text
I wanted to prove the workflow first: ticket intake, triage, knowledge matching, automation, and insights.
Once that workflow is clear, the backend can be added with less rework.
```

### How will the app receive data?

```text
Production data can come from email, CRM, helpdesk, or webhook sources.
The app will normalize each source into a ticket payload, store it in Supabase, and run AI triage before showing it in the workspace.
```

### Where does AI fit?

```text
AI fits in the triage layer.
It classifies the issue, detects sentiment and urgency, generates a summary, recommends the next action, drafts a response, and produces signals for automation rules.
```

### Where does automation fit?

```text
Automation runs after triage.
If a ticket is high priority and negative, it can notify support leads.
If it is a refund case, it can route to Billing Operations.
If it matches a known SOP, it can attach the article to the ticket.
```

### What makes this useful for business transformation?

```text
It does not stop at ticket handling.
It shows recurring issues, process gaps, and automation opportunities.
That makes it useful for support operations, process improvement, and AI adoption.
```

## Strong Closing Statement

```text
SupportOps AI shows how I think about AI automation.
Not as a tool added on top of work.
As a system built into the workflow.
```

## Next Concrete Action

Record a 2-minute screen walkthrough using this script and attach the video link to the GitHub README.

