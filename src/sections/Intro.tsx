import SectionHeading from "../components/ui/SectionHeading";

export default function Intro() {
  return <section id="intro" className="portfolio-section intro-section" aria-labelledby="intro-heading">
    <div className="section-content">
      <SectionHeading eyebrow="01 / Welcome" title="Intro" number="01" />
      <p className="section-placeholder">The introduction content will be added in the content stage.</p>
    </div>
  </section>;
}
