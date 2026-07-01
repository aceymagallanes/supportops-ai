# Roadmap

This roadmap turns SupportOps AI from a static portfolio MVP into a production-ready customer support intelligence system.

## Phase 0: Static Portfolio MVP

Status: Complete

Completed scope:

- Login demo
- Dashboard
- Ticket queue
- Ticket detail intelligence
- AI Triage Lab
- Integration simulator
- Knowledge Base
- Automation Center
- Insights
- Blueprint
- Browser storage persistence
- Responsive UI review
- GitHub documentation

Acceptance criteria:

- App can run locally without API keys.
- User can complete a full demo workflow.
- All major pages are responsive.
- Documentation explains the product and architecture.

## Phase 1: GitHub Portfolio Packaging

Status: Complete

Scope:

- Detailed README
- Architecture document
- Data model document
- Portfolio case study
- Demo script
- Setup guide
- Roadmap
- GitHub posting checklist
- License
- Git ignore rules

Acceptance criteria:

- Repo can be published to GitHub.
- Reviewer can understand the app without a live walkthrough.
- Reviewer can run the static demo locally.
- Next technical steps are clear.

## Phase 2: Supabase Persistence

Status: Next

Goal:

Replace local JavaScript demo data with real database records.

Scope:

- Create Supabase project
- Add tables for tickets, conversations, knowledge articles, and activity events
- Create seed data
- Connect frontend to Supabase client
- Load tickets from database
- Save newly created triage tickets
- Save new knowledge articles
- Save activity events

Recommended tables for this phase:

- `tickets`
- `conversations`
- `knowledge_articles`
- `activity_events`

Acceptance criteria:

- Refreshing the browser keeps created tickets.
- New knowledge articles are saved to Supabase.
- Ticket queue loads from database.
- Demo reset can reseed the database or reset local view state.

## Phase 3: FastAPI AI Service

Status: Planned

Goal:

Move triage logic from frontend JavaScript into a backend API.

Scope:

- Create FastAPI project
- Add `/triage` endpoint
- Validate request body with Pydantic
- Return structured triage response
- Store AI output in Supabase
- Add error handling
- Add basic API tests

Acceptance criteria:

- Frontend can call backend triage endpoint.
- Backend returns category, priority, sentiment, SLA, score, summary, next action, and draft response.
- API handles missing or invalid input safely.

## Phase 4: OpenAI Structured Output

Status: Planned

Goal:

Replace deterministic triage with real AI output.

Scope:

- Add OpenAI API call inside FastAPI
- Use structured output schema
- Validate AI response
- Add fallback logic
- Add prompt versioning
- Store prompt and model metadata for audit

Acceptance criteria:

- AI response follows the expected schema.
- App does not break when AI response is incomplete.
- Triage output is stored with the ticket.
- No API keys are exposed in the frontend.

## Phase 5: Knowledge Base Semantic Search

Status: Planned

Goal:

Match tickets to SOPs using meaning, not only keywords.

Scope:

- Add pgvector to Supabase
- Generate embeddings for knowledge articles
- Generate embeddings for ticket summaries
- Retrieve top matching articles
- Combine semantic score with category and tag score

Acceptance criteria:

- Ticket detail shows top article matches from the database.
- Matches include confidence score and reason.
- Knowledge search improves beyond exact keyword matching.

## Phase 6: n8n Workflow Automation

Status: Planned

Goal:

Trigger real support operations workflows.

Scope:

- Create n8n webhook trigger
- Send enriched ticket payload from backend
- Build Slack escalation workflow
- Build refund routing workflow
- Build CRM note workflow
- Build recurring issue backlog workflow
- Store automation run status

Acceptance criteria:

- High-risk ticket triggers Slack notification.
- Refund ticket creates a billing task or simulated billing handoff.
- CRM note workflow receives ticket summary and next action.
- Automation runs are visible in the app.

## Phase 7: Real Integrations

Status: Planned

Goal:

Receive real support messages from external systems.

Possible integrations:

- Gmail
- Outlook
- HubSpot
- Salesforce
- Zendesk
- Freshdesk
- Typeform
- Webhook from n8n, Make, or Zapier

Acceptance criteria:

- At least one real source can create tickets.
- Incoming data is normalized.
- Duplicate events are handled.
- Failed imports are logged.

## Phase 8: Next.js Rebuild

Status: Planned

Goal:

Move from static MVP to a maintainable production frontend.

Scope:

- Create Next.js app
- Add TypeScript
- Add component library
- Add authenticated routes
- Add API client
- Add loading, empty, and error states
- Add stronger accessibility review

Acceptance criteria:

- All current MVP pages exist in Next.js.
- Frontend reads from real APIs.
- Routes are clean and shareable.
- UI remains responsive.

## Phase 9: Deployment

Status: Planned

Goal:

Make the app reviewable online.

Recommended deployment:

- Frontend: Vercel
- Backend: Render or Fly.io
- Database: Supabase
- Automations: n8n Cloud or self-hosted n8n

Acceptance criteria:

- Public demo URL exists.
- Environment variables are configured securely.
- README includes the demo link.
- App has clear demo data and no private customer data.

## Phase 10: Portfolio Polish

Status: Planned

Goal:

Turn the project into a strong hiring and client acquisition asset.

Scope:

- Add 2-minute demo video
- Add screenshots for each module
- Add architecture diagram image
- Add LinkedIn case study post
- Add project page to portfolio site
- Add next-build branch for backend work

Acceptance criteria:

- GitHub repo is complete.
- Portfolio page links to GitHub and demo.
- Demo video explains the business value and workflow.
- Project clearly supports AI automation and business transformation positioning.

## Next Concrete Action

Start Phase 2 by creating a Supabase project and adding the four core tables: tickets, conversations, knowledge articles, and activity events.

