import React from "react";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title name="Shameek Dutta" leadText="Second Year CSE Student at SRMIST" />
      <SkillsSection />
      <ProjectSection />
      <About />
    </div>
  );
}
export default HomePage;
