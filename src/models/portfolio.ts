export type ProjectTone = "cyan" | "violet" | "mint" | "gold";

export type Project = {
  title: string;
  category: string;
  problem: string;
  stack: string[];
  metric: string;
  demo: string;
  repo: string;
  tone: ProjectTone;
};

export type Skill = {
  label: string;
  value: number;
  tools: string;
};

export type Experience = {
  period: string;
  role: string;
  description: string;
};

export const navItems = ["About", "Skills", "Projects", "Design", "Experience", "Contact"];

export const roles = [
  "Product Designer",
  "React Engineer",
  "Full-Stack Developer",
  "Design Systems Lead",
];

export const projects: Project[] = [
  {
    title: "AtlasCRM",
    category: "Full-Stack SaaS",
    problem:
      "A client pipeline dashboard that replaces scattered spreadsheets with searchable deal flows, activity logs, and revenue forecasting — built for lean sales teams that need clarity at a glance.",
    stack: ["React", "Node", "Postgres", "Figma"],
    metric: "Reduced lead follow-up time by 42%",
    demo: "https://jahanzaib.dev/atlascrm",
    repo: "https://github.com/jahanzaib/atlascrm",
    tone: "cyan",
  },
  {
    title: "FinSight Mobile",
    category: "UI/UX Case Study",
    problem:
      "A personal finance app designed for confident mobile decision-making — faster budget reviews, cleaner transaction grouping, and an interface that respects the user's time.",
    stack: ["Figma", "React Native", "User Flows", "Prototyping"],
    metric: "Improved task completion by 31%",
    demo: "https://jahanzaib.dev/finsight",
    repo: "https://github.com/jahanzaib/finsight",
    tone: "violet",
  },
  {
    title: "LaunchNest",
    category: "Frontend Platform",
    problem:
      "A modular landing-page builder for founders — ships campaign pages in hours with reusable content sections, embedded analytics, and conversion-focused copy patterns.",
    stack: ["React", "TypeScript", "Vercel", "CMS"],
    metric: "Lighthouse performance score: 96",
    demo: "https://jahanzaib.dev/launchnest",
    repo: "https://github.com/jahanzaib/launchnest",
    tone: "mint",
  },
  {
    title: "CareSync Portal",
    category: "Product Design",
    problem:
      "A patient scheduling and intake portal that cuts front-desk workload in half — accessible on mobile, WCAG-compliant, and designed to reduce form abandonment at every step.",
    stack: ["Figma", "Design System", "React", "A11y"],
    metric: "Cut form abandonment by 28%",
    demo: "https://jahanzaib.dev/caresync",
    repo: "https://github.com/jahanzaib/caresync",
    tone: "gold",
  },
];

export const caseStudies = [
  "B2B dashboard redesign — cleaner information hierarchy, role-based empty states, and 40% faster filter interactions.",
  "Mobile checkout audit — removed friction points around trust signals, field layout, and conversion copy.",
  "Design system build — scalable tokens, component library, usage documentation, and onboarding guidelines.",
];

export const skills: Skill[] = [
  { label: "UI/UX Design",           value: 94, tools: "Figma, Adobe XD, Illustrator, Photoshop" },
  { label: "Frontend Development",   value: 92, tools: "React, TypeScript, Tailwind CSS, Vite" },
  { label: "Full-Stack Delivery",    value: 86, tools: "Node.js, REST APIs, PostgreSQL, Auth, Vercel" },
  { label: "Product Strategy",       value: 90, tools: "User research, wireframes, OKRs, client workshops" },
];

export const experience: Experience[] = [
  {
    period: "2023 - Present",
    role: "Independent Designer & Full-Stack Developer",
    description:
      "Running end-to-end product engagements for US startups — from initial discovery and wireframes through to production deployment. Responsible for design decisions, engineering execution, and client communication.",
  },
  {
    period: "2021 - 2023",
    role: "Frontend Developer",
    description:
      "Owned the frontend layer of two SaaS products — built component libraries from scratch, established design-system documentation, and drove Lighthouse performance from 68 to 94 across both products.",
  },
  {
    period: "2019 - 2021",
    role: "UI/UX Designer",
    description:
      "Delivered product design across web and mobile — wireframes, prototypes, and brand-aligned interfaces for startups in fintech, healthcare, and e-commerce verticals.",
  },
];

// ── Contact & Social ────────────────────────────────────────────────────────
// 🔴 UPDATE: Replace with Jahanzaib's real Gmail address below
export const CONTACT_EMAIL = "jahanzaibkhan@gmail.com";

export const socialLinks = [
  { label: "jahanzaibkhan@gmail.com", href: `mailto:${CONTACT_EMAIL}`,  target: "_self" },
  { label: "LinkedIn",                href: "https://www.linkedin.com/in/jahanzaib-khan-8aa560401/", target: "_blank" },
];
