import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRedux,
  SiExpo,
  SiApachekafka,
  SiRabbitmq,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Techstack() {
  const skills = [
    { icon: <DiReact />, name: "React Native" },
    { icon: <SiExpo />, name: "Expo" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiFirebase />, name: "Firebase Firestore" },
    { icon: <SiApachekafka />, name: "Apache Kafka" },
    { icon: <SiRabbitmq />, name: "RabbitMQ" },
    { icon: <FaDatabase />, name: "SQL & RDBMS" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={skill.name}>
          {skill.icon}
          <div
            style={{
              fontSize: "0.26em",
              marginTop: "8px",
              fontWeight: "600",
              color: "#e0b0ff",
              letterSpacing: "0.5px",
            }}
          >
            {skill.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
