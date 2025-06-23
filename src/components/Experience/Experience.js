import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Mechanical Design Engineer",
      company: "Hamsa Environmental Solutions Private Limited",
      location: "Tamil Nadu, India",
      date: "June 2022 - Sep 2023",
      description: [
        "Designed pressure vessels, heat exchangers, and wiped film evaporators in AutoCAD",
        "Developed equipment using Solid Edge and AutoCAD",
        "Utilized CADWorx, Solid Edge, and Ansys for 3D modeling and analysis"
      ]
    },
    {
      title: "Mechanical Design Intern",
      company: "Subzero Motorsport",
      location: "Dubai, UAE",
      date: "Jan 2021 - July 2021",
      description: [
        "Assisted with vehicle ECU integration and diagnostics",
        "Supported CAE software usage"
      ]
    },
    {
      title: "Mechanical Design Intern",
      company: "Al Ashwaq Building Maintenance",
      location: "Dubai, UAE",
      date: "June 2019 - Aug 2019",
      description: [
        "Designed 2D layouts for electrical, plumbing, HVAC systems in AutoCAD"
      ]
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={12} key={index} className="experience-card-wrapper">
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-location">{exp.location}</p>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
