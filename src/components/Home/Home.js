import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <div className="hero-greeting">
                <span className="hero-badge">Available for New Opportunities</span>
                <h2 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h2>
              </div>

              <h1 className="heading-name">
                I'M <strong className="main-name">Danish Razik</strong>
              </h1>

              <div className="hero-subtitle">
                <span className="purple">MERN Stack Developer</span>
                <span className="hero-divider">•</span>
                <span className="purple">React Native Developer</span>
              </div>

              <div className="typewriter-container">
                <Type />
              </div>

              <div className="hero-cta-group">
                <Button
                  as={Link}
                  to="/project"
                  className="btn-primary hero-btn-primary"
                >
                  <AiOutlineFundProjectionScreen style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  View Projects
                </Button>
                <Button
                  as={Link}
                  to="/resume"
                  variant="outline-light"
                  className="hero-btn-secondary"
                >
                  <CgFileDocument style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  Resume
                </Button>
              </div>
            </Col>

            <Col md={5} className="text-center home-image-col">
              <img
                src={homeLogo}
                alt="Danish Razik - Developer"
                className="img-fluid home-illustration"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
