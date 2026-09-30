import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Danish Razik </span>
            from <span className="purple">Delhi, India.</span>
            <br />
            I hold a <b className="purple">Bachelor of Technology</b> in{" "}
            <b>Computer Science & Engineering</b> from{" "}
            <span className="purple">Dr. RMLAU, Ayodhya</span> (2019 – 2023).
            <br />
            <br />
            I am currently working as a{" "}
            <b className="purple">MERN Stack & React Native Developer</b> at{" "}
            <b className="purple">Upcodo Digital</b>. With 3+ years in the
            software industry, I have engineered scalable products across{" "}
            <i>Healthcare, E-Commerce, Logistics, Fintech, and HR Tech</i>.
            <br />
            <br />
            Apart from coding, here are some things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Mobile & Backend Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Discovering Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming & Watching Tech Podcasts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build robust, performant products that deliver genuine impact!"{" "}
          </p>
          <footer className="blockquote-footer">Danish Razik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
