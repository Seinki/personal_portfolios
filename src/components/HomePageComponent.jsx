import { Col, Container, Row } from "react-bootstrap";
import personalData from "../data/personalData.json";
import AboutComponent from "./AboutComponent";
import ExperienceComponent from "./ExperienceComponent";
import PortfolioComponent from "./PortfolioComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";

export default function HomePageComponent() {
  const heroImg = personalData.main.heroImg;
  return (
    <>
      <div className="home-page min-vh-100">
        <Container>
          <Row className="row-cols-2 d-flex justify-content-between align-items-center">
            <Col>
              <h3>Hi I&apos;m</h3>
              <h1 className="fw-bold">Seinki Anna Lesmana</h1>
              <h3 className="">Junior Web Developer</h3>
              <div className="social-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="buttons">
                <button className="btn fs-5 rounded-5">
                  <a href="https://drive.google.com/file/d/1kG-CzT-DzkasVbg_6k8j5QKDde3jhzTc/view?usp=sharing" target="_blank" rel="noopener noreferrer">Hire Me</a>
                  </button>
              </div>
            </Col>
            <Col>
              <img src={heroImg} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* About Page */}
      <AboutComponent />
      <ExperienceComponent />
      <PortfolioComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
