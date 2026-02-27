import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/intellidetect.png";
import emotion from "../../Assets/Projects/evoyazy.png";
import editor from "../../Assets/Projects/languagiz.png";
import chatify from "../../Assets/Projects/itasy.jpg";
import suicide from "../../Assets/Projects/Foodtrack.jpg";
import bitsOfCode from "../../Assets/Projects/spam.png";

// React Icons
import { SiReact, SiNextdotjs, SiVuedotjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="text-white">
          Here are a few projects I've worked on recently.
        </p>

        <Row className="justify-content-center pb-10">

          {/* Intellidetect */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Intellidetect"
              description="A camera anomaly detection interface supported by AI, in React TS and SCSS."
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              <SiReact size={28} color="#61DAFB" />        {/* React bleu clair */}
              <SiTypescript size={28} color="#3178C6" />  {/* TypeScript bleu */}
            </div>
          </Col>

          {/* Intranet Academy Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Intranet Academy Plateform"
              description="A full academy plateform interaction with chats, courses, and exercises and dashboard for all. I was the frontend developer, building it with Next.js and Tailwind CSS."
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              <SiNextdotjs size={28} color="#000000" />    {/* Next.js noir */}
              <SiTailwindcss size={28} color="#38B2AC" />  {/* Tailwind cyan */}
              <SiTypescript size={28} color="#3178C6" />   {/* TypeScript bleu */}
            </div>
          </Col>

          {/* languagIZ */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="languagIZ"
              description="Platform for programming languages learning, built in Vue.js."
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              <SiVuedotjs size={28} color="#42b883" />    {/* Vue vert */}
            </div>
          </Col>

          {/* Spam or Ham */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spam or Ham"
              description="A school project for ML, in Python for checking if SMS is a spam."
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              <SiPython size={28} color="#3776AB" />       {/* Python bleu */}
            </div>
          </Col>

          {/* FoodTrack */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="FoodTrack"
              description="A web application for food delivery, built with Vue.js."
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              <SiVuedotjs size={28} color="#42b883" />    {/* Vue vert */}
            </div>
          </Col>

          {/* E-voyazy */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-voyazy"
              description="An application for trips around Madagascar, in XML and Java."
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              <FaJava size={28} color="#007396" />         {/* Java bleu foncé */}
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;