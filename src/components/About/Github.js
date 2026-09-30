import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const calendarTheme = {
    level0: "#1e1438",
    level1: "#6b21a8",
    level2: "#9333ea",
    level3: "#a855f7",
    level4: "#c084fc",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="github-card-wrapper">
        <GitHubCalendar
          username="danishhusain"
          blockSize={15}
          blockMargin={5}
          theme={calendarTheme}
          fontSize={15}
        />
      </div>
    </Row>
  );
}

export default Github;
