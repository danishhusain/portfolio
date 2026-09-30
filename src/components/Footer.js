import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md="4" className="footer-copywright text-md-start text-center mb-2 mb-md-0">
            <h3>Danish Razik &nbsp;•&nbsp; <span className="purple">Portfolio</span></h3>
          </Col>
          <Col md="4" className="footer-copywright text-center mb-2 mb-md-0">
            <h3>Copyright © {year} DR. All rights reserved.</h3>
          </Col>
          <Col md="4" className="footer-body text-md-end text-center">
            <ul className="footer-icons mb-0">
              <li className="social-icons">
                <a
                  href="https://github.com/danishhusain"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/danishrazik2000"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:danishrazik2001@gmail.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/danisharab_hindustan/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
