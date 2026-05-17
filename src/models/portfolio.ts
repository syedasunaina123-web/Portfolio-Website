export type ProjectTone = "cyan" | "violet" | "mint" | "gold";

export type Project = {
  title: string;
  category: string;
  problem: string;
  stack: string[];
  metric: string;
  demo?: string;
  repo?: string;
  tone: ProjectTone;
  video?: string;
  image?: string;
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
    title: "Apptrix",
    category: "Web Application",
    problem: "A comprehensive solution for managing appointments and schedules efficiently.",
    stack: ["React", "Node.js", "MongoDB"],
    metric: "Increased scheduling efficiency by 40%",
    tone: "cyan",
    video: "Apptrix.mp4",
  },
  {
    title: "Gem Elegance",
    category: "E-commerce Platform",
    problem: "A premium online jewelry store designed for high-end customer experiences.",
    stack: ["React", "Shopify", "Tailwind CSS"],
    metric: "Boosted online sales by 25%",
    tone: "violet",
    video: "GemElegance.mp4",
  },
  {
    title: "Institute of Fine Arts",
    category: "Educational Portal",
    problem: "An interactive digital gallery and course management system for art students.",
    stack: ["Vue.js", "Firebase", "CSS Modules"],
    metric: "Enhanced student engagement by 50%",
    tone: "mint",
    video: "InstituteofFineArts.mp4",
  },
  {
    title: "Inventory",
    category: "Internal Dashboard",
    problem: "A robust inventory management system with real-time tracking and reporting.",
    stack: ["Angular", "Express", "PostgreSQL"],
    metric: "Reduced inventory errors by 30%",
    tone: "gold",
    video: "Inventory.mp4",
  },
  {
    title: "Luxury Stay",
    category: "Booking System",
    problem: "A high-end hotel booking platform with virtual tours and seamless reservation flow.",
    stack: ["Next.js", "Prisma", "Stripe"],
    metric: "Increased direct bookings by 35%",
    tone: "cyan",
    video: "LuxuryStay.mp4",
  },
  {
    title: "Plant Palace",
    category: "E-commerce Store",
    problem: "A vibrant online store for exotic plants with care guides and subscription boxes.",
    stack: ["React", "Gatsby", "Contentful"],
    metric: "Grew subscriber base by 20% MoM",
    tone: "mint",
    video: "PlantPalace.mp4",
  },
  {
    title: "Ruya Airlines",
    category: "Aviation Portal",
    problem: "A streamlined flight booking and management system for a modern airline.",
    stack: ["React", "GraphQL", "AWS"],
    metric: "Improved check-in speed by 45%",
    tone: "violet",
    video: "RuyaAirlines.mp4",
  },

  {
    title: "The Groove Fest",
    category: "Event Platform",
    problem: "A dynamic website for a music festival featuring artist lineups and ticket sales.",
    stack: ["Vue.js", "Nuxt", "Tailwind CSS"],
    metric: "Sold out tickets in 48 hours",
    tone: "cyan",
    video: "TheGrooveFest.mp4",
  },
  {
    title: "Coffee Palace",
    category: "Brand Website",
    problem: "An inviting digital storefront for a boutique coffee roaster.",
    stack: ["HTML", "CSS", "JavaScript"],
    metric: "Expanded brand reach locally",
    tone: "gold",
    image: "coffee-palace.jpg",
  },
  {
    title: "HMS",
    category: "Healthcare System",
    problem: "A secure hospital management system handling patient records and billing.",
    stack: ["React", "Node.js", "PostgreSQL"],
    metric: "Streamlined patient intake",
    tone: "mint",
    image: "hms.png",
  },

  {
    title: "Pandemix",
    category: "Web Application",
    problem: "A data visualization dashboard for financial analytics.",
    stack: ["React", "D3.js", "AWS"],
    metric: "Improved reporting speed",
    tone: "cyan",
    image: "5.png",
  }
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
