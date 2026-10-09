import type { PortfolioSectionContent } from "../../content/portfolio";
import SectionHeading from "./SectionHeading";

type Props = {
  content: PortfolioSectionContent;
  className?: string;
};

export default function SectionContent({ content, className = "" }: Props) {
  return (
    <section
      id={content.id}
      className={`portfolio-section ${className}`.trim()}
      aria-labelledby={`${content.id}-heading`}
    >
      <div className="section-content">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          number={content.number}
        />
        <p className="section-intro">{content.intro}</p>
        <dl className="fact-list">
          {content.facts.map((fact) => (
            <div className="fact-row" key={`${fact.label}-${fact.value}`}>
              <dt>{fact.label}</dt>
              <dd>
                <span
                  className={`fact-value fact-value--${fact.status}`}
                  data-content-status={fact.status}
                >
                  {fact.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
