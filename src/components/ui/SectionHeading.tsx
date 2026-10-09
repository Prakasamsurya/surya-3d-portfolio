type Props = { eyebrow: string; title: string; number: string };

export default function SectionHeading({ eyebrow, title, number }: Props) {
  const headingId = `${title.toLowerCase()}-heading`;
  return (
    <div className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <div className="section-title-row">
        <h2 id={headingId}>{title}</h2>
        {number && <span className="section-number" aria-hidden="true">{number}</span>}
      </div>
    </div>
  );
}
