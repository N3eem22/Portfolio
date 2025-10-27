import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import helwan from "../../Assets/Projects/helwan.png";
import vacation from "../../Assets/Projects/vacation.png";
// import ecommerce from "../../Assets/Projects/ecommerce.png";
import os from "../../Assets/Projects/OS.png";  
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my projects built using .NET and React.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Helwan Control"
              description="A web system for managing academic registration at Helwan University. Built with ASP.NET Core, applying the full software development life cycle. Implemented Clean Code, Union Architecture, and Repository Design Pattern for scalability and maintainability."
              ghLink="https://github.com/N3eem22/Academic-Program-Management-System-Back-End.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vacation}
              isBlog={false}
              title="Vacation Reservation"
              description="A modular vacation reservation web application built with .NET 8. Implements Clean Architecture (Domain, Application, Infrastructure, UI) and SOLID principles. Used EF Core, Repository, and Unit of Work patterns for maintainable and testable code."
              ghLink="https://github.com/N3eem22/Vacition-Reservation.git"
              demoLink="https://vacition.runasp.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="E-Commerce API"
              description="Developed RESTful e-commerce APIs with .NET Core. Used Clean Architecture, Microsoft Identity for authentication, Redis caching, and integrated a payment gateway. Applied SOLID and Specification Pattern for performance and scalability."
              ghLink="https://github.com/N3eem22"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Bus Booking System"
              description="Developed a web application Which helps in booking appointments for a bus , Used React Framework for frontend and for backend used Express Js Framework and MySQL Database to store information."
              ghLink="https://github.com/N3eem22"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Military System"
              description="Built a system for faculty of Education , Helwan University , that deployed offline in the
faculty . It helped them to assign the course for each student to complete their graduation."
              ghLink="https://github.com/N3eem22/military"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Meds Project"
              description="Developed a web application to apply some of the security algorithms such as RSA and AES encryption."
              ghLink="https://github.com/N3eem22/Info_Sec"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Sleeping barber shop (OS Project)"
              description="Developed a simulation for the sleeping barber shop problem using multithreading in java to demonstrate process synchronization and inter-process communication concepts."
              ghLink="https://github.com/N3eem22/OS-project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
