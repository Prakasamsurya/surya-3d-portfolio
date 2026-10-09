type Props = { eyebrow: string; title: string; number: string };

export default function SectionHeading({ eyebrow, title, number }: Props) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-title-row">
        <h2>{title}</h2>
        <span className="section-number" aria-hidden="true">{number}</span>
      </div>
    </div>
  );
}
