import { useEffect, type ReactNode } from "react";
import PortfolioScene from "../../scene/PortfolioScene";

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
  useEffect(() => {
    const sectionsInOrder = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".primary-nav a"));
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => {
          if (link.hash === `#${visible.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-18% 0px -18% 0px" },
    );

    sectionsInOrder.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PortfolioScene />
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
        <span>Scroll to explore · 3D portfolio</span>
      </footer>
    </>
  );
}
