import SiteShell from "./components/layout/SiteShell";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import AI from "./sections/AI";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <SiteShell>
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <AI />
      <Education />
      <Contact />
    </SiteShell>
  );
}
