import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Chrome.svg";
import vsCode from "../../Assets/TechIcons/VSCode.svg";
import intelliJ from "../../Assets/TechIcons/IntelliJ.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import FigmaIcon from "../../Assets/TechIcons/Figma.svg";
import AndroidStudioIcon from "../../Assets/TechIcons/AndroidStudio.svg"; // New
import WebStormIcon from "../../Assets/TechIcons/WebStorm.svg";           // New
import LinuxIcon from "../../Assets/TechIcons/Linux.svg";               // New
import WindowsIcon from "../../Assets/TechIcons/Windows.svg";           // New

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AndroidStudioIcon} alt="Android Studio" className="tech-icon-images" />
        <div className="tech-icons-text">Android Studio</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={WebStormIcon} alt="WebStorm" className="tech-icon-images" />
        <div className="tech-icons-text">WebStorm</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={LinuxIcon} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={WindowsIcon} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={FigmaIcon} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  );
}

export default Toolstack;