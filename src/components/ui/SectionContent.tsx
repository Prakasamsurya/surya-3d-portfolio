import { useEffect } from "react";
import type { CSSProperties } from "react";
import type { PortfolioSectionContent } from "../../content/portfolio";
import SectionHeading from "./SectionHeading";

type Props = {
  content: PortfolioSectionContent;
  className?: string;
};

export default function SectionContent({ content, className = "" }: Props) {
  useEffect(() => {
    const section = document.getElementById(content.id);
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      section.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.dataset.visible = "true";
        } else {
          section.dataset.visible = "false";
        }
      },
      { threshold: 0.18, rootMargin: "-8% 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [content.id]);

  return (
    <section
      id={content.id}
      className={`portfolio-section ${className}`.trim()}
      aria-labelledby={`${content.id}-heading`}
      data-visible="false"
    >
      <div className="section-content">
        <div className="section-kicker">
          <span className="section-kicker-line" aria-hidden="true" />
          <span>{content.eyebrow}</span>
          <span className="section-kicker-index">{content.number} / 07</span>
        </div>
        <SectionHeading
          eyebrow=""
          title={content.title}
          number=""
        />
        <p className="section-intro">{content.intro}</p>
        <dl className="fact-list">
          {content.facts.map((fact, index) => (
            <div
              className="fact-row"
              key={`${fact.label}-${fact.value}`}
              style={{ "--fact-index": index } as CSSProperties}
            >
              <dt>{fact.label}</dt>
              <dd>
                <span
                  className={`fact-value fact-value--${fact.status}`}
                  data-content-status={fact.status}
                >
                  {fact.status === "placeholder"
                    ? "Details being finalized"
                    : fact.status === "pending-verification"
                      ? "Awaiting confirmation"
                      : fact.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="section-bottomline" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <span className="section-bottomline-track"><span /></span>
          <span>{content.number}</span>
        </div>
      </div>
    </section>
  );
}
