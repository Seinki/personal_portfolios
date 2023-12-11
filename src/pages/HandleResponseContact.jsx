import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function HandleResponseContact() {
  return (
    <div className="message-response contact-page min-vh-100 pt-5">
      <Container>
        <Row className="p-5 m-auto d-flex align-items-center justify-content-center">
          <Col>
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="fw-bold text-center"
            >
              Contact Me
            </h1>
          </Col>
        </Row>
        <Row className="message-text">
          <Col data-aos="zoom-in" data-aos-duration="1000">
            <h3 className="text-center fw-bold">❤️ Thank You ❤️</h3>
            <p className="text-center">Your message or feedback has been sent.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
