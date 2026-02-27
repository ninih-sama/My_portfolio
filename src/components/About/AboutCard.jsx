import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">HARIFITIA NICOLE</span>{" "}
            from <span className="purple">Madagascar</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Front-End Developer</span> and
            <span className="purple">Designer</span>.
            <br />I hold a degree in{" "}
            <span className="purple">Computer Science and Artificial Intelligence</span> from{" "}
            <span className="purple">ISPM Antsobolo</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Electronics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nicole</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
