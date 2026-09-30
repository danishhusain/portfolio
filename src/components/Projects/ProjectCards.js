import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-column h-100">
      <div className="project-img-wrapper">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="project-img"
        />
        <div className="project-img-overlay"></div>
      </div>
      <Card.Body className="d-flex flex-column project-card-body">
        <Card.Title className="project-card-title">
          {props.title}
        </Card.Title>

        {props.tags && (
          <div className="project-tags-wrapper mb-3">
            {props.tags.map((tag, i) => (
              <Badge key={i} className="project-tag-badge">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>

        <div className="project-actions-wrapper mt-auto pt-3">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="project-btn"
            >
              <BsGithub style={{ marginRight: "6px", verticalAlign: "middle" }} />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-light"
              href={props.demoLink}
              target="_blank"
              className="project-btn project-demo-btn"
            >
              <CgWebsite style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
