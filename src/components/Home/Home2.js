import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">MERN Stack</b> &{" "}
              <b className="purple">React Native Developer</b> with over{" "}
              <b className="purple">3+ years of experience</b> architecting and
              shipping production-grade mobile applications and robust API-driven
              backends. 🚀
              <br />
              <br />
              My core technical foundation includes:
              <i>
                <b className="purple">
                  {" "}
                  JavaScript (ES6+), TypeScript, React Native, React.js, Node.js, and Express.js.
                </b>
              </i>
              <br />
              <br />
              I specialize in end-to-end product engineering across{" "}
              <i>
                <b className="purple">
                  Healthcare, E-Commerce, Cashback Commerce, Logistics, and HR Management.
                </b>
              </i>
              <br />
              <br />
              I have hands-on experience designing scalable architectures with{" "}
              <b className="purple">MongoDB, PostgreSQL, MySQL</b> and{" "}
              <b className="purple">Firebase Firestore</b>, along with message
              queueing and pub/sub pipelines using{" "}
              <i>
                <b className="purple">Apache Kafka & RabbitMQ</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>GET IN TOUCH</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/danishhusain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/danishrazik2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:danishrazik2001@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+918934971231"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Phone"
                >
                  <FaPhoneAlt />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/danisharab_hindustan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
