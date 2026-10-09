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
      "I'm Surya Prakasam — a developer exploring Generative AI, data, full-stack products, interface design and automation by building practical things.",
    facts: [
      {
        label: "Community",
        value: "I help people strengthen their resumes and turn project ideas into clearer, more distinctive work.",
        status: "verified",
      },
      {
        label: "Sharing",
        value: "I share approachable AI concepts and practical learning content for free through Instagram.",
        status: "verified",
      },
    ],
  },
  skills: {
    id: "skills",
    eyebrow: "02 / Toolkit",
    title: "Skills",
    number: "02",
    intro: "Tools and technologies I have been learning and using across development, data and automation.",
    facts: [
      { label: "Development", value: "Python · JavaScript · React · Node.js · HTML · CSS", status: "verified" },
      { label: "Data", value: "SQL · Pandas · NumPy · Excel · Power BI", status: "verified" },
      { label: "AI", value: "LLM APIs · Prompt design · RAG experiments · GenAI workflows", status: "verified" },
      { label: "Automation & tools", value: "n8n · APIs · Git · GitHub · Playwright · UiPath", status: "verified" },
    ],
  },
  experience: {
    id: "experience",
    eyebrow: "03 / Work",
    title: "Experience",
    number: "03",
    intro: "A mix of interface design, full-stack development and applied AI internship experience.",
    facts: [
      { label: "JAS WORLD", value: "AI & Generative AI Intern", status: "verified" },
      { label: "Tamil InfoTech", value: "Full Stack Developer Intern", status: "verified" },
      { label: "CodTech IT Solutions", value: "UI/UX Design Intern", status: "verified" },
      { label: "Independent work", value: "Freelance UI/UX design and practical product experiments", status: "verified" },
    ],
  },
  projects: {
    id: "projects",
    eyebrow: "04 / Selected work",
    title: "Projects",
    number: "04",
    intro: "A selection of prototypes, learning builds and data work. Each is presented according to its actual stage, not as a finished product by default.",
    facts: [
      {
        label: "Emotional-aware virtual interviewer",
        value: "Exploring resume parsing, generated interview questions, voice interaction and interview feedback in one workflow.",
        status: "verified",
      },
      {
        label: "Adaptive AI chatbot",
        value: "A React and Node.js chatbot concept using Gemini with emotion-aware, adaptive interface themes.",
        status: "verified",
      },
      {
        label: "InternTra",
        value: "An internship platform project built around a React and TypeScript frontend.",
        status: "verified",
      },
      {
        label: "IPL data analysis",
        value: "Working with IPL match and ball-by-ball data to explore team performance and prediction features.",
        status: "verified",
      },
      {
        label: "Retail BI analysis",
        value: "Preparing retail transaction data and exploring business metrics and interactive reporting in Power BI.",
        status: "verified",
      },
      {
        label: "RAG experiments",
        value: "Learning retrieval-augmented generation with embeddings and vector search; local implementation remains experimental.",
        status: "verified",
      },
    ],
  },
  ai: {
    id: "ai",
    eyebrow: "05 / Exploration",
    title: "AI",
    number: "05",
    intro: "I focus on understanding how AI systems work, then testing the ideas in small, practical builds.",
    facts: [
      { label: "Generative AI", value: "LLMs, API integration, prompt design and retrieval-augmented generation concepts", status: "verified" },
      { label: "Workflow automation", value: "n8n workflows that connect services and reduce repetitive manual steps", status: "verified" },
      { label: "Current approach", value: "Prefer free tools and hosted APIs over resource-heavy local models", status: "verified" },
    ],
  },
  education: {
    id: "education",
    eyebrow: "06 / Background",
    title: "Education",
    number: "06",
    intro: "My academic foundation and continued self-directed learning.",
    facts: [
      { label: "Institution", value: "SRM TRP Engineering College", status: "verified" },
      { label: "Focus areas", value: "Computer science, software development, data and applied AI", status: "verified" },
      { label: "Learning", value: "Data Science, Generative AI, analytics and practical product development", status: "verified" },
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "07 / Say hello",
    title: "Contact",
    number: "07",
    intro: "Explore my work and follow what I build next.",
    facts: [
      { label: "GitHub", value: "github.com/Prakasamsurya", status: "verified" },
      { label: "Portfolio", value: "You're already here — scroll through the chapters to explore my work.", status: "verified" },
    ],
  },
} satisfies Record<string, PortfolioSectionContent>;
