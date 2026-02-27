import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards({ imgPath, title, description, techStack, color }) {
  return (
    <Card
      className="project-card-view"
      style={{
        width: "100%",
        maxWidth: "280px",
        aspectRatio: "1 / 1",   // Card carrée
        borderRadius: "15px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "15px",
        marginBottom: "30px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Icône / image en haut */}
      {imgPath && (
        <Card.Img
          variant="top"
          src={imgPath}
          alt={title}
          style={{
            borderRadius: "10px",
            maxHeight: "120px",
            objectFit: "cover",
            marginBottom: "10px",
            opacity: 0.7,
          }}
        />
      )}

      {/* Titre coloré */}
      <Card.Title style={{ fontWeight: 700, fontSize: "1.3rem", color: color || "#61DAFB" }}>
        {title}
      </Card.Title>

      {/* Description */}
      <Card.Text style={{ fontSize: "0.9rem", marginTop: "5px", textAlign: "justify" }}>
        {description}
      </Card.Text>

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <div
          className="project-tech-stack"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.name}
              title={tech.name}
              style={{ height: "28px", width: "28px" }}
            />
          ))}
        </div>
      )}

      {/* Hover effect */}
      <style jsx>{`
        .project-card-view:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </Card>
  );
}

export default ProjectCards;