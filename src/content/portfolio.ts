export type ContentStatus = "verified" | "placeholder" | "pending-verification";

export type PortfolioFact = {
  label: string;
  value: string;
  status: ContentStatus;
};

export type PortfolioSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  number: string;
  intro: string;
  facts: PortfolioFact[];
};

export const portfolioContent = {
  intro: {
    id: "intro",
    eyebrow: "01 / Welcome",
    title: "Intro",
    number: "01",
    intro:
      "I'm Surya Prakasam, a developer and AI enthusiast interested in AI, Generative AI, data, full-stack development, UI/UX and automation.",
    facts: [
      {
        label: "Community",
        value:
          "I run a community that helps people improve their resumes and make project ideas stronger and more distinctive.",
        status: "verified",
      },
      {
        label: "Sharing",
        value:
          "I share AI concepts and practical learning content for free through Instagram.",
        status: "verified",
      },
    ],
  },
  skills: {
    id: "skills",
    eyebrow: "02 / Toolkit",
    title: "Skills",
    number: "02",
    intro: "A clear view of the tools and skills I can demonstrate.",
    facts: [
      {
        label: "Verified skills",
        value: "[PLACEHOLDER: confirm skill list and proficiency levels]",
        status: "placeholder",
      },
    ],
  },
  experience: {
    id: "experience",
    eyebrow: "03 / Work",
    title: "Experience",
    number: "03",
    intro: "Professional experience and contributions.",
    facts: [
      { label: "Organization", value: "JAS WORLD", status: "verified" },
      { label: "Role", value: "AI & Generative AI Intern", status: "verified" },
      {
        label: "Dates",
        value: "[PLACEHOLDER: internship dates]",
        status: "placeholder",
      },
      {
        label: "Responsibilities",
        value: "[PLACEHOLDER: confirm responsibilities and outcomes]",
        status: "placeholder",
      },
      {
        label: "Technologies",
        value: "[PLACEHOLDER: confirm technologies used in this role]",
        status: "placeholder",
      },
    ],
  },
  projects: {
    id: "projects",
    eyebrow: "04 / Selected work",
    title: "Projects",
    number: "04",
    intro:
      "Selected work will be described accurately, distinguishing experiments and prototypes from finished applications.",
    facts: [
      {
        label: "Real-Time Emotional Aware Virtual Interviewer",
        value: "[PLACEHOLDER: confirm features, implementation status and project link]",
        status: "placeholder",
      },
      {
        label: "Adaptive Theme Changing AI Chatbot",
        value: "[PLACEHOLDER: confirm features, implementation status and project link]",
        status: "placeholder",
      },
      {
        label: "RAG projects and experiments",
        value: "[PLACEHOLDER: confirm experiment details and status]",
        status: "placeholder",
      },
      {
        label: "AI/ML projects",
        value: "[PLACEHOLDER: confirm selected projects and links]",
        status: "placeholder",
      },
      {
        label: "Power BI projects",
        value: "[PLACEHOLDER: confirm selected projects and links]",
        status: "placeholder",
      },
      {
        label: "n8n AI automation projects",
        value: "[PLACEHOLDER: confirm selected projects, excluding basic flows]",
        status: "placeholder",
      },
    ],
  },
  ai: {
    id: "ai",
    eyebrow: "05 / Exploration",
    title: "AI",
    number: "05",
    intro:
      "A separate space for AI tools used, learning milestones and practical experimentation.",
    facts: [
      {
        label: "Tools and usage",
        value: "[PENDING VERIFICATION: confirm which AI tools were used and in what context]",
        status: "pending-verification",
      },
      {
        label: "Learning milestones",
        value: "[PLACEHOLDER: confirm AI learning milestones to feature]",
        status: "placeholder",
      },
    ],
  },
  education: {
    id: "education",
    eyebrow: "06 / Background",
    title: "Education",
    number: "06",
    intro: "Education and verified qualifications.",
    facts: [
      {
        label: "Institution",
        value: "SRM TRP Engineering College",
        status: "verified",
      },
      {
        label: "Degree and dates",
        value: "[PLACEHOLDER: confirm degree details and dates]",
        status: "placeholder",
      },
      {
        label: "Certificates",
        value: "[PLACEHOLDER: add only certificates with verified links]",
        status: "placeholder",
      },
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "07 / Say hello",
    title: "Contact",
    number: "07",
    intro: "Contact and profile links will be added after they are confirmed.",
    facts: [
      { label: "Email", value: "[PLACEHOLDER: confirm email address]", status: "placeholder" },
      { label: "GitHub", value: "[PLACEHOLDER: confirm profile URL]", status: "placeholder" },
      { label: "LinkedIn", value: "[PLACEHOLDER: confirm profile URL]", status: "placeholder" },
      { label: "Phone", value: "[PLACEHOLDER: confirm phone number]", status: "placeholder" },
      { label: "Instagram", value: "[PLACEHOLDER: confirm handle and whether to include]", status: "placeholder" },
    ],
  },
} satisfies Record<string, PortfolioSectionContent>;
