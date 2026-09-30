import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaCode } from "react-icons/fa";

function AboutCard() {
  const highlights = [
    { icon: <FaBriefcase />, label: "Experience", value: "3+ Years in MERN & React Native" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Delhi, India" },
    { icon: <FaGraduationCap />, label: "Education", value: "B.Tech CSE (Dr. RMLAU, Ayodhya)" },
    { icon: <FaCode />, label: "Current Role", value: "Developer at Upcodo Digital" },
  ];

  return (
    <Card className="quote-card-view about-card-modern">
      <Card.Body>
        <div className="about-highlights-grid mb-4">
          {highlights.map((item, index) => (
            <div key={index} className="about-highlight-box">
              <span className="highlight-icon">{item.icon}</span>
              <div>
                <span className="highlight-label">{item.label}</span>
                <span className="highlight-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8", color: "#e2e8f0" }}>
            Hi Everyone, I am <span className="purple fw-bold">Danish Razik</span>{" "}
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
          <ul className="about-activities-list">
            <li className="about-activity">
              <ImPointRight className="purple" style={{ marginRight: "10px" }} />
              Exploring New Mobile & Backend Technologies
            </li>
            <li className="about-activity">
              <ImPointRight className="purple" style={{ marginRight: "10px" }} />
              Traveling & Discovering Places
            </li>
            <li className="about-activity">
              <ImPointRight className="purple" style={{ marginRight: "10px" }} />
              Gaming & Watching Tech Podcasts
            </li>
          </ul>

          <div className="about-quote-box mt-4">
            <p className="quote-text mb-1">
              "Strive to build robust, performant products that deliver genuine impact!"
            </p>
            <footer className="blockquote-footer text-end">Danish Razik</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
