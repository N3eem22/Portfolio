import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a <b className="purple">Full-Stack Software Engineer </b> 
              passionate about building reliable, high-quality applications using 
              <b className="purple"> .NET Core</b> and <b className="purple">React.js</b>.
              <br />
              <br />
              I specialize in developing scalable systems and intuitive interfaces, 
              and I enjoy solving complex problems through clean architecture 
              and modern development practices.
              <br />
              <br />
              My main technical stack includes:
              <i>
                <b className="purple"> C#, JavaScript, React.js, ASP.NET Core, SQL Server,</b>
              </i>{" "}
              along with strong experience in 
              <b className="purple"> Entity Framework, Design Patterns,</b> 
              and <b className="purple">Data Structures & Algorithms.</b>
              <br />
              <br />
              I’m particularly interested in creating:
              <i>
                <b className="purple"> Web Applications, APIs, and Scalable Systems</b>
              </i>{" "}
              following <b className="purple">Clean Architecture</b> and 
              <b className="purple"> SOLID principles.</b>
              <br />
              <br />
              Whenever possible, I love working with 
              <b className="purple"> React.js</b> on the frontend and 
              <b className="purple"> ASP.NET Core</b> on the backend to deliver 
              complete, maintainable solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
