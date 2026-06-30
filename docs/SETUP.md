# Setup Guide

This guide explains how to run SupportOps AI locally.

The current version is a static browser app.

No package install is required.

No API key is required.

## Requirements

You need:

- A modern browser
- Python 3 if you want to run a local server

Optional:

- Git
- GitHub account

## Run With A Local Server

From the project folder:

```bash
cd /Users/aceymagallanes/supportops-ai
python3 -m http.server 4173 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:4173/index.html
```

## Run By Opening The File

You can also open this file directly:

```text
/Users/aceymagallanes/supportops-ai/index.html
```

A local server is still recommended because it matches how the app will be reviewed from GitHub Pages or another static host.

## Demo Login

Use the default demo email:

```text
acey@aceliora.ai
```

Choose a role:

- Support Agent
- Team Lead
- Operations Admin

Click:

```text
Enter workspace
```

## Reset Demo Data

Inside the app, use:

```text
Reset demo
```

This returns the local demo state to the default sample tickets, knowledge articles, automations, and selected views.

## Browser Storage

The app saves demo changes in browser storage when available.

Saved changes may include:

- New tickets created from AI Triage
- Imported sample integration tickets
- Added knowledge base articles
- Automation toggle states
- Activity log entries

If browser storage is blocked, the app uses a same-session fallback.

## Troubleshooting

### Port Already In Use

If port `4173` is already in use, run another port:

```bash
python3 -m http.server 5173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173/index.html
```

### Page Looks Outdated

Use a fresh query string:

```text
http://127.0.0.1:4173/index.html?fresh=1
```

Or hard refresh the browser.

### Changes Do Not Reset

Click `Reset demo` inside the app.

If needed, clear local storage for the site in your browser settings.

### Python Command Not Found

Try:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

If neither command works, install Python 3 or open `index.html` directly.

## GitHub Pages Deployment

Because this is a static app, it can be hosted on GitHub Pages.

Recommended steps:

1. Push the repo to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set source to the main branch.
5. Set folder to root.
6. Save.
7. Open the generated GitHub Pages URL.

## Environment Variables

The current MVP does not use environment variables.

Future backend versions should use environment variables for:

- Supabase URL
- Supabase anon key
- Supabase service role key
- OpenAI API key
- n8n webhook URL
- CRM API keys
- Helpdesk API keys

Never commit real API keys to GitHub.

## Next Concrete Action

Run the app locally, complete the demo workflow, then publish the repo using the GitHub checklist.

