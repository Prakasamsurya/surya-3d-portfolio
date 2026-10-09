import type { ReactNode } from "react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#intro" aria-label="Surya Prakasam — Intro">
          <span className="wordmark-mark" aria-hidden="true">SP</span>
          <span>Surya Prakasam</span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          {sections.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </header>
      <main id="main-content" className="site-main">{children}</main>
      <footer className="site-footer">
        <span>Surya Prakasam</span>
        <span>Portfolio foundation · Stage 1</span>
      </footer>
    </>
  );
}
