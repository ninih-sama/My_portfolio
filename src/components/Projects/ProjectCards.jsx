import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards({ imgPath, title, description, techStack }) {
  return (
    <Card className="project-card-view" style={{ marginBottom: "30px" }}>
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
        style={{ borderRadius: "10px", opacity: 0.5, width: 400, height: 600 }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: 600, fontSize: "1.2rem" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", marginBottom: "15px" }}>
          {description}      {/* Tech stack logos */}
          {techStack && techStack.length > 0 && (
            <div
              className="project-tech-stack"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              {techStack.map((tech, index) => (
                <img
                  key={index}
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  style={{ height: "25px", width: "25px" }}
                />
              ))}
            </div>
          )}
        </Card.Text>


      </Card.Body>
    </Card>
  );
}

export default ProjectCards;