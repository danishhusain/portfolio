import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
  SiFirebase,
  SiGithub,
} from "react-icons/si";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <FaApple />, name: "Apple App Store" },
    { icon: <FaGooglePlay />, name: "Google Play Store" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  return (
    <Row className="justify-content-center techstack-grid pb-5">
      {tools.map((tool, index) => (
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="tech-icons-col"
          key={index}
        >
          <div className="tech-icons" title={tool.name}>
            <div className="tech-icon-svg">{tool.icon}</div>
            <span className="tech-name">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
