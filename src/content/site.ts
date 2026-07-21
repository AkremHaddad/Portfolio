// Single source of truth for the portfolio's copy and links — edit here,
// not in page.tsx or the case study template, as new work is ready.

export type Shot = { src: string; alt: string };

export type WorkItem =
  | {
      real: true;
      slug: string;
      name: string;
      description: string;
      live: string;
      github: string | null;
      shots: Shot[];
    }
  | {
      real: false;
      name: string;
    };

export type CaseStudy = {
  name: string;
  category: string;
  scope: string;
  liveHref: string;
  liveLabel: string;
  problem: string[];
  architecture: {
    intro: string;
    steps: { title: string; subtitle: string }[];
  };
  decisions: { title: string; body: string }[];
  outcome: string[];
};

export const site = {
  name: "Akram Haddad",
  firstName: "Akram",
  lastName: "Haddad",
  role: "Web Developer",
  heroTagline:
    "I design and build high-end websites for businesses that need to look like the obvious choice.",
  email: "akremhaddad125@gmail.com",
  links: {
    github: "https://github.com/AkremHaddad",
    linkedin: "https://www.linkedin.com/in/akrem-haddad/",
  },
  specialization: {
    eyebrow: "Specialization",
    heading:
      "Custom UI/UX and full-stack builds for businesses outgrowing their template.",
    paragraphs: [
      "Most business sites start on a template and stay there — recognizable, generic, and quietly costing credibility. I take that site apart and rebuild it as something purpose-made: a front end that reads as premium, an admin back office built for how the team actually works, and the systems that connect them.",
      "That means thinking past the homepage — forms, notifications, content management, integrations — the full path from a visitor's click to the business's inbox.",
    ],
  },
  work: [
    {
      real: true,
      slug: "elysian-travel-group",
      name: "Elysian Travel Group",
      description:
        "Rebuilt a templated travel agency site into a custom, ultra-luxury experience — full front-end redesign, an admin back office, and a newsletter/contact system built from scratch.",
      live: "https://elysiantravelgroup.com",
      github: null,
      shots: [
        { src: "/images/work/elysian-travel-group/01-home.png", alt: "Elysian Travel Group — homepage" },
        { src: "/images/work/elysian-travel-group/02-about.png", alt: "Elysian Travel Group — about page" },
        { src: "/images/work/elysian-travel-group/03-services.png", alt: "Elysian Travel Group — services page" },
        { src: "/images/work/elysian-travel-group/04-experiences.png", alt: "Elysian Travel Group — experiences page" },
        { src: "/images/work/elysian-travel-group/05-journal.png", alt: "Elysian Travel Group — journal page" },
      ],
    },
    {
      real: true,
      slug: "spendo",
      name: "Spendo",
      description:
        "A cross-platform expense tracker built solo in Flutter and Firebase — real-time dashboards, a data-driven insights engine, and a fixed-point money system built to survive genuine daily use, not just a demo.",
      live: "https://spendo-56.web.app",
      github: "https://github.com/AkremHaddad/Spendo",
      shots: [
        { src: "/images/work/spendo/desktop.png", alt: "Spendo — dashboard, desktop" },
        { src: "/images/work/spendo/mobile.png", alt: "Spendo — dashboard, mobile" },
      ],
    },
    { real: false, name: "Project Three" },
    { real: false, name: "Project Four" },
    { real: false, name: "Project Five" },
  ] satisfies WorkItem[],
  contact: {
    heading: "Have a site that should feel this considered?",
  },
} as const;

export const caseStudies: Record<string, CaseStudy> = {
  "elysian-travel-group": {
    name: "Elysian Travel Group",
    category: "Ultra-luxury travel agency",
    scope: "Front end · Admin back office · Contact system",
    liveHref: "https://elysiantravelgroup.com",
    liveLabel: "elysiantravelgroup.com ↗",
    problem: [
      "Elysian was running on a templated travel-agency theme — the kind that signals \"small operator\" rather than the ultra-luxury positioning the business actually wanted. The design couldn't flex for how the brand presented destinations, and there was no back office at all: inquiries landed in a shared inbox with no record, no status, and no way for the team to see volume or follow up systematically.",
      'The brief wasn\'t "redesign the homepage." It was: replace the whole system — public site, staff tooling, and everything connecting them.',
    ],
    architecture: {
      intro:
        "Three pieces, one data path: a custom front end for visitors, an admin back office for the team, and a notification layer connecting the two so nothing sits unseen.",
      steps: [
        { title: "Front End", subtitle: "public site + inquiry form" },
        { title: "Admin Back Office", subtitle: "inquiry queue + status" },
        { title: "Email Notifications", subtitle: "client + concierge team" },
      ],
    },
    decisions: [
      {
        title: "A real back office, not a form-to-email shortcut",
        body: "Piping the form straight to email would've been faster to build, but inquiries would still get lost the same way they always had. Building a queue with status states cost more upfront and gave the team a system they could actually run the business on.",
      },
      {
        title: "Decoupled notification layer",
        body: "Notifications fire off the same inquiry event that populates the back office, rather than being hard-wired to the form. That made it possible to add the concierge-team alert after launch without touching the front end at all.",
      },
      {
        title: "Content structured for editorial control",
        body: "Destinations and packages needed to be edited without a developer, but the brand's visual bar was too high for a generic CMS theme. The admin layer separates content editing from presentation, so the team can update copy and imagery without ever touching layout.",
      },
    ],
    outcome: [
      "Live and in production. The back office shipped with the initial launch; a reporting dashboard for inquiry volume and conversion was added afterward as the team's needs became clearer in use.",
    ],
  },
  spendo: {
    name: "Spendo",
    category: "Personal finance app",
    scope: "Flutter · Firebase · Web, Android, Windows",
    liveHref: "https://spendo-56.web.app",
    liveLabel: "spendo-56.web.app ↗",
    problem: [
      "Spendo started as a portfolio piece — a way to demonstrate mobile/cross-platform engineering distinct from web-focused freelance work. But it became real software used daily to track real spending, which changes the bar: cosmetic bugs in a demo app are easy to ignore, but a wrong balance or a duplicated transaction in software you actually rely on isn't.",
      "That distinction surfaced a different class of problem than a typical CV project — floating-point currency drift, a balance that silently corrupted itself on delete, dashboards that didn't update without a manual refresh — the kind of correctness issue that only shows up under genuine, sustained use rather than a demo click-through.",
    ],
    architecture: {
      intro:
        "One Flutter codebase targets Web, Android, and Windows, backed by Firebase — Firestore as a reactive, per-user data store, with a Provider-based state layer sitting between it and the UI.",
      steps: [
        { title: "Firestore", subtitle: "reactive data store, per user" },
        { title: "Provider Notifiers", subtitle: "auth-scoped state layer" },
        { title: "Feature UI", subtitle: "dashboard, cashflow, budgets" },
      ],
    },
    decisions: [
      {
        title: "Fixed-point money, not floating point",
        body: "Storing amounts as double dinars caused real floating-point drift in production (126.36999998 instead of 126.37), and the UI was separately showing the wrong decimal precision for the target currency. The fix was integer millimes as the source of truth, with a backward-compatible getter so existing widgets kept compiling — old and new Firestore documents read correctly through the same code path with no manual data migration.",
      },
      {
        title: "Reactive-by-default, not one-shot reads",
        body: "Every notifier subscribes to Firestore via .snapshots().listen() rather than .get(), so the dashboard, balances, and category lists update live as data changes anywhere. This wasn't true from day one — the dashboard's cashflow listener was originally a one-shot fetch and had to be corrected to match the pattern the rest of the app already used.",
      },
      {
        title: "An honest rules engine, not oversold as AI",
        body: "The dashboard's insights feature surfaces a dozen statistical signals computed live from the user's own data — budget overruns, spend-trend swings, no-spend streaks, savings rate — all real statistics and heuristics scaled to the user's own history rather than hardcoded thresholds. A deliberate choice to build something genuinely useful without overclaiming AI or ML for what is actually a well-designed rules engine.",
      },
    ],
    outcome: [
      "The core data layer, dashboard and insights experience, real branding, and a redesigned landing page are live at spendo-56.web.app, with the full codebase on GitHub. Remaining work: a visual pass on form fields still using default styling, and features like repeating transactions and Excel export.",
    ],
  },
};
