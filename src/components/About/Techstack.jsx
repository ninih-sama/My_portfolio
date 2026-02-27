import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import VueIcon from "../../Assets/TechIcons/Vue.svg";
import NextIcon from "../../Assets/TechIcons/Next.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import FigmaIcon from "../../Assets/TechIcons/figma.svg";

function Techstack() {
  return (
    <div>
      {/* ----- Frameworks / Libraries ----- */}
      <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Frameworks & Libraries</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="react" />
          <div className="tech-icons-text">React</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={VueIcon} alt="vue" className="w-1 h-1" />          <div className="tech-icons-text">Vue.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={NextIcon} alt="next" />
          <div className="tech-icons-text">Next.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Tailwind} alt="tailwind" />
          <div className="tech-icons-text">Tailwind CSS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={MUI} alt="mui" />
          <div className="tech-icons-text">Material UI</div>
        </Col>
      </Row>

      {/* ----- Languages ----- */}
      <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Languages</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="javascript" />
          <div className="tech-icons-text">JavaScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Typescript} alt="typescript" />
          <div className="tech-icons-text">TypeScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Node} alt="node" />
          <div className="tech-icons-text">Node.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="python" />
          <div className="tech-icons-text">Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Java} alt="java" />
          <div className="tech-icons-text">Java</div>
        </Col>
      </Row>

      {/* ----- Tools / DevOps ----- */}
      <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Tools</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="git" />
          <div className="tech-icons-text">Git</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Docker} alt="docker" />
          <div className="tech-icons-text">Docker</div>
        </Col>


      </Row>
    </div>
  );
}

export default Techstack;