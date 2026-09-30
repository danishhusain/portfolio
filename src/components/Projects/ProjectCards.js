import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-column">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontWeight: "700", color: "#e0b0ff" }}>
          {props.title}
        </Card.Title>

        {props.tags && (
          <div className="mb-2 d-flex flex-wrap gap-1 justify-content-center">
            {props.tags.map((tag, i) => (
              <Badge
                key={i}
                bg="secondary"
                style={{
                  backgroundColor: "rgba(199, 112, 240, 0.2)",
                  color: "#d896ff",
                  border: "1px solid rgba(199, 112, 240, 0.4)",
                  fontSize: "0.75em",
                  fontWeight: "normal",
                  margin: "2px",
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify", fontSize: "0.92em", color: "#dcd6ea", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        <div className="mt-auto pt-3">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
