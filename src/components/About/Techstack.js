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
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <Row className="justify-content-center techstack-grid pb-5">
      {skills.map((skill, index) => (
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="tech-icons-col"
          key={index}
        >
          <div className="tech-icons" title={skill.name}>
            <div className="tech-icon-svg">{skill.icon}</div>
            <span className="tech-name">{skill.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
