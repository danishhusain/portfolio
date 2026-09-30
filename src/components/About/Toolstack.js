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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tool.name}>
          {tool.icon}
          <div
            style={{
              fontSize: "0.26em",
              marginTop: "8px",
              fontWeight: "600",
              color: "#e0b0ff",
              letterSpacing: "0.5px",
            }}
          >
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
