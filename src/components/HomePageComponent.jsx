import { Col, Container, Row } from "react-bootstrap";
import { heroImg, socialIcon } from "../data/js/index";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import PortfolioComponent from "./PortfolioComponent";

export default function HomePageComponent() {
  return (
    <>
      <div className="home-page min-vh-100">
        <Container>
          <Row className="row-cols-1 row-cols-lg-2 d-flex justify-content-between align-items-center">
            <Col>
              <h4 className="animate__animated animate__fadeInUp">
                Hi I&apos;m
              </h4>
              <h1 className="animate__animated animate__fadeInUp fw-bold">
                Seinki Anna Lesmana
              </h1>
              <h3 className="animate__animated animate__fadeInUp">
                IT Enthusiast
              </h3>
              <p className="animate__animated animate__fadeInUp">
                Transitioning from Staff Warehouse to Web Development. <br />
                I&apos;m ready to switch careers to this field with passion and
                enthusiasm.
              </p>
              <div className="social-icons">
                {socialIcon.map((data) => {
                  return (
                    <a
                      key={data.id}
                      href={data.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`animate__animated animate__fadeInUp ${data.duration}`}
                    >
                      <i className={data.icon}></i>
                    </a>
                  );
                })}
              </div>
              <div className="buttons">
                <a
                  href="https://drive.google.com/file/d/1PcFYSecRgCfPkb1O7RfP27Y_Tjar4LOK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn fs-5 rounded-5 animate__animated animate__fadeIn">
                    Hire Me
                  </button>
                </a>
              </div>
            </Col>
            <Col>
              {heroImg.map((data) => {
                return (
                  <img
                    key={data.id}
                    src={data.image}
                    alt="hero-img"
                    className="animate__animated animate__fadeInRight"
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
      {/* About Page */}
      <AboutComponent />
      <PortfolioComponent />
      <ContactComponent />
    </>
  );
}
