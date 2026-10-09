import SectionContent from "../components/ui/SectionContent";
import { portfolioContent } from "../content/portfolio";

export default function Intro() {
  return <SectionContent content={portfolioContent.intro} className="intro-section" />;
}
