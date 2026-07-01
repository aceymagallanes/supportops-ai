# GitHub Checklist

Use this checklist to publish SupportOps AI as a portfolio-ready GitHub project.

## 1. Confirm Files

Required files:

- `index.html`
- `styles.css`
- `app.js`
- `supportops-ai-desktop.png`
- `README.md`
- `LICENSE`
- `.gitignore`
- `CONTRIBUTING.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/AI_TRIAGE_SPEC.md`
- `docs/AUTOMATION_PLAYBOOK.md`
- `docs/DEMO_SCRIPT.md`
- `docs/PORTFOLIO_CASE_STUDY.md`
- `docs/ROADMAP.md`
- `docs/SECURITY_AND_PRIVACY.md`
- `docs/SETUP.md`

## 2. Run The App Locally

```bash
cd /Users/aceymagallanes/supportops-ai
python3 -m http.server 4173 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:4173/index.html
```

Check:

- Login works.
- Dashboard loads.
- AI Triage generates a result.
- Create ticket works.
- Integrations import sample ticket works.
- Knowledge Base search works.
- Automations run matched rules.
- Insights load.
- Blueprint loads.
- Mobile layout is usable.

## 3. Initialize Git

If the folder is not already a git repo:

```bash
git init
git add .
git commit -m "Initial SupportOps AI portfolio MVP"
```

## 4. Create GitHub Repository

Recommended repo name:

```text
supportops-ai
```

Recommended description:

```text
Customer support intelligence workspace for AI triage, SOP matching, workflow automation, and support operations insights.
```

Recommended visibility:

```text
Public
```

## 5. Push To GitHub

After creating the GitHub repo, connect the local folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/supportops-ai.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## 6. Enable GitHub Pages

Because the app is static, GitHub Pages can host it.

Steps:

1. Open the GitHub repo.
2. Go to `Settings`.
3. Go to `Pages`.
4. Choose source: `Deploy from a branch`.
5. Choose branch: `main`.
6. Choose folder: `/root`.
7. Save.

GitHub will generate a live link.

## 7. Add Repo Topics

Recommended GitHub topics:

```text
ai
automation
customer-support
support-operations
workflow-automation
business-transformation
process-improvement
javascript
portfolio
```

## 8. Add Portfolio Summary

Use this text in your portfolio:

```text
SupportOps AI is a customer support intelligence workspace that helps teams triage tickets, detect SLA risk, match customer issues to SOPs, draft better responses, and trigger support operations automations.
```

## 9. Add LinkedIn Post

Suggested short post:

```text
I built SupportOps AI as a portfolio project for AI and automation roles.

It helps support teams triage tickets, detect SLA risk, match SOPs, draft responses, and trigger automation workflows.

The current version is a static MVP.
The next build is Supabase, FastAPI, OpenAI structured outputs, and n8n.

I am learning by building.
One practical system at a time.
```

## 10. Next Concrete Action

Push the repo to GitHub, enable GitHub Pages, then add the live demo link to the top of `README.md`.

