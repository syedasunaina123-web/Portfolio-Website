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
  },
  {
    title: "Yummy Pet Palate",
    category: "E-commerce Website",
    problem: "A specialized online store for premium pet food and treats.",
    stack: ["React", "Shopify"],
    metric: "Increased sales by 20%",
    tone: "violet",
    video: "YummyPetPalate.mp4",
  }
];

export const caseStudies = [
  "B2B dashboard redesign — cleaner information hierarchy, role-based empty states, and 40% faster filter interactions.",
  "Mobile checkout audit — removed friction points around trust signals, field layout, and conversion copy.",
  "Design system build — scalable tokens, component library, usage documentation, and onboarding guidelines.",
];

export const skills: Skill[] = [
  { label: "UI/UX Design",           value: 99, tools: "Figma, Adobe XD, Illustrator, Photoshop" },
  { label: "Full-Stack Development", value: 99, tools: "React, Node.js, PostgreSQL, Auth, Vercel" },
  { label: "Project Management",     value: 100, tools: "Jira, Agile, Scrum" },
  { label: "Core Competencies",      value: 95, tools: "Management Skills, Creativity, Digital Marketing, Negotiation, Critical Thinking, Leadership" },
];

export const experience: Experience[] = [
  {
    period: "2023 - 2025",
    role: "Manager",
    description: "Tech Pulse: Experienced Manager skilled in leading teams and improving operations to achieve business goals. Focused on efficiency, teamwork, and delivering consistent results."
  },
  {
    period: "2022 - 2023",
    role: "Team Leader",
    description: "Assume Technologies: Skilled Team Leader with a focus on collaboration, motivation, and achieving results."
  },
  {
    period: "2018 - 2022",
    role: "Sales Executive",
    description: "Future Tech Vision: Results driven Sales Executive skilled in closing deals and building strong client relationships. Worked here for 4 years."
  },
  {
    period: "2021 - 2025",
    role: "Software Engineering",
    description: "Pursued comprehensive studies and practical training in Software Engineering."
  }
];

// ── Contact & Social ────────────────────────────────────────────────────────
// 🔴 UPDATE: Replace with Jahanzaib's real Gmail address below
export const CONTACT_EMAIL = "jahanzaibkhann77@gmail.com";

export const socialLinks = [
  { label: "jahanzaibkhann77@gmail.com", href: `mailto:${CONTACT_EMAIL}`,  target: "_self" },
  { label: "LinkedIn",                href: "https://www.linkedin.com/in/jahanzaib-khan-8aa560401/", target: "_blank" },
];
