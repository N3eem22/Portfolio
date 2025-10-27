import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ahmed Mohamed Naeem</span>{" "}
            from <span className="purple">Giza, Egypt</span>.
            <br />
            I’m a passionate{" "}
            <span className="purple">Full-Stack Software Engineer</span>{" "}
            specialized in building reliable and scalable web applications using{" "}
            <b className="purple">.NET Core</b> and{" "}
            <b className="purple">React.js</b>.
            <br />
            <br />
            I hold a <b className="purple">B.Sc. in Computer Science and Artificial Intelligence</b> 
            from <b className="purple">Helwan University</b> and a 
            <b className="purple"> Back-End (.NET Core) Diploma</b> from Route Academy.
            <br />
            <br />
            I enjoy working across both frontend and backend stacks, following{" "}
            <b className="purple">Clean Architecture</b>,{" "}
            <b className="purple">SOLID principles</b>, and{" "}
            <b className="purple">Design Patterns</b> to create maintainable and
            high-performance systems.
            <br />
            <br />
            Beyond coding, I like to stay inspired and creative through:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Continuous learning & exploring new technologies 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem solving & competitive programming 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech talks and tutorials 🎥
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building, keep learning, and always write clean code."{" "}
          </p>
          <footer className="blockquote-footer">Ahmed Mohamed Naeem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
