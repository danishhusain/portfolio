import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import bedaHealthImg from "../../Assets/Projects/chatify.png";
import oneClickImg from "../../Assets/Projects/Quizller.jpg";
import theFounderImg from "../../Assets/Projects/codeEditor.png";
import ecommerceImg from "../../Assets/Projects/NanoOmni.jpeg";
import boxxDocksImg from "../../Assets/Projects/blog.png";
import goHrGoImg from "../../Assets/Projects/leaf.png";
import onlyfootballImg from "../../Assets/Projects/onlyfootball.jpg";
import clothingAppImg from "../../Assets/Projects/clothingApp.jpg";

function Projects() {
  const projectList = [
    {
      title: "BedaHealth",
      imgPath: bedaHealthImg,
      tags: ["Healthcare", "React Native", "Expo", "Push Notifications"],
      description:
        "Comprehensive healthcare mobile platform for doctors and patients featuring OTP authentication, role-based onboarding, appointment booking, OPD management, and automated push notifications.",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "OneClick",
      imgPath: oneClickImg,
      tags: ["Cashback & Commerce", "React Native", "Redux Toolkit", "REST APIs"],
      description:
        "GCC-focused cashback and affiliate commerce mobile application with high-performance product discovery, advanced filtering, wishlist, cart, rewards, and real-time cashback tracking.",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "The Founder — Employee Management API",
      imgPath: theFounderImg,
      tags: ["Node.js", "Express.js", "MongoDB", "RBAC", "REST APIs"],
      description:
        "Robust enterprise backend system with REST APIs for company, branch, employee, and attendance lifecycle management. Implemented complete CRUD modules and strict Role-Based Access Control (RBAC).",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "E-Commerce Retailer & Customer Platform",
      imgPath: ecommerceImg,
      tags: ["Retail", "React Native", "Redux Toolkit", "Play Store"],
      description:
        "Production e-commerce mobile suite deployed to Google Play Store. Features retailer-side admin portal with order calendars and customer-side app supporting order states: Pending, Delivered, Return, and Cancelled.",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "BoxxDocks",
      imgPath: boxxDocksImg,
      tags: ["Logistics", "React Native", "Barcode Scanning", "Packet Tracking"],
      description:
        "Enterprise logistics packet management system with scan-based status updates, barcode verification, and real-time package movement tracking across logistics hubs.",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "GoHRGo",
      imgPath: goHrGoImg,
      tags: ["HR Management", "React Native", "Attendance", "Workforce"],
      description:
        "Workforce management mobile app streamlining employee management, daily biometric/location attendance logging, leave tracking, and workforce operations.",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "OnlyFootball",
      imgPath: onlyfootballImg,
      tags: ["Sports & Fantasy", "React Native", "Gifted Chat", "UI/UX"],
      description:
        "Fantasy sports mobile app built with an animated splash screen, match contest flows, and dynamic real-time in-app chat interface using react-native-gifted-chat.",
      ghLink: "https://github.com/danishhusain",
    },
    {
      title: "ClothingApp",
      imgPath: clothingAppImg,
      tags: ["E-Commerce", "React Native", "Firebase Firestore", "Context API"],
      description:
        "Fashion e-commerce application with real-time Firebase Firestore catalog sync, customer order tracking, cart management, and seamless category browsing.",
      ghLink: "https://github.com/danishhusain/clothingApp",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works & Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are key production applications and projects I have engineered.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                tags={project.tags}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
