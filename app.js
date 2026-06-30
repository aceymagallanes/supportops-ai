const tickets = [
  {
    id: "SUP-1048",
    customer: "Maya Santos",
    company: "Northline Realty",
    subject: "Payment receipt missing after successful billing",
    preview: "The client paid for a property listing upgrade, but the receipt and activation email never arrived.",
    status: "Open",
    sentiment: "Negative",
    category: "Billing",
    priority: "High",
    sla: "At risk",
    score: 91,
    owner: "Acey",
    channel: "Email",
    age: "2h 14m",
    summary:
      "Customer completed payment but did not receive proof of payment or the upgraded listing activation. Revenue-impacting and trust-sensitive.",
    nextAction: "Validate payment in Stripe, resend receipt, activate listing, and offer a clear confirmation timeline.",
    reply:
      "Hi Maya, thank you for flagging this. I can see how frustrating it is to complete payment and not receive confirmation. I am checking the transaction and listing activation now. I will send the receipt and confirm the upgrade status shortly.",
    conversation: [
      {
        from: "Customer",
        text: "We paid for the premium listing this morning, but there is no receipt and the listing is still inactive."
      },
      {
        from: "Agent note",
        text: "Potential billing sync issue between payment processor and CRM. Customer manages multiple listings."
      }
    ],
    kbMatches: [
      {
        title: "Billing Sync Failure SOP",
        text: "Check payment processor status, CRM invoice sync, and product entitlement activation."
      },
      {
        title: "Premium Listing Manual Activation",
        text: "Use admin override only after confirmed successful payment capture."
      }
    ]
  },
  {
    id: "SUP-1049",
    customer: "Jon Reyes",
    company: "BrightPath Clinics",
    subject: "Repeated login lockouts for clinic admin users",
    preview: "Three admin users are getting locked out after password reset attempts during patient intake hours.",
    status: "Open",
    sentiment: "Mixed",
    category: "Access",
    priority: "High",
    sla: "At risk",
    score: 86,
    owner: "Lina",
    channel: "Portal",
    age: "3h 02m",
    summary:
      "Multiple clinic admins cannot access the system after resets. This affects patient intake and may require immediate escalation.",
    nextAction: "Reset affected accounts, verify MFA policy, and escalate to identity support if failed attempts continue.",
    reply:
      "Hi Jon, I understand this is affecting clinic intake. I am reviewing the admin lockouts and MFA policy now. Please send the usernames affected so we can restore access and prevent repeat lockouts.",
    conversation: [
      {
        from: "Customer",
        text: "Our clinic admins keep getting locked out even after password resets. This is affecting patient check-ins."
      },
      {
        from: "Agent note",
        text: "Three admin users affected. Potential MFA policy or brute-force protection issue."
      }
    ],
    kbMatches: [
      {
        title: "MFA Lockout Resolution",
        text: "Review failed login count, reset MFA challenge, and verify trusted device settings."
      },
      {
        title: "Healthcare Priority Escalation",
        text: "Escalate access disruption cases that affect patient-facing operations."
      }
    ]
  },
  {
    id: "SUP-1050",
    customer: "Claire Lim",
    company: "StudioLoop Creators",
    subject: "Refund request after duplicate subscription charge",
    preview: "Creator account was charged twice after plan upgrade, and the customer is requesting immediate refund.",
    status: "Open",
    sentiment: "Negative",
    category: "Refund",
    priority: "Medium",
    sla: "On track",
    score: 78,
    owner: "Marco",
    channel: "Chat",
    age: "1h 41m",
    summary:
      "Customer reports duplicate subscription charge after upgrade. Refund workflow and billing audit required.",
    nextAction: "Confirm duplicate charge, process partial refund, and document upgrade event in CRM.",
    reply:
      "Hi Claire, thanks for letting us know. I am checking the duplicate charge now. If the second charge is confirmed, I will submit the refund and send you the reference details.",
    conversation: [
      {
        from: "Customer",
        text: "I upgraded to Pro and got charged twice. Please refund the duplicate charge today."
      },
      {
        from: "Agent note",
        text: "Plan change occurred 16 minutes before duplicate invoice event."
      }
    ],
    kbMatches: [
      {
        title: "Duplicate Subscription Charge",
        text: "Compare invoice IDs, charge IDs, and plan upgrade timestamp before refund approval."
      },
      {
        title: "Refund Communication Template",
        text: "Include amount, reference number, and processing timeline."
      }
    ]
  },
  {
    id: "SUP-1051",
    customer: "Daniel Park",
    company: "Harbor Logistics",
    subject: "Shipment dashboard export timing out",
    preview: "Operations manager cannot export monthly shipment exception report for executive review.",
    status: "Open",
    sentiment: "Mixed",
    category: "Reporting",
    priority: "Medium",
    sla: "On track",
    score: 65,
    owner: "Nina",
    channel: "Email",
    age: "4h 20m",
    summary:
      "Customer cannot export a large operations report. The issue affects management reporting but has a manual workaround.",
    nextAction: "Generate report server-side, share secure download link, and route timeout logs to engineering.",
    reply:
      "Hi Daniel, I can help with the shipment exception export. I will generate the report through the server-side export path and send you a secure link once it is ready.",
    conversation: [
      {
        from: "Customer",
        text: "The export keeps timing out. I need the exception report for our monthly review."
      },
      {
        from: "Agent note",
        text: "Likely large data volume. Customer can filter by region as temporary workaround."
      }
    ],
    kbMatches: [
      {
        title: "Large Export Timeout",
        text: "Use server-side export, segment date range, and capture job ID for engineering."
      },
      {
        title: "Logistics Monthly Reporting SLA",
        text: "Executive reporting cases should be acknowledged within four business hours."
      }
    ]
  },
  {
    id: "SUP-1052",
    customer: "Amara Cruz",
    company: "GreenCart Market",
    subject: "Positive feedback after onboarding workflow update",
    preview: "Customer says the updated onboarding checklist reduced setup time for new branch managers.",
    status: "Open",
    sentiment: "Positive",
    category: "Feedback",
    priority: "Low",
    sla: "On track",
    score: 34,
    owner: "Acey",
    channel: "Email",
    age: "35m",
    summary:
      "Customer reports measurable improvement from onboarding checklist update. Useful as a success signal and case-study candidate.",
    nextAction: "Thank customer, tag as positive feedback, and add insight to onboarding improvement tracker.",
    reply:
      "Hi Amara, thank you for sharing this. It is great to hear the onboarding checklist helped your branch managers move faster. I will pass this to the team and record it as product feedback.",
    conversation: [
      {
        from: "Customer",
        text: "The new onboarding checklist is working well. Our branch managers are setting up faster."
      },
      {
        from: "Agent note",
        text: "Potential transformation outcome: setup time reduction for branch onboarding."
      }
    ],
    kbMatches: [
      {
        title: "Positive Feedback Routing",
        text: "Tag customer feedback by workflow, impact area, and testimonial potential."
      }
    ]
  }
];

const knowledgeArticles = [
  {
    id: "KB-1001",
    title: "Billing Sync Failure SOP",
    category: "Billing",
    type: "SOP",
    status: "Published",
    updated: "Today",
    tags: ["billing", "payment", "crm", "activation", "receipt"],
    summary: "Use when payment succeeds but receipts, CRM status, or account entitlement do not update.",
    steps: [
      "Confirm successful payment capture in the payment processor.",
      "Compare invoice status against CRM account status.",
      "Trigger manual entitlement sync or activation when payment is confirmed.",
      "Send the customer receipt, activation status, and next update time."
    ]
  },
  {
    id: "KB-1002",
    title: "Duplicate Charge and Refund Workflow",
    category: "Refund",
    type: "Policy",
    status: "Published",
    updated: "Yesterday",
    tags: ["refund", "duplicate", "charged twice", "invoice", "payment"],
    summary: "Use when a customer reports duplicate billing, incorrect subscription charge, or refund request.",
    steps: [
      "Compare invoice IDs, payment IDs, and subscription event timestamps.",
      "Confirm whether the second charge was captured or only authorized.",
      "Submit the refund request with amount, account ID, and reason code.",
      "Send the customer refund reference and expected processing timeline."
    ]
  },
  {
    id: "KB-1003",
    title: "MFA Lockout Resolution",
    category: "Access",
    type: "Troubleshooting",
    status: "Published",
    updated: "2 days ago",
    tags: ["login", "locked", "password", "mfa", "access", "account"],
    summary: "Use when one or more users cannot log in after reset, MFA, or failed access attempts.",
    steps: [
      "Check failed login count and affected usernames.",
      "Reset MFA challenge only after verifying the requester.",
      "Confirm password policy, trusted device status, and session lockout window.",
      "Escalate to identity support when multiple users or business-critical access is affected."
    ]
  },
  {
    id: "KB-1004",
    title: "Large Export Timeout",
    category: "Reporting",
    type: "Runbook",
    status: "Published",
    updated: "This week",
    tags: ["report", "dashboard", "export", "timeout", "download", "analytics"],
    summary: "Use when dashboards or reports fail during export because of volume, filters, or timeout limits.",
    steps: [
      "Ask for report name, date range, filters, and export format.",
      "Generate the report through server-side export where available.",
      "Share a secure download link or segmented workaround.",
      "Capture job ID and error timing for engineering review."
    ]
  },
  {
    id: "KB-1005",
    title: "Positive Feedback Routing",
    category: "Feedback",
    type: "Playbook",
    status: "Published",
    updated: "This week",
    tags: ["feedback", "working well", "helpful", "great", "testimonial"],
    summary: "Use when a customer shares success feedback, measurable improvement, or testimonial potential.",
    steps: [
      "Thank the customer and confirm what improvement they observed.",
      "Tag the feedback by workflow, segment, and impact area.",
      "Route measurable outcomes to the product improvement tracker.",
      "Flag potential case-study language for marketing review."
    ]
  },
  {
    id: "KB-1006",
    title: "Technical Triage Checklist",
    category: "Technical",
    type: "Checklist",
    status: "Draft",
    updated: "This month",
    tags: ["issue", "problem", "failed", "broken", "technical", "bug"],
    summary: "Use when the issue is unclear and the agent needs enough context to route accurately.",
    steps: [
      "Confirm the user, account, environment, and exact error message.",
      "Identify whether the issue is isolated, repeated, or business critical.",
      "Capture reproduction steps, screenshots, timestamps, and recent changes.",
      "Route to the right owner with customer impact and urgency clearly stated."
    ]
  }
];

const automations = [
  {
    id: "auto-escalate",
    name: "Escalate high-risk negative tickets",
    rule: "Sentiment is negative and SLA is at risk",
    target: "Slack manager alert",
    trigger: "Negative sentiment + SLA risk",
    destination: "Slack #support-leads",
    impact: "Cuts escalation delay by 45 minutes",
    active: true
  },
  {
    id: "auto-refund",
    name: "Route refund requests",
    rule: "Category is refund or duplicate charge",
    target: "Billing queue update",
    trigger: "Refund, duplicate charge, or billing correction",
    destination: "Billing Ops queue",
    impact: "Avoids manual queue reassignment",
    active: true
  },
  {
    id: "auto-kb",
    name: "Attach knowledge base matches",
    rule: "Ticket category has matching SOP",
    target: "Agent reply panel",
    trigger: "Relevant SOP, policy, or playbook found",
    destination: "Ticket intelligence panel",
    impact: "Reduces article lookup time",
    active: true
  },
  {
    id: "auto-process",
    name: "Log recurring process issues",
    rule: "Similar issue appears three times",
    target: "Improvement backlog",
    trigger: "Repeated issue pattern detected",
    destination: "Process improvement backlog",
    impact: "Turns support volume into improvement signals",
    active: false
  }
];

const integrationSources = [
  {
    id: "int-email",
    name: "Support Inbox",
    provider: "Gmail / Outlook",
    status: "Mock connected",
    channel: "Email",
    cadence: "Every 5 minutes",
    owner: "Support Ops",
    description: "Captures inbound support emails and converts them into normalized tickets.",
    sample: {
      customer: "Rafael Torres",
      company: "Vista Homes Realty",
      subject: "Tenant portal payment failed twice",
      message:
        "Our tenant portal payment failed twice today and two residents are worried they may be charged. Please check the payment records and confirm if the transactions were captured.",
      channel: "Email"
    }
  },
  {
    id: "int-crm",
    name: "CRM Cases",
    provider: "HubSpot / Salesforce",
    status: "Mock connected",
    channel: "CRM",
    cadence: "Webhook",
    owner: "Revenue Ops",
    description: "Receives case updates from the CRM so support work stays visible to account owners.",
    sample: {
      customer: "Elena Cruz",
      company: "Northstar Medical Group",
      subject: "Clinic admin users cannot access patient report",
      message:
        "Three clinic admins cannot access the patient report dashboard before tomorrow's operating review. This is urgent and affects our morning workflow.",
      channel: "CRM"
    }
  },
  {
    id: "int-helpdesk",
    name: "Helpdesk Queue",
    provider: "Zendesk / Freshdesk",
    status: "Planned",
    channel: "Portal",
    cadence: "Webhook",
    owner: "Service Desk",
    description: "Syncs existing helpdesk tickets into SupportOps AI for triage, summaries, and routing.",
    sample: {
      customer: "Mika Tan",
      company: "Harbor Logistics",
      subject: "Monthly export is timing out",
      message:
        "The shipment exception export keeps timing out. We need the monthly report for leadership review today.",
      channel: "Portal"
    }
  },
  {
    id: "int-webhook",
    name: "Generic Webhook",
    provider: "n8n / Make / Zapier",
    status: "Mock connected",
    channel: "Webhook",
    cadence: "Real time",
    owner: "Automation",
    description: "Accepts normalized ticket payloads from forms, chat tools, internal systems, or custom workflows.",
    sample: {
      customer: "Priya Shah",
      company: "GreenCart Market",
      subject: "Onboarding checklist reduced setup time",
      message:
        "The new onboarding checklist is working well. Our branch managers are setting up faster and asking fewer repeat questions.",
      channel: "Webhook"
    }
  }
];

const appState = {
  role: "Support Agent",
  email: "acey@aceliora.ai",
  selectedTicketId: tickets[0].id,
  filter: "all",
  search: "",
  knowledgeFilter: "all",
  knowledgeSearch: "",
  selectedArticleId: knowledgeArticles[0].id,
  selectedIntegrationId: integrationSources[0].id,
  activeView: "dashboard",
  triageAnalysis: null,
  activity: [
    {
      title: "SUP-1048 flagged for billing review",
      text: "Negative sentiment and SLA risk matched escalation rule."
    },
    {
      title: "SUP-1050 routed to billing queue",
      text: "Refund category matched duplicate-charge workflow."
    },
    {
      title: "Knowledge matches attached",
      text: "Three open tickets received SOP recommendations."
    }
  ]
};

const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const roleButtons = document.querySelectorAll(".role-card");
const logoutButton = document.querySelector("#logoutButton");
const resetDemoButton = document.querySelector("#resetDemoButton");
const ticketSearch = document.querySelector("#ticketSearch");
const runTriageButton = document.querySelector("#runTriageButton");
const exportButton = document.querySelector("#exportButton");
const triageForm = document.querySelector("#triageForm");
const knowledgeSearch = document.querySelector("#knowledgeSearch");
const knowledgeForm = document.querySelector("#knowledgeForm");
const userRole = document.querySelector("#userRole");
const userEmail = document.querySelector("#userEmail");
const viewTitle = document.querySelector("#viewTitle");
const toast = document.querySelector("#toast");

const STORAGE_KEY = "supportops-ai-demo-state-v1";
const WINDOW_NAME_PREFIX = `${STORAGE_KEY}:`;
const HASH_PREFIX = "demoState=";

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

const defaultDemoState = {
  tickets: cloneData(tickets),
  knowledgeArticles: cloneData(knowledgeArticles),
  automations: cloneData(automations),
  activity: cloneData(appState.activity),
  selectedTicketId: appState.selectedTicketId,
  selectedArticleId: appState.selectedArticleId,
  selectedIntegrationId: appState.selectedIntegrationId
};

function replaceArray(target, source) {
  target.splice(0, target.length, ...cloneData(source));
}

function createDemoStateSnapshot() {
  return {
    tickets,
    knowledgeArticles,
    automations,
    activity: appState.activity,
    selectedTicketId: appState.selectedTicketId,
    selectedArticleId: appState.selectedArticleId,
    selectedIntegrationId: appState.selectedIntegrationId
  };
}

function getBrowserStorage(areaName) {
  try {
    if (typeof window === "undefined" || !window[areaName]) return null;
    const storage = window[areaName];
    const probeKey = `${STORAGE_KEY}-probe`;
    storage.setItem(probeKey, "1");
    storage.removeItem(probeKey);
    return storage;
  } catch (error) {
    return null;
  }
}

function readHashState() {
  try {
    if (typeof window === "undefined" || !window.location) return null;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash.startsWith(HASH_PREFIX)) return null;
    return JSON.parse(decodeURIComponent(hash.slice(HASH_PREFIX.length)));
  } catch (error) {
    return null;
  }
}

function readWindowNameState() {
  try {
    if (typeof window === "undefined" || typeof window.name !== "string") return null;
    if (!window.name.startsWith(WINDOW_NAME_PREFIX)) return null;
    return JSON.parse(window.name.slice(WINDOW_NAME_PREFIX.length));
  } catch (error) {
    return null;
  }
}

function readStoredDemoState() {
  try {
    const storage = getBrowserStorage("localStorage") || getBrowserStorage("sessionStorage");
    if (storage) {
      const storedState = storage.getItem(STORAGE_KEY);
      if (storedState) return JSON.parse(storedState);
    }
  } catch (error) {
    // Continue to fallbacks below.
  }

  return readHashState() || readWindowNameState();
}

function writeHashState(serializedState) {
  try {
    if (typeof window === "undefined" || !window.location) return false;
    const nextHash = `#${HASH_PREFIX}${encodeURIComponent(serializedState)}`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
    } else {
      window.location.hash = nextHash;
    }
    return true;
  } catch (error) {
    return false;
  }
}

function writeWindowNameState(serializedState) {
  try {
    if (typeof window === "undefined" || typeof window.name !== "string") return false;
    window.name = `${WINDOW_NAME_PREFIX}${serializedState}`;
    return true;
  } catch (error) {
    return false;
  }
}

function clearStoredDemoState() {
  ["localStorage", "sessionStorage"].forEach((areaName) => {
    const storage = getBrowserStorage(areaName);
    if (storage) storage.removeItem(STORAGE_KEY);
  });

  try {
    if (typeof window !== "undefined" && typeof window.name === "string" && window.name.startsWith(WINDOW_NAME_PREFIX)) {
      window.name = "";
    }
  } catch (error) {
    // Storage fallback is unavailable.
  }

  try {
    if (typeof window !== "undefined" && window.location && window.location.hash.replace(/^#/, "").startsWith(HASH_PREFIX)) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      } else {
        window.location.hash = "";
      }
    }
  } catch (error) {
    // Hash fallback is unavailable.
  }
}

function persistDemoState() {
  const serializedState = JSON.stringify(createDemoStateSnapshot());
  let storageSaved = false;

  try {
    const storage = getBrowserStorage("localStorage") || getBrowserStorage("sessionStorage");
    if (storage) {
      storage.setItem(STORAGE_KEY, serializedState);
      storageSaved = true;
    }
  } catch (error) {
    // Continue to non-storage fallbacks below.
  }

  const windowNameSaved = writeWindowNameState(serializedState);
  const hashSaved = writeHashState(serializedState);
  if (storageSaved || windowNameSaved || hashSaved) return;

  showToast("Demo changes are saved for this session only");
}

function applySavedDemoState(savedState) {
  if (!savedState) return;

  if (Array.isArray(savedState.tickets)) replaceArray(tickets, savedState.tickets);
  if (Array.isArray(savedState.knowledgeArticles)) replaceArray(knowledgeArticles, savedState.knowledgeArticles);
  if (Array.isArray(savedState.automations)) replaceArray(automations, savedState.automations);
  if (Array.isArray(savedState.activity)) appState.activity = cloneData(savedState.activity);

  appState.selectedTicketId = tickets.some((ticket) => ticket.id === savedState.selectedTicketId)
    ? savedState.selectedTicketId
    : tickets[0].id;
  appState.selectedArticleId = knowledgeArticles.some((article) => article.id === savedState.selectedArticleId)
    ? savedState.selectedArticleId
    : knowledgeArticles[0].id;
  appState.selectedIntegrationId = integrationSources.some((source) => source.id === savedState.selectedIntegrationId)
    ? savedState.selectedIntegrationId
    : integrationSources[0].id;
}

function loadDemoState() {
  try {
    applySavedDemoState(readStoredDemoState());
  } catch (error) {
    clearStoredDemoState();
  }
}

function resetDemoState() {
  replaceArray(tickets, defaultDemoState.tickets);
  replaceArray(knowledgeArticles, defaultDemoState.knowledgeArticles);
  replaceArray(automations, defaultDemoState.automations);
  appState.activity = cloneData(defaultDemoState.activity);
  appState.selectedTicketId = defaultDemoState.selectedTicketId;
  appState.selectedArticleId = defaultDemoState.selectedArticleId;
  appState.selectedIntegrationId = defaultDemoState.selectedIntegrationId;
  appState.triageAnalysis = null;
  appState.filter = "all";
  appState.search = "";
  appState.knowledgeFilter = "all";
  appState.knowledgeSearch = "";
  ticketSearch.value = "";
  knowledgeSearch.value = "";
  document.querySelectorAll("#filterTabs button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filter === "all");
  });
  document.querySelectorAll("#knowledgeFilters button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.knowledgeFilter === "all");
  });
  clearStoredDemoState();
  renderAll();
  showToast("Demo data reset");
}

function selectedTicket() {
  return tickets.find((ticket) => ticket.id === appState.selectedTicketId) || tickets[0];
}

function selectedIntegration() {
  return integrationSources.find((source) => source.id === appState.selectedIntegrationId) || integrationSources[0];
}

function visibleTickets() {
  const search = appState.search.trim().toLowerCase();

  return tickets.filter((ticket) => {
    const filterMatch =
      appState.filter === "all" ||
      (appState.filter === "risk" && ticket.sla === "At risk") ||
      (appState.filter === "negative" && ticket.sentiment === "Negative") ||
      (appState.filter === "refund" && ticket.category === "Refund");

    const searchMatch =
      !search ||
      [ticket.id, ticket.customer, ticket.company, ticket.subject, ticket.category]
        .join(" ")
        .toLowerCase()
        .includes(search);

    return filterMatch && searchMatch;
  });
}

function badgeClass(value) {
  const normalized = value.toLowerCase();
  if (["high", "negative", "at risk"].includes(normalized)) return "high";
  if (["medium", "mixed"].includes(normalized)) return "medium";
  if (["low", "positive", "on track"].includes(normalized)) return "low";
  return "info";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function articleSearchText(article) {
  return `${article.title} ${article.category} ${article.type} ${article.status} ${article.summary} ${article.tags.join(" ")} ${article.steps.join(" ")}`.toLowerCase();
}

function selectedArticle() {
  return knowledgeArticles.find((article) => article.id === appState.selectedArticleId) || knowledgeArticles[0];
}

function visibleKnowledgeArticles() {
  const search = appState.knowledgeSearch.trim().toLowerCase();

  return knowledgeArticles.filter((article) => {
    const filterMatch = appState.knowledgeFilter === "all" || article.category === appState.knowledgeFilter;
    const searchMatch = !search || articleSearchText(article).includes(search);
    return filterMatch && searchMatch;
  });
}

function nextArticleId() {
  const maxNumber = knowledgeArticles.reduce((max, article) => {
    const articleNumber = Number(article.id.replace("KB-", ""));
    return Number.isFinite(articleNumber) ? Math.max(max, articleNumber) : max;
  }, 1000);
  return `KB-${maxNumber + 1}`;
}

function nextTicketId() {
  const maxNumber = tickets.reduce((max, ticket) => {
    const ticketNumber = Number(ticket.id.replace("SUP-", ""));
    return Number.isFinite(ticketNumber) ? Math.max(max, ticketNumber) : max;
  }, 1000);
  return `SUP-${maxNumber + 1}`;
}

function matchKnowledgeArticles(category, text, limit = 3) {
  const haystack = text.toLowerCase();

  return knowledgeArticles
    .map((article) => {
      const categoryScore = article.category === category ? 12 : 0;
      const tagScore = article.tags.reduce((score, tag) => score + (haystack.includes(tag.toLowerCase()) ? 4 : 0), 0);
      const titleScore = haystack.includes(article.title.toLowerCase()) ? 5 : 0;
      return {
        article,
        score: categoryScore + tagScore + titleScore
      };
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ article }) => ({
      id: article.id,
      title: article.title,
      text: article.summary,
      category: article.category,
      type: article.type
    }));
}

function getTicketKnowledgeMatches(ticket) {
  const ticketText = `${ticket.subject} ${ticket.preview} ${ticket.summary} ${ticket.nextAction} ${ticket.conversation
    .map((message) => message.text)
    .join(" ")}`;
  return matchKnowledgeArticles(ticket.category, ticketText, 3);
}

function automationMatchesTicket(automation, ticket) {
  const ticketText = `${ticket.subject} ${ticket.preview} ${ticket.summary} ${ticket.nextAction}`.toLowerCase();

  if (automation.id === "auto-escalate") {
    return ticket.sentiment === "Negative" && ticket.sla === "At risk";
  }

  if (automation.id === "auto-refund") {
    return ticket.category === "Refund" || ticket.category === "Billing" || includesAny(ticketText, ["refund", "duplicate", "charged twice"]);
  }

  if (automation.id === "auto-kb") {
    return getTicketKnowledgeMatches(ticket).length > 0;
  }

  if (automation.id === "auto-process") {
    return tickets.filter((item) => item.category === ticket.category).length >= 2;
  }

  return false;
}

function selectedTicketAutomationMatches() {
  const ticket = selectedTicket();
  return automations.filter((automation) => automation.active && automationMatchesTicket(automation, ticket));
}

function analyzeCustomerMessage(input) {
  const combined = `${input.subject} ${input.message}`.toLowerCase();
  const hasRefund = includesAny(combined, ["refund", "charged twice", "duplicate", "billing", "invoice", "payment"]);
  const hasAccess = includesAny(combined, ["login", "log in", "locked", "password", "account", "mfa", "access"]);
  const hasReporting = includesAny(combined, ["report", "dashboard", "export", "analytics", "download"]);
  const hasPositive = includesAny(combined, ["thank", "great", "working well", "helpful", "love"]);
  const hasUrgency = includesAny(combined, ["urgent", "today", "tomorrow", "immediately", "critical", "asap", "before"]);
  const hasNegative = includesAny(combined, ["cannot", "can't", "frustrated", "angry", "issue", "problem", "failed", "broken"]);

  let category = "Technical";
  if (hasRefund && hasAccess) category = "Billing";
  else if (hasRefund) category = "Refund";
  else if (hasAccess) category = "Access";
  else if (hasReporting) category = "Reporting";
  else if (hasPositive) category = "Feedback";

  const sentiment = hasPositive && !hasNegative ? "Positive" : hasNegative || hasUrgency || hasRefund ? "Negative" : "Mixed";
  const priority = hasUrgency || (hasRefund && hasAccess) ? "High" : hasRefund || hasAccess || hasReporting ? "Medium" : "Low";
  const sla = priority === "High" ? "At risk" : "On track";
  const score = Math.min(
    99,
    38 +
      (hasUrgency ? 24 : 0) +
      (hasRefund ? 14 : 0) +
      (hasAccess ? 14 : 0) +
      (hasNegative ? 8 : 0) +
      (hasReporting ? 6 : 0)
  );

  const nextActions = {
    Billing: "Confirm payment status, check account access, route billing correction, and send a clear resolution timeline.",
    Refund: "Validate duplicate charge, submit refund request, and send the customer reference details.",
    Access: "Reset access, verify MFA or password policy, and escalate if multiple users are affected.",
    Reporting: "Generate the report through a reliable export path and capture logs for engineering review.",
    Feedback: "Acknowledge the customer, tag the feedback, and route the insight to the product improvement log.",
    Technical: "Reproduce the issue, gather account context, and route to the right support owner."
  };

  const kbMatches = matchKnowledgeArticles(category, combined, 3);

  return {
    ...input,
    sentiment,
    category,
    priority,
    sla,
    score,
    status: "Open",
    owner: category === "Refund" || category === "Billing" ? "Billing Ops" : category === "Access" ? "Identity Support" : "Support Queue",
    age: "New",
    summary: `${input.customer} from ${input.company} needs help with ${category.toLowerCase()} support. The message indicates ${sentiment.toLowerCase()} sentiment and ${priority.toLowerCase()} operational priority.`,
    nextAction: nextActions[category],
    reply: `Hi ${input.customer.split(" ")[0] || "there"}, thank you for flagging this. I understand the impact and I am reviewing the ${category.toLowerCase()} issue now. I will confirm the next step, timeline, and owner before this case is closed.`,
    preview: input.message.length > 150 ? `${input.message.slice(0, 147)}...` : input.message,
    conversation: [
      {
        from: "Customer",
        text: input.message
      },
      {
        from: "AI triage note",
        text: `${category} case with ${sentiment.toLowerCase()} sentiment, ${priority.toLowerCase()} priority, and ${sla.toLowerCase()} SLA status.`
      }
    ],
    kbMatches
  };
}

function renderTriageResult() {
  const triageResult = document.querySelector("#triageResult");
  const triageStatus = document.querySelector("#triageStatus");

  if (!appState.triageAnalysis) {
    triageStatus.textContent = "Ready";
    triageStatus.className = "pill info";
    triageResult.innerHTML = `
      <div class="empty-state">
        <strong>Awaiting analysis</strong>
        <p>Submit a customer message to generate sentiment, urgency, category, summary, and response guidance.</p>
      </div>
    `;
    return;
  }

  const analysis = appState.triageAnalysis;
  triageStatus.textContent = "Analyzed";
  triageStatus.className = `pill ${badgeClass(analysis.priority)}`;

  triageResult.innerHTML = `
    <div class="analysis-summary">
      <div class="analysis-score-card">
        <span class="urgency-score">${analysis.score}</span>
        <div>
          <h4>${escapeHtml(analysis.category)} case, ${escapeHtml(analysis.priority)} priority</h4>
          <p>${escapeHtml(analysis.summary)}</p>
        </div>
      </div>

      <div class="analysis-grid">
        <div class="analysis-box">
          <span>Sentiment</span>
          <strong>${escapeHtml(analysis.sentiment)}</strong>
        </div>
        <div class="analysis-box">
          <span>SLA Risk</span>
          <strong>${escapeHtml(analysis.sla)}</strong>
        </div>
        <div class="analysis-box">
          <span>Recommended Owner</span>
          <strong>${escapeHtml(analysis.owner)}</strong>
        </div>
        <div class="analysis-box">
          <span>Suggested Next Action</span>
          <p>${escapeHtml(analysis.nextAction)}</p>
        </div>
      </div>

      <div class="analysis-box">
        <span>AI Response Draft</span>
        <p>${escapeHtml(analysis.reply)}</p>
      </div>

      <div class="knowledge-list match-list">
        ${analysis.kbMatches
          .map(
            (match) => `
              <div class="match-item">
                <div class="match-content">
                  <div class="article-meta">
                    <span class="pill info">${escapeHtml(match.category)}</span>
                    <span class="pill info">${escapeHtml(match.type)}</span>
                  </div>
                  <strong>${escapeHtml(match.title)}</strong>
                  <p>${escapeHtml(match.text)}</p>
                </div>
                <div class="match-action">
                  <button class="ghost-button" type="button" data-triage-article-id="${escapeHtml(match.id)}">Open</button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      <button class="gold-button" type="button" id="createTicketButton">Create ticket from analysis</button>
    </div>
  `;
}

function renderKnowledgeBase() {
  const articles = visibleKnowledgeArticles();
  const knowledgeList = document.querySelector("#knowledgeList");
  const knowledgeDetail = document.querySelector("#knowledgeDetail");
  const knowledgeMatchCount = document.querySelector("#knowledgeMatchCount");

  knowledgeMatchCount.textContent = `${articles.length} ${articles.length === 1 ? "match" : "matches"}`;

  knowledgeList.innerHTML = articles.length
    ? articles
        .map(
          (article) => `
            <button class="article-row ${article.id === appState.selectedArticleId ? "is-selected" : ""}" type="button" data-article-id="${escapeHtml(article.id)}">
              <div class="article-meta">
                <span class="pill info">${escapeHtml(article.category)}</span>
                <span class="pill ${article.status === "Published" ? "low" : "medium"}">${escapeHtml(article.status)}</span>
                <span class="pill info">${escapeHtml(article.type)}</span>
              </div>
              <h4>${escapeHtml(article.title)}</h4>
              <p>${escapeHtml(article.summary)}</p>
            </button>
          `
        )
        .join("")
    : `<div class="empty-state"><strong>No articles found</strong><p>Adjust the search or category filter.</p></div>`;

  const article = selectedArticle();
  const relatedTickets = tickets.filter((ticket) => getTicketKnowledgeMatches(ticket).some((match) => match.id === article.id));

  knowledgeDetail.innerHTML = `
    <div class="article-overview">
      <div class="article-meta">
        <span class="pill info">${escapeHtml(article.category)}</span>
        <span class="pill info">${escapeHtml(article.type)}</span>
        <span class="pill ${article.status === "Published" ? "low" : "medium"}">${escapeHtml(article.status)}</span>
      </div>
      <h4>${escapeHtml(article.title)}</h4>
      <p>${escapeHtml(article.summary)}</p>
    </div>

    <div class="article-stat-grid">
      <div class="article-stat">
        <span>Last Updated</span>
        <strong>${escapeHtml(article.updated)}</strong>
      </div>
      <div class="article-stat">
        <span>Matched Tickets</span>
        <strong>${relatedTickets.length}</strong>
      </div>
    </div>

    <div class="article-tag-panel">
      <span class="panel-label">Search Tags</span>
      <div class="article-meta">
        ${article.tags.map((tag) => `<span class="pill info">${escapeHtml(tag)}</span>`).join("")}
      </div>
    </div>

    <section class="article-section">
      <div class="article-section-head">
        <span class="panel-label">Resolution Workflow</span>
        <strong>${article.steps.length} steps</strong>
      </div>
      <ol class="article-steps">
        ${article.steps
          .map((step, index) => `<li data-step="${index + 1}">${escapeHtml(step)}</li>`)
          .join("")}
      </ol>
    </section>

    ${
      relatedTickets.length
        ? `<section class="article-section">
            <div class="article-section-head">
              <span class="panel-label">Related Queue Items</span>
              <strong>${relatedTickets.length}</strong>
            </div>
            <div class="related-ticket-list">
              ${relatedTickets
                .map(
                  (ticket) => `
                    <div class="related-ticket">
                      <span>${escapeHtml(ticket.id)}</span>
                      <p>${escapeHtml(ticket.subject)}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>`
        : ""
    }
  `;
}

function renderIntegrations() {
  const integrationList = document.querySelector("#integrationList");
  const integrationDetail = document.querySelector("#integrationDetail");
  const integrationCount = document.querySelector("#integrationCount");
  const integrationStatus = document.querySelector("#integrationStatus");
  const selected = selectedIntegration();
  const sampleAnalysis = analyzeCustomerMessage(selected.sample);

  integrationCount.textContent = `${integrationSources.length} sources`;
  integrationStatus.textContent = selected.status;
  integrationStatus.className = `pill ${selected.status === "Planned" ? "medium" : "low"}`;

  integrationList.innerHTML = integrationSources
    .map(
      (source) => `
        <button class="integration-card ${source.id === appState.selectedIntegrationId ? "is-selected" : ""}" type="button" data-integration-id="${escapeHtml(source.id)}">
          <div class="article-meta">
            <span class="pill ${source.status === "Planned" ? "medium" : "low"}">${escapeHtml(source.status)}</span>
            <span class="pill info">${escapeHtml(source.channel)}</span>
          </div>
          <h4>${escapeHtml(source.name)}</h4>
          <p>${escapeHtml(source.provider)}</p>
          <small>${escapeHtml(source.description)}</small>
        </button>
      `
    )
    .join("");

  integrationDetail.innerHTML = `
    <div class="integration-overview">
      <div>
        <p class="eyebrow">${escapeHtml(selected.provider)}</p>
        <h4>${escapeHtml(selected.name)}</h4>
        <p>${escapeHtml(selected.description)}</p>
      </div>
      <div class="integration-meta-grid">
        <div>
          <span>Cadence</span>
          <strong>${escapeHtml(selected.cadence)}</strong>
        </div>
        <div>
          <span>Owner</span>
          <strong>${escapeHtml(selected.owner)}</strong>
        </div>
      </div>
    </div>

    <div class="pipeline-steps">
      <div class="pipeline-step"><span>1</span><p>Receive message from ${escapeHtml(selected.provider)}</p></div>
      <div class="pipeline-step"><span>2</span><p>Normalize customer, company, channel, subject, and message fields</p></div>
      <div class="pipeline-step"><span>3</span><p>Run AI triage for sentiment, category, SLA risk, and suggested action</p></div>
      <div class="pipeline-step"><span>4</span><p>Save enriched ticket and trigger matching automations</p></div>
    </div>

    <div class="integration-sample-grid">
      <div class="integration-payload">
        <span class="panel-label">Incoming Payload</span>
        <code>{
  "source": "${escapeHtml(selected.name)}",
  "channel": "${escapeHtml(selected.sample.channel)}",
  "customer": "${escapeHtml(selected.sample.customer)}",
  "company": "${escapeHtml(selected.sample.company)}",
  "subject": "${escapeHtml(selected.sample.subject)}"
}</code>
      </div>

      <div class="integration-analysis">
        <span class="panel-label">AI Triage Preview</span>
        <div class="article-meta">
          <span class="pill ${badgeClass(sampleAnalysis.sentiment)}">${escapeHtml(sampleAnalysis.sentiment)}</span>
          <span class="pill ${badgeClass(sampleAnalysis.priority)}">${escapeHtml(sampleAnalysis.priority)}</span>
          <span class="pill ${badgeClass(sampleAnalysis.sla)}">${escapeHtml(sampleAnalysis.sla)}</span>
        </div>
        <strong>${escapeHtml(sampleAnalysis.category)} | Score ${sampleAnalysis.score}</strong>
        <p>${escapeHtml(sampleAnalysis.nextAction)}</p>
      </div>
    </div>

    <button class="primary-button" type="button" id="importSampleTicket">Import sample ticket</button>
  `;
}

function renderMetrics() {
  const openCount = tickets.filter((ticket) => ticket.status === "Open").length;
  const riskCount = tickets.filter((ticket) => ticket.sla === "At risk").length;
  const negativeCount = tickets.filter((ticket) => ticket.sentiment === "Negative").length;
  const weeklySavings = Math.round(tickets.length * 1.8 + automations.filter((item) => item.active).length * 2.4);

  const metrics = [
    {
      label: "Open Tickets",
      value: openCount,
      note: "Active queue volume"
    },
    {
      label: "SLA Risk",
      value: riskCount,
      note: "Needs escalation control"
    },
    {
      label: "Negative Sentiment",
      value: negativeCount,
      note: "Customer trust exposure"
    },
    {
      label: "Automation Savings",
      value: `${weeklySavings}h`,
      note: "Estimated weekly effort avoided"
    }
  ];

  document.querySelector("#metricGrid").innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <small>${metric.note}</small>
        </article>
      `
    )
    .join("");

  const savingsValue = document.querySelector("#savingsValue");
  if (savingsValue) {
    savingsValue.textContent = `${weeklySavings} hrs`;
  }
}

function renderTicketList() {
  const items = visibleTickets();
  const ticketList = document.querySelector("#ticketList");

  ticketList.innerHTML = items.length
    ? items
        .map(
          (ticket) => `
            <button class="ticket-row ${ticket.id === appState.selectedTicketId ? "is-selected" : ""}" type="button" data-ticket-id="${ticket.id}">
              <div>
                <h4>${ticket.id} - ${ticket.subject}</h4>
                <p>${ticket.customer}, ${ticket.company}</p>
                <div class="ticket-meta">
                  <span class="pill ${badgeClass(ticket.sentiment)}">${ticket.sentiment}</span>
                  <span class="pill ${badgeClass(ticket.priority)}">${ticket.priority}</span>
                  <span class="pill ${badgeClass(ticket.sla)}">${ticket.sla}</span>
                  <span class="pill info">${ticket.status}</span>
                  <span class="pill info">${ticket.category}</span>
                </div>
              </div>
              <span class="urgency-score">${ticket.score}</span>
            </button>
          `
        )
        .join("")
    : `<div class="message"><strong>No tickets match</strong><p>Adjust the search or filter.</p></div>`;
}

function renderTicketDetail() {
  const ticket = selectedTicket();
  const ticketDetail = document.querySelector("#ticketDetail");
  const matchedArticles = getTicketKnowledgeMatches(ticket);

  ticketDetail.innerHTML = `
    <div class="detail-header">
      <div>
        <p class="eyebrow">Selected Ticket</p>
        <h3 id="detailTitle">${ticket.id} - ${ticket.subject}</h3>
        <p class="detail-subtitle">${ticket.customer}, ${ticket.company} | ${ticket.channel} | ${ticket.age}</p>
      </div>
      <span class="urgency-score">${ticket.score}</span>
    </div>

    <div class="intelligence-grid">
      <div class="signal-box">
        <span>AI Summary</span>
        <strong>${ticket.summary}</strong>
      </div>
      <div class="signal-box">
        <span>Recommended Next Action</span>
        <strong>${ticket.nextAction}</strong>
      </div>
      <div class="signal-box">
        <span>Sentiment and Priority</span>
        <strong>${ticket.sentiment} sentiment, ${ticket.priority} priority, ${ticket.sla.toLowerCase()} SLA.</strong>
      </div>
      <div class="signal-box">
        <span>Owner and Category</span>
        <strong>${ticket.owner} owns this ${ticket.category.toLowerCase()} case.</strong>
      </div>
    </div>

    <div class="detail-actions">
      <button class="gold-button" type="button" data-action="escalate">Escalate</button>
      <button class="ghost-button" type="button" data-action="route">Route ticket</button>
      <button class="ghost-button" type="button" data-action="resolve">Mark resolved</button>
    </div>

    <section class="reply-box" aria-label="AI response draft">
      <label for="replyDraft">AI response draft</label>
      <textarea id="replyDraft">${ticket.reply}</textarea>
      <div class="reply-actions">
        <button class="primary-button" type="button" data-action="approve">Approve response</button>
        <button class="ghost-button" type="button" data-action="regenerate">Regenerate</button>
      </div>
    </section>

    <section class="reply-box" aria-label="Conversation">
      <p class="eyebrow">Conversation</p>
      <div class="conversation">
        ${ticket.conversation
          .map(
            (message) => `
              <div class="message">
                <strong>${message.from}</strong>
                <p>${message.text}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="reply-box" aria-label="Knowledge base matches">
      <p class="eyebrow">Knowledge Base Matches</p>
      <div class="knowledge-list match-list">
        ${matchedArticles
          .map(
            (match) => `
              <div class="match-item">
                <div class="match-content">
                  <div class="article-meta">
                    <span class="pill info">${escapeHtml(match.category)}</span>
                    <span class="pill info">${escapeHtml(match.type)}</span>
                  </div>
                  <strong>${escapeHtml(match.title)}</strong>
                  <p>${escapeHtml(match.text)}</p>
                </div>
                <div class="match-action">
                  <button class="ghost-button" type="button" data-action="view-kb" data-article-id="${escapeHtml(match.id)}">Open</button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderQueueTable() {
  const rows = visibleTickets();
  const queueTable = document.querySelector("#queueTable");

  queueTable.innerHTML = `
    <div class="table-row header">
      <span>Ticket</span>
      <span>Customer Issue</span>
      <span>Sentiment</span>
      <span>Priority</span>
      <span>SLA</span>
      <span>Score</span>
    </div>
    ${rows
      .map(
        (ticket) => `
          <div class="table-row">
            <strong>${ticket.id}<br />${ticket.customer}</strong>
            <span>${ticket.subject}</span>
            <span class="pill ${badgeClass(ticket.sentiment)}">${ticket.sentiment}</span>
            <span class="pill ${badgeClass(ticket.priority)}">${ticket.priority}</span>
            <span class="pill ${badgeClass(ticket.sla)}">${ticket.sla}</span>
            <strong>${ticket.score}</strong>
          </div>
        `
      )
      .join("")}
  `;
}

function renderAutomations() {
  const automationGrid = document.querySelector("#automationGrid");
  const automationRuleCount = document.querySelector("#automationRuleCount");
  const selected = selectedTicket();
  const matchedAutomations = selectedTicketAutomationMatches();

  automationRuleCount.textContent = `${automations.length} rules`;

  automationGrid.innerHTML = automations
    .map(
      (automation) => {
        const matchesSelected = automationMatchesTicket(automation, selected);
        return `
        <article class="automation-card">
          <header>
            <div>
              <span class="pill ${automation.active ? "low" : "medium"}">${automation.active ? "Active" : "Paused"}</span>
              <span class="pill ${matchesSelected ? "info" : "medium"}">${matchesSelected ? "Matches selected" : "No selected match"}</span>
            </div>
            <label class="switch" aria-label="Toggle ${escapeHtml(automation.name)}">
              <input type="checkbox" data-automation-id="${escapeHtml(automation.id)}" ${automation.active ? "checked" : ""} />
              <span></span>
            </label>
          </header>
          <h4>${escapeHtml(automation.name)}</h4>
          <p>${escapeHtml(automation.rule)}</p>
          <div class="automation-fields">
            <div>
              <span>Trigger</span>
              <strong>${escapeHtml(automation.trigger)}</strong>
            </div>
            <div>
              <span>Destination</span>
              <strong>${escapeHtml(automation.destination)}</strong>
            </div>
          </div>
          <footer>
            <small>${escapeHtml(automation.impact)}</small>
            <button class="ghost-button" type="button" data-test-automation-id="${escapeHtml(automation.id)}">Test rule</button>
          </footer>
        </article>
      `;
      }
    )
    .join("");

  renderAutomationSimulator(selected, matchedAutomations);
}

function renderAutomationSimulator(ticket, matchedAutomations) {
  const automationSimulator = document.querySelector("#automationSimulator");
  const automationMatchCount = document.querySelector("#automationMatchCount");

  automationMatchCount.textContent = `${matchedAutomations.length} ${matchedAutomations.length === 1 ? "match" : "matches"}`;

  automationSimulator.innerHTML = `
    <div class="simulation-ticket">
      <span class="pill info">${escapeHtml(ticket.id)}</span>
      <h4>${escapeHtml(ticket.subject)}</h4>
      <p>${escapeHtml(ticket.customer)}, ${escapeHtml(ticket.company)}</p>
      <div class="ticket-meta">
        <span class="pill ${badgeClass(ticket.sentiment)}">${escapeHtml(ticket.sentiment)}</span>
        <span class="pill ${badgeClass(ticket.priority)}">${escapeHtml(ticket.priority)}</span>
        <span class="pill ${badgeClass(ticket.sla)}">${escapeHtml(ticket.sla)}</span>
        <span class="pill info">${escapeHtml(ticket.category)}</span>
      </div>
    </div>

    <div class="simulation-flow">
      ${
        matchedAutomations.length
          ? matchedAutomations
              .map(
                (automation, index) => `
                  <div class="flow-step">
                    <span>${index + 1}</span>
                    <div>
                      <strong>${escapeHtml(automation.name)}</strong>
                      <p>${escapeHtml(automation.destination)} | ${escapeHtml(automation.target)}</p>
                    </div>
                  </div>
                `
              )
              .join("")
          : `<div class="empty-state compact"><strong>No active workflow match</strong><p>Select another ticket or activate a matching automation rule.</p></div>`
      }
    </div>

    <div class="automation-payload">
      <span class="panel-label">Payload Preview</span>
      <code>{
  "ticket_id": "${escapeHtml(ticket.id)}",
  "category": "${escapeHtml(ticket.category)}",
  "priority": "${escapeHtml(ticket.priority)}",
  "sla": "${escapeHtml(ticket.sla)}",
  "matches": ${matchedAutomations.length}
}</code>
    </div>

    <button class="primary-button" type="button" id="runMatchedAutomations" ${matchedAutomations.length ? "" : "disabled"}>Run matched automations</button>
  `;
}

function renderActivity() {
  document.querySelector("#activityList").innerHTML = appState.activity
    .map(
      (item) => `
        <div class="activity-item">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function renderInsights() {
  const openTickets = tickets.filter((ticket) => ticket.status === "Open");
  const riskTickets = tickets.filter((ticket) => ticket.sla === "At risk");
  const negativeTickets = tickets.filter((ticket) => ticket.sentiment === "Negative");
  const highPriorityTickets = tickets.filter((ticket) => ticket.priority === "High");
  const activeAutomations = automations.filter((automation) => automation.active);
  const weeklySavings = Math.round(tickets.length * 1.8 + activeAutomations.length * 2.4);
  const healthScore = Math.max(42, Math.min(96, 92 - riskTickets.length * 8 - negativeTickets.length * 5 + activeAutomations.length * 3));

  document.querySelector("#healthScore").textContent = healthScore;
  document.querySelector("#executiveSummary").textContent =
    `${openTickets.length} open tickets are being monitored. ${riskTickets.length} require SLA attention, ${negativeTickets.length} carry negative sentiment, and ${activeAutomations.length} active automations are reducing manual support work.`;

  const insightKpis = [
    {
      label: "SLA Exposure",
      value: riskTickets.length,
      note: `${Math.round((riskTickets.length / Math.max(tickets.length, 1)) * 100)}% of total queue`
    },
    {
      label: "Customer Risk",
      value: negativeTickets.length,
      note: "Negative sentiment tickets"
    },
    {
      label: "High Priority",
      value: highPriorityTickets.length,
      note: "Needs lead visibility"
    },
    {
      label: "Automation Coverage",
      value: `${Math.round((activeAutomations.length / automations.length) * 100)}%`,
      note: `${activeAutomations.length} of ${automations.length} rules active`
    }
  ];

  document.querySelector("#insightKpiGrid").innerHTML = insightKpis
    .map(
      (item) => `
        <article class="insight-kpi-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <small>${escapeHtml(item.note)}</small>
        </article>
      `
    )
    .join("");

  const categoryCounts = tickets.reduce((totals, ticket) => {
    totals[ticket.category] = (totals[ticket.category] || 0) + 1;
    return totals;
  }, {});

  const maxCount = Math.max(...Object.values(categoryCounts));

  document.querySelector("#insightBars").innerHTML = Object.entries(categoryCounts)
    .map(([category, count]) => {
      const width = Math.max(24, Math.round((count / maxCount) * 100));
      return `
        <div class="bar-row">
          <div class="bar-label">
            <span>${category}</span>
            <span>${count}</span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
        </div>
      `;
    })
    .join("");

  const risks = [
    {
      title: "SLA risk",
      value: riskTickets.length,
      text: riskTickets.length
        ? `${riskTickets.map((ticket) => ticket.id).join(", ")} should stay visible to team leads.`
        : "No current tickets are marked at risk."
    },
    {
      title: "Sentiment risk",
      value: negativeTickets.length,
      text: negativeTickets.length
        ? `${negativeTickets.map((ticket) => ticket.id).join(", ")} need clear ownership and response quality checks.`
        : "No negative sentiment tickets in the active queue."
    },
    {
      title: "Automation gaps",
      value: automations.length - activeAutomations.length,
      text:
        automations.length - activeAutomations.length
          ? "Paused rules reduce automation coverage. Review inactive workflow opportunities."
          : "All automation rules are active."
    }
  ];

  document.querySelector("#riskList").innerHTML = risks
    .map(
      (risk) => `
        <div class="risk-item">
          <div>
            <strong>${escapeHtml(risk.title)}</strong>
            <p>${escapeHtml(risk.text)}</p>
          </div>
          <span>${escapeHtml(risk.value)}</span>
        </div>
      `
    )
    .join("");

  const issues = [
    {
      title: "Billing-to-CRM sync",
      text: "Payment confirmation and entitlement activation can be automated to reduce trust-sensitive tickets.",
      owner: "Billing Ops",
      impact: "High"
    },
    {
      title: "Account access recovery",
      text: "MFA lockout triage can be routed to identity support when multiple users are affected.",
      owner: "Identity Support",
      impact: "High"
    },
    {
      title: "Large report exports",
      text: "Server-side export jobs can prevent timeout cases during executive reporting cycles.",
      owner: "Product Ops",
      impact: "Medium"
    }
  ];

  document.querySelector("#issueList").innerHTML = issues
    .map(
      (issue) => `
        <div class="issue-item">
          <div class="article-meta">
            <span class="pill ${issue.impact === "High" ? "high" : "medium"}">${escapeHtml(issue.impact)} impact</span>
            <span class="pill info">${escapeHtml(issue.owner)}</span>
          </div>
          <strong>${issue.title}</strong>
          <p>${issue.text}</p>
        </div>
      `
    )
    .join("");

  document.querySelector("#impactPanel").innerHTML = `
    <div class="impact-score">
      <strong>${weeklySavings} hrs</strong>
      <span>Estimated weekly manual effort avoided</span>
    </div>
    <div class="impact-breakdown">
      <div>
        <span>Active automations</span>
        <strong>${activeAutomations.length}</strong>
      </div>
      <div>
        <span>Knowledge matches</span>
        <strong>${tickets.reduce((total, ticket) => total + getTicketKnowledgeMatches(ticket).length, 0)}</strong>
      </div>
      <div>
        <span>Risk tickets routed</span>
        <strong>${riskTickets.length}</strong>
      </div>
    </div>
  `;
}

function renderBlueprint() {
  const blueprintStats = document.querySelector("#blueprintStats");
  const blueprintDataModel = document.querySelector("#blueprintDataModel");
  const blueprintAutomationMap = document.querySelector("#blueprintAutomationMap");
  const blueprintRoadmap = document.querySelector("#blueprintRoadmap");
  const activeAutomations = automations.filter((automation) => automation.active);

  const stats = [
    {
      label: "Intake sources",
      value: integrationSources.length,
      note: "Email, CRM, helpdesk, webhook"
    },
    {
      label: "Ticket objects",
      value: tickets.length,
      note: "Enriched support records"
    },
    {
      label: "Knowledge assets",
      value: knowledgeArticles.length,
      note: "SOPs, policies, playbooks"
    },
    {
      label: "Active workflows",
      value: `${activeAutomations.length}/${automations.length}`,
      note: "Automation rules online"
    }
  ];

  blueprintStats.innerHTML = stats
    .map(
      (stat) => `
        <div class="blueprint-stat">
          <span>${escapeHtml(stat.label)}</span>
          <strong>${escapeHtml(stat.value)}</strong>
          <small>${escapeHtml(stat.note)}</small>
        </div>
      `
    )
    .join("");

  const dataObjects = [
    {
      name: "Tickets",
      owner: "Support Ops",
      purpose: "Central record for issue, urgency, SLA exposure, owner, status, and AI-generated guidance.",
      fields: ["id", "customer", "category", "sentiment", "priority", "sla", "score"]
    },
    {
      name: "Conversations",
      owner: "Support Agent",
      purpose: "Customer messages and internal notes used for triage, summary, and response drafting.",
      fields: ["from", "message", "channel", "timestamp", "ticket_id"]
    },
    {
      name: "Knowledge Articles",
      owner: "Process Owner",
      purpose: "Reusable SOPs, policies, runbooks, and playbooks matched to ticket context.",
      fields: ["title", "category", "type", "status", "tags", "steps"]
    },
    {
      name: "Automation Rules",
      owner: "Operations Admin",
      purpose: "Trigger conditions and destinations for escalations, routing, CRM updates, and backlog signals.",
      fields: ["trigger", "condition", "destination", "active", "impact"]
    },
    {
      name: "Activity Events",
      owner: "Team Lead",
      purpose: "Operational audit trail for imported tickets, routing decisions, approvals, and automation runs.",
      fields: ["title", "text", "actor", "created_at"]
    }
  ];

  blueprintDataModel.innerHTML = dataObjects
    .map(
      (object) => `
        <article class="data-object">
          <header>
            <strong>${escapeHtml(object.name)}</strong>
            <small>${escapeHtml(object.owner)}</small>
          </header>
          <p>${escapeHtml(object.purpose)}</p>
          <div class="field-list">
            ${object.fields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  blueprintAutomationMap.innerHTML = automations
    .map(
      (automation) => `
        <article class="automation-handoff">
          <header>
            <strong>${escapeHtml(automation.name)}</strong>
            <span class="pill ${automation.active ? "low" : "medium"}">${automation.active ? "Active" : "Paused"}</span>
          </header>
          <p>${escapeHtml(automation.rule)}</p>
          <div class="field-list">
            <span>${escapeHtml(automation.destination)}</span>
            <span>${escapeHtml(automation.target)}</span>
          </div>
        </article>
      `
    )
    .join("");

  const roadmap = [
    {
      phase: "01",
      status: "Complete",
      title: "Static portfolio MVP",
      text: "Browser-based workspace with ticket triage, knowledge matching, automations, insights, and integration simulation."
    },
    {
      phase: "02",
      status: "Next",
      title: "Supabase persistence",
      text: "Replace local demo data with tables for tickets, conversations, articles, rules, activity, and user roles."
    },
    {
      phase: "03",
      status: "Next",
      title: "FastAPI AI service",
      text: "Expose endpoints for classification, summarization, response drafting, and structured triage output."
    },
    {
      phase: "04",
      status: "Planned",
      title: "n8n workflow layer",
      text: "Connect Slack escalation, CRM status updates, billing queue routing, and improvement backlog automation."
    }
  ];

  blueprintRoadmap.innerHTML = roadmap
    .map(
      (item) => `
        <article class="roadmap-card">
          <header>
            <span class="roadmap-step-number">${escapeHtml(item.phase)}</span>
            <span class="pill ${item.status === "Complete" ? "low" : item.status === "Next" ? "info" : "medium"}">${escapeHtml(item.status)}</span>
          </header>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function setView(view) {
  appState.activeView = view;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === view);
  });
  document.querySelector(".topbar-actions").classList.toggle("is-hidden", !["dashboard", "queue"].includes(view));
  viewTitle.textContent =
    {
      dashboard: "Dashboard",
      triage: "AI Triage",
      integrations: "Integrations",
      knowledge: "Knowledge Base",
      queue: "Ticket Queue",
      automations: "Automations",
      insights: "Insights",
      blueprint: "Blueprint"
    }[view] || "Dashboard";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

function addActivity(title, text) {
  appState.activity = [{ title, text }, ...appState.activity].slice(0, 5);
  renderActivity();
  persistDemoState();
}

function renderAll() {
  renderMetrics();
  renderTicketList();
  renderTicketDetail();
  renderQueueTable();
  renderAutomations();
  renderActivity();
  renderInsights();
  renderBlueprint();
  renderTriageResult();
  renderKnowledgeBase();
  renderIntegrations();
  userRole.textContent = appState.role;
  userEmail.textContent = appState.email;
}

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roleButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    appState.role = button.dataset.role;
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  appState.email = emailInput.value || "acey@aceliora.ai";
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
  renderAll();
  showToast(`${appState.role} workspace loaded`);
});

logoutButton.addEventListener("click", () => {
  appShell.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
  showToast("Logged out");
});

resetDemoButton.addEventListener("click", () => {
  resetDemoState();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelector("#filterTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  appState.filter = button.dataset.filter;
  document.querySelectorAll("#filterTabs button").forEach((item) => item.classList.remove("is-selected"));
  button.classList.add("is-selected");
  renderTicketList();
  renderQueueTable();
});

document.querySelector("#ticketList").addEventListener("click", (event) => {
  const row = event.target.closest("[data-ticket-id]");
  if (!row) return;
  appState.selectedTicketId = row.dataset.ticketId;
  renderTicketList();
  renderTicketDetail();
  renderAutomations();
  persistDemoState();
});

document.querySelector("#ticketDetail").addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const ticket = selectedTicket();
  const action = actionButton.dataset.action;

  if (action === "escalate") {
    ticket.priority = "High";
    ticket.sla = "At risk";
    ticket.score = Math.max(ticket.score, 92);
    addActivity(`${ticket.id} escalated`, `${appState.role} escalated the case for manager review.`);
    showToast(`${ticket.id} escalated`);
  }

  if (action === "route") {
    ticket.owner = ticket.category === "Refund" || ticket.category === "Billing" ? "Billing Ops" : "Specialist Queue";
    addActivity(`${ticket.id} routed`, `Ticket moved to ${ticket.owner}.`);
    showToast(`${ticket.id} routed to ${ticket.owner}`);
  }

  if (action === "resolve") {
    ticket.status = "Resolved";
    ticket.sla = "On track";
    ticket.score = Math.max(18, ticket.score - 36);
    addActivity(`${ticket.id} resolved`, `${appState.role} marked the ticket resolved.`);
    showToast(`${ticket.id} marked resolved`);
  }

  if (action === "approve") {
    addActivity(`${ticket.id} response approved`, "AI draft approved and queued for customer response.");
    showToast("Response approved");
  }

  if (action === "regenerate") {
    const replyDraft = document.querySelector("#replyDraft");
    const addedNote =
      "Additional note: I will keep this case open until the root cause is confirmed and the customer impact is fully cleared.";
    if (!ticket.reply.includes(addedNote)) {
      ticket.reply = `${ticket.reply}\n\n${addedNote}`;
    }
    replyDraft.value = ticket.reply;
    addActivity(`${ticket.id} response regenerated`, "Response draft updated with ownership and closure language.");
    showToast("Response regenerated");
  }

  if (action === "view-kb") {
    appState.selectedArticleId = actionButton.dataset.articleId;
    appState.knowledgeFilter = "all";
    appState.knowledgeSearch = "";
    knowledgeSearch.value = "";
    document.querySelectorAll("#knowledgeFilters button").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.knowledgeFilter === "all");
    });
    setView("knowledge");
    renderAll();
    persistDemoState();
    showToast("Knowledge article opened");
    return;
  }

  renderAll();
});

document.querySelector("#automationGrid").addEventListener("change", (event) => {
  const input = event.target.closest("[data-automation-id]");
  if (!input) return;
  const automation = automations.find((item) => item.id === input.dataset.automationId);
  if (!automation) return;
  automation.active = input.checked;
  addActivity(`${automation.name} ${automation.active ? "activated" : "paused"}`, automation.rule);
  showToast(`${automation.name} ${automation.active ? "activated" : "paused"}`);
  renderAll();
});

document.querySelector("#automationGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-test-automation-id]");
  if (!button) return;

  const automation = automations.find((item) => item.id === button.dataset.testAutomationId);
  const ticket = selectedTicket();
  if (!automation) return;

  if (!automation.active) {
    addActivity(`${automation.name} test skipped`, "Rule is paused. Activate it before running the workflow.");
    showToast("Rule is paused");
    renderAutomations();
    return;
  }

  if (!automationMatchesTicket(automation, ticket)) {
    addActivity(`${automation.name} did not match`, `${ticket.id} does not meet the trigger condition.`);
    showToast("No match for selected ticket");
    renderAutomations();
    return;
  }

  addActivity(`${automation.name} test passed`, `${ticket.id} would send an action to ${automation.destination}.`);
  showToast("Automation test passed");
  renderAutomations();
});

document.querySelector("#automationSimulator").addEventListener("click", (event) => {
  const runButton = event.target.closest("#runMatchedAutomations");
  if (!runButton) return;

  const ticket = selectedTicket();
  const matches = selectedTicketAutomationMatches();
  if (!matches.length) {
    showToast("No automations to run");
    return;
  }

  addActivity(
    `${matches.length} automations triggered for ${ticket.id}`,
    matches.map((automation) => `${automation.name} -> ${automation.destination}`).join("; ")
  );
  showToast(`${matches.length} automations triggered`);
  renderAll();
});

knowledgeSearch.addEventListener("input", (event) => {
  appState.knowledgeSearch = event.target.value;
  renderKnowledgeBase();
});

document.querySelector("#knowledgeFilters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-knowledge-filter]");
  if (!button) return;
  appState.knowledgeFilter = button.dataset.knowledgeFilter;
  document.querySelectorAll("#knowledgeFilters button").forEach((item) => item.classList.remove("is-selected"));
  button.classList.add("is-selected");
  renderKnowledgeBase();
});

document.querySelector("#knowledgeList").addEventListener("click", (event) => {
  const articleRow = event.target.closest("[data-article-id]");
  if (!articleRow) return;
  appState.selectedArticleId = articleRow.dataset.articleId;
  renderKnowledgeBase();
  persistDemoState();
});

document.querySelector("#integrationList").addEventListener("click", (event) => {
  const sourceCard = event.target.closest("[data-integration-id]");
  if (!sourceCard) return;
  appState.selectedIntegrationId = sourceCard.dataset.integrationId;
  renderIntegrations();
  persistDemoState();
});

document.querySelector("#integrationDetail").addEventListener("click", (event) => {
  const importButton = event.target.closest("#importSampleTicket");
  if (!importButton) return;

  const source = selectedIntegration();
  const analyzedTicket = analyzeCustomerMessage(source.sample);
  const newTicket = {
    id: nextTicketId(),
    ...analyzedTicket
  };

  tickets.unshift(newTicket);
  appState.selectedTicketId = newTicket.id;
  appState.filter = "all";
  appState.search = "";
  ticketSearch.value = "";
  document.querySelectorAll("#filterTabs button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filter === "all");
  });
  addActivity(`${newTicket.id} imported from ${source.name}`, `${newTicket.category} ticket created through ${source.provider}.`);
  setView("dashboard");
  renderAll();
  showToast(`${newTicket.id} imported from ${source.name}`);
});

knowledgeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(knowledgeForm);
  const title = String(formData.get("title") || "").trim();
  const category = String(formData.get("category") || "Technical");
  const summary = String(formData.get("summary") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!title || !summary || !content) {
    showToast("Add title, summary, and steps");
    return;
  }

  const steps = content
    .split(/\n|\. /)
    .map((step) => step.trim().replace(/\.$/, ""))
    .filter(Boolean)
    .slice(0, 6);

  const tags = Array.from(
    new Set(`${title} ${category} ${summary} ${content}`.toLowerCase().match(/[a-z0-9]{4,}/g) || [])
  ).slice(0, 8);

  const article = {
    id: nextArticleId(),
    title,
    category,
    type: "Playbook",
    status: "Draft",
    updated: "Just now",
    tags,
    summary,
    steps
  };

  knowledgeArticles.unshift(article);
  appState.selectedArticleId = article.id;
  appState.knowledgeFilter = "all";
  appState.knowledgeSearch = "";
  knowledgeSearch.value = "";
  knowledgeForm.reset();
  document.querySelectorAll("#knowledgeFilters button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.knowledgeFilter === "all");
  });
  addActivity(`${article.id} added to Knowledge Base`, `${article.title} is ready for agent guidance.`);
  renderAll();
  showToast(`${article.id} added`);
});

triageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(triageForm);
  const input = {
    customer: String(formData.get("customer") || "Customer").trim(),
    company: String(formData.get("company") || "Unknown Company").trim(),
    channel: String(formData.get("channel") || "Email"),
    subject: String(formData.get("subject") || "Customer support request").trim(),
    message: String(formData.get("message") || "").trim()
  };

  if (!input.message) {
    showToast("Add a customer message first");
    return;
  }

  appState.triageAnalysis = analyzeCustomerMessage(input);
  addActivity("AI triage analysis generated", `${input.subject} was classified as ${appState.triageAnalysis.category}.`);
  renderTriageResult();
  showToast("Message analyzed");
});

document.querySelector("#triageResult").addEventListener("click", (event) => {
  const articleButton = event.target.closest("[data-triage-article-id]");
  if (articleButton) {
    appState.selectedArticleId = articleButton.dataset.triageArticleId;
    appState.knowledgeFilter = "all";
    appState.knowledgeSearch = "";
    knowledgeSearch.value = "";
    document.querySelectorAll("#knowledgeFilters button").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.knowledgeFilter === "all");
    });
    setView("knowledge");
    renderAll();
    persistDemoState();
    showToast("Knowledge article opened");
    return;
  }

  const createButton = event.target.closest("#createTicketButton");
  if (!createButton || !appState.triageAnalysis) return;

  const newTicket = {
    id: nextTicketId(),
    ...appState.triageAnalysis
  };

  tickets.unshift(newTicket);
  appState.selectedTicketId = newTicket.id;
  appState.filter = "all";
  appState.search = "";
  ticketSearch.value = "";
  document.querySelectorAll("#filterTabs button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filter === "all");
  });
  addActivity(`${newTicket.id} created from AI triage`, `${newTicket.category} ticket added to the live queue.`);
  setView("dashboard");
  renderAll();
  showToast(`${newTicket.id} added to ticket queue`);
});

ticketSearch.addEventListener("input", (event) => {
  appState.search = event.target.value;
  renderTicketList();
  renderQueueTable();
});

runTriageButton.addEventListener("click", () => {
  tickets.forEach((ticket) => {
    if (ticket.sentiment === "Negative") ticket.score = Math.min(99, ticket.score + 3);
    if (ticket.sla === "At risk") ticket.priority = "High";
  });
  addActivity("AI triage completed", "Scores, SLA risk, knowledge matches, and routing signals were refreshed.");
  showToast("AI triage completed");
  renderAll();
});

exportButton.addEventListener("click", () => {
  const summary = visibleTickets()
    .map((ticket) => `${ticket.id}: ${ticket.subject} | ${ticket.sentiment} | ${ticket.priority} | ${ticket.sla}`)
    .join("\n");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(summary)
      .then(() => showToast("Queue summary copied"))
      .catch(() => showToast("Queue summary ready"));
  } else {
    showToast("Queue summary ready");
  }
});

loadDemoState();
renderAll();
