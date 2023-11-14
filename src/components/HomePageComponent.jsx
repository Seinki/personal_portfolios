import { Col, Container, Row } from "react-bootstrap";
import { heroImg } from "../data/js/index";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ExperienceComponent from "./ExperienceComponent";
import FooterComponent from "./FooterComponent";
import PortfolioComponent from "./PortfolioComponent";

export default function HomePageComponent() {
  return (
    <>
      <div className="home-page min-vh-100">
        <Container>
          <Row className="row-cols-2 d-flex justify-content-between align-items-center">
            <Col>
              <h4>Hi I&apos;m</h4>
              <h1 className="fw-bold">Seinki Anna Lesmana</h1>
              <h3 className="">IT Enthusiast</h3>
              <p>Transitioning from Staff Warehouse to Web Development. <br />I&apos;m ready to switch careers to this field with passion and enthusiasm.</p>
              <div className="social-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="buttons">
                <button className="btn fs-5 rounded-5">
                  <a
                    href="https://drive.google.com/file/d/1kG-CzT-DzkasVbg_6k8j5QKDde3jhzTc/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire Me
                  </a>
                </button>
              </div>
            </Col>
            <Col>
              {heroImg.map((data) => {
                return <img key={data.id} src={data.image} alt="hero-img" />;
              })}
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
