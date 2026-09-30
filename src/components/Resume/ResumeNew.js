import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Danish_Razik_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1hYuPtS0EKmP6qUnbTbKI2TDhkTcMcpQq/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "25px" }}>
            <h1 className="project-heading">
              Curriculum <strong className="purple">Vitae</strong>
            </h1>
            <p style={{ color: "#cbd5e1" }}>
              Preview my verified resume below or download a high-resolution PDF copy.
            </p>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "35px" }}>
            <Button
              variant="primary"
              href={resumeLink}
              target="_blank"
              className="resume-download-btn"
            >
              <AiOutlineDownload style={{ marginRight: "8px", verticalAlign: "middle" }} />
              Download CV
            </Button>
          </Row>

          <Row className="resume-viewer-container">
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex flex-column align-items-center"
            >
              {Array.from(new Array(numPages || 1), (el, index) => (
                <div key={`page_${index + 1}`} className="resume-page-wrapper">
                  <Page
                    pageNumber={index + 1}
                    scale={width > 992 ? 1.4 : width > 768 ? 1.0 : 0.55}
                  />
                </div>
              ))}
            </Document>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative", marginTop: "35px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="resume-download-btn"
            >
              <AiOutlineDownload style={{ marginRight: "8px", verticalAlign: "middle" }} />
              Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
