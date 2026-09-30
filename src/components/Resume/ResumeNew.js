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
  // "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
  // old
  // "https://drive.google.com/file/d/1cseXJuc4R1F2unKlLQRsVhs4egRZUWk1/view?usp=share_link";
  // "https://drive.google.com/file/d/1RBOkiJkv2MnrxrflV3g77PyNuJbE4A39/view?usp=share_link";
  // "https://drive.google.com/file/d/1Tv-GA_rHBEGJhmHDllhea8XWMgQ3qkqm/view?usp=share_link";
  // "https://drive.google.com/file/d/1ktoMVRbiq811GdXoULsyoxObhfo7q72u/view?usp=sharing"
  // "https://drive.google.com/file/d/1I3lT8U87v0M0GqC5jY_1uV4Tz1fF7P8u/view?usp=sharing"
  "https://drive.google.com/file/d/1hYuPtS0EKmP6qUnbTbKI2TDhkTcMcpQq/view?usp=sharing"


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>

        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
