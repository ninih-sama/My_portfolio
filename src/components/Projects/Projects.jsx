import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

// React Icons en format image ou SVG
import { SiReact, SiNextdotjs, SiVuedotjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Helper pour transformer les icônes React en image data-uri ou SVG URL
// Ici pour simplifier, on peut créer des objets techStack avec un src vers les logos officiels

const projects = [
  {
    title: "Intellidetect",
    description: "A camera anomaly detection interface supported by AI, in React TS and SCSS.",
    color: "#61DAFB",
    techStack: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "Intranet Academy Platform",
    description: "A full academy platform with chats, courses, exercises, and dashboard. Frontend built with Next.js & Tailwind.",
    color: "#38B2AC",
    techStack: [
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "languagIZ",
    description: "Platform for programming languages learning, built in Vue.js.",
    color: "#42b883",
    techStack: [
      { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    ],
  },
  {
    title: "Spam or Ham",
    description: "School ML project in Python for checking if SMS is a spam.",
    color: "#3776AB",
    techStack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "FoodTrack",
    description: "A web application for food delivery, built with Vue.js.",
    color: "#42b883",
    techStack: [
      { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    ],
  },
  {
    title: "E-voyazy",
    description: "An application for trips around Madagascar, in XML and Java.",
    color: "#007396",
    techStack: [
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
];

function Projects() {
  return (
    <Container fluid className="project-section" style={{ padding: "50px 0" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="text-white">Here are a few projects I've worked on recently.</p>

        <Row className="justify-content-center">
          {projects.map((proj, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <ProjectCards
                title={proj.title}
                description={proj.description}
                techStack={proj.techStack}
                color={proj.color}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;