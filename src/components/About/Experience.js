import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdLocationOn, MdDateRange } from "react-icons/md";

const experiences = [
  {
    company: "Upcodo Digital",
    role: "MERN Stack & React Native Developer",
    location: "Noida, India",
    duration: "Mar 2026 – Present",
    projects: [
      {
        name: "BedaHealth — Healthcare",
        tech: ["React Native", "Expo", "REST APIs", "Push Notifications"],
        points: [
          "Built healthcare workflows for patients and doctors including OTP authentication, role-based onboarding, appointments, and OPD management.",
          "Integrated API-driven workflows and push notifications for real-time healthcare communications.",
        ],
      },
      {
        name: "OneClick — Cashback & Affiliate Commerce",
        tech: ["React Native", "Redux Toolkit", "REST APIs", "Cashback Tracking"],
        points: [
          "Developed GCC-focused cashback commerce features including product discovery, multi-filter search, wishlist, cart, rewards, and user accounts.",
          "Integrated REST APIs for secure authentication, product catalog, and accurate cashback tracking.",
        ],
      },
    ],
  },
  {
    company: "XICOM Technologies Ltd.",
    role: "MERN Stack & React Native Developer",
    location: "Delhi, India",
    duration: "Apr 2025 – Jun 2025",
    projects: [
      {
        name: "BoxxDocks — Logistics",
        tech: ["React Native", "Barcode/QR Scanning", "Location Tracking"],
        points: [
          "Developed delivery packet management and package-tracking workflows with scan-based status and location updates.",
        ],
      },
      {
        name: "GoHRGo — HR Management",
        tech: ["React Native", "REST APIs", "Workforce Management"],
        points: [
          "Built workforce-management features covering employee attendance, leave tracking, and daily workforce operations.",
        ],
      },
    ],
  },
  {
    company: "Photon Softwares",
    role: "MERN Stack & React Native Developer",
    location: "Noida, India",
    duration: "Jun 2023 – Apr 2025",
    projects: [
      {
        name: "E-Commerce Admin (Retailer App)",
        tech: ["React Native", "Redux Toolkit", "REST APIs", "Order Calendar"],
        points: [
          "Built retailer-side e-commerce application from scratch to production deployment.",
          "Implemented comprehensive CRUD workflows, Redux Toolkit state management, REST APIs, order management, and date-wise order tracking.",
        ],
      },
      {
        name: "E-Commerce Customer App",
        tech: ["React Native", "Redux Toolkit", "Authentication", "Cart & Orders"],
        points: [
          "Developed authentication, cart, and order-management workflows using React Native and Redux Toolkit.",
          "Implemented full order lifecycle states: Pending, Delivered, Return, and Cancelled.",
        ],
      },
    ],
  },
  {
    company: "KMR & Friends Pvt. Ltd. (SayHey)",
    role: "React Native Developer",
    location: "Mumbai, India",
    duration: "Mar 2023 – Jun 2023",
    projects: [
      {
        name: "OnlyFootball — Sports & Fantasy App",
        tech: ["React Native", "react-native-gifted-chat", "Animations"],
        points: [
          "Developed full application UI with an animated splash screen and dynamic in-app chat interface using React Native and react-native-gifted-chat.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <Container fluid style={{ paddingBottom: "30px" }}>
      <Row style={{ justifyContent: "center" }}>
        {experiences.map((exp, idx) => (
          <Col md={11} key={idx} style={{ marginBottom: "25px" }}>
            <Card
              style={{
                backgroundColor: "rgba(19, 13, 34, 0.75)",
                borderColor: "rgba(200, 137, 230, 0.4)",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(120, 40, 180, 0.15)",
                backdropFilter: "blur(6px)",
                color: "#fff",
                textAlign: "left",
                padding: "20px",
              }}
            >
              <Card.Body>
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                  <h3 style={{ color: "#c770f0", fontWeight: "600", fontSize: "1.4em", margin: 0 }}>
                    <BsBriefcaseFill style={{ marginRight: "10px", verticalAlign: "middle" }} />
                    {exp.role}
                  </h3>
                  <div style={{ color: "#bda6d6", fontSize: "0.95em", marginTop: "5px" }}>
                    <span style={{ marginRight: "15px" }}>
                      <MdDateRange style={{ marginRight: "4px", verticalAlign: "text-bottom" }} />
                      {exp.duration}
                    </span>
                    <span>
                      <MdLocationOn style={{ marginRight: "4px", verticalAlign: "text-bottom" }} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <h4 style={{ color: "#fff", fontSize: "1.15em", marginBottom: "15px" }}>
                  {exp.company}
                </h4>

                {exp.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                      borderLeft: "3px solid #c770f0",
                    }}
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                      <h5 style={{ color: "#e0b0ff", fontSize: "1.05em", margin: "0 0 5px 0" }}>
                        {proj.name}
                      </h5>
                      <div className="d-flex flex-wrap gap-1">
                        {proj.tech.map((t, tIdx) => (
                          <Badge
                            key={tIdx}
                            bg="secondary"
                            style={{
                              backgroundColor: "rgba(155, 89, 182, 0.35)",
                              color: "#e8c5ff",
                              border: "1px solid rgba(197, 115, 230, 0.4)",
                              fontWeight: "normal",
                              fontSize: "0.78em",
                              margin: "2px",
                              padding: "4px 8px",
                            }}
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul style={{ paddingLeft: "20px", marginBottom: "0", color: "#dcd6ea", fontSize: "0.95em" }}>
                      {proj.points.map((pt, ptIdx) => (
                        <li key={ptIdx} style={{ marginBottom: "5px" }}>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Experience;
