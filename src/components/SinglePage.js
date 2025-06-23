import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";
import Home from "./Home/Home";
import Home2 from "./Home/Home2";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import ResumeNew from "./Resume/ResumeNew";

function SinglePage() {
  return (
    <div>
      <Particle />
      <section id="home" style={{ paddingTop: "80px" }}>
        <Home />
        <Home2 />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="resume">
        <ResumeNew />
      </section>
    </div>
  );
}

export default SinglePage;
