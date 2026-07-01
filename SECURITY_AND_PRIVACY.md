# Security And Privacy

SupportOps AI is currently a portfolio MVP.

It does not use real customer data, real credentials, or production integrations.

This document explains the security expectations for the current version and the production version.

## Current MVP

The current app:

- Runs in the browser
- Uses sample data only
- Has no backend
- Has no real authentication
- Has no real CRM, email, or helpdesk connection
- Has no API keys
- Stores demo state locally in the browser when available

Do not enter private customer information into the current demo.

## Demo Data

The sample tickets are fictional and exist only to show the workflow.

They are used to demonstrate:

- Ticket triage
- SLA risk
- Sentiment analysis
- Knowledge base matching
- Automation simulation
- Insights

## Production Security Requirements

A production version should include:

- Secure authentication
- Role-based access control
- Row-level security in Supabase
- API authorization
- Secret management through environment variables
- PII handling rules
- Audit logs
- Integration permission scopes
- Data retention policy
- Rate limiting
- Error monitoring

## Secrets

Never commit real secrets to GitHub.

Examples of secrets:

- OpenAI API key
- Supabase service role key
- CRM API key
- Helpdesk API key
- n8n webhook secret
- OAuth client secret

Use environment variables.

## Role-Based Access

Recommended roles:

| Role | Access |
|---|---|
| Support Agent | View assigned tickets, run triage, use knowledge base, draft responses. |
| Team Lead | View team queue, manage escalations, review risk, inspect automation results. |
| Operations Admin | Manage integrations, automation rules, knowledge base, and reporting. |

## Data Retention

Production version should define retention rules for:

- Raw customer messages
- AI-generated summaries
- Conversation history
- Automation logs
- Activity events
- Archived tickets

## AI Safety

AI output should be treated as a recommendation, not a final decision.

Production rules:

- Human review for refunds, credits, and account actions.
- Human review for sensitive customer cases.
- No unsupported promises in response drafts.
- Store AI confidence and model metadata.
- Keep fallback logic for failed or low-confidence AI output.

## Next Concrete Action

Before connecting real integrations, add authentication, environment variables, and a no-real-data demo policy to the deployed app.

