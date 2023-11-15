// import { useState } from "react";
// import axios from "axios";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import HandleResponseContact from "./HandleResponseContact";
// ..
AOS.init();

export default function ContactComponent() {
  const [state, handleSubmit] = useForm("xknlarow");
  if (state.succeeded) {
    return <HandleResponseContact />
  }

  return (
    <div className="contact-page min-vh-100 pt-5">
      <Container>
        <Row className="p-5 m-auto d-flex align-items-center justify-content-center">
          <Col>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="fw-bold text-center"
            >
              Contact Me
            </h1>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col data-aos="fade-right" data-aos-duration="1000">
            <div className="contact-form">
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name..."
                    name="name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} name="message" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <button type="submit" disabled={state.submitting} className="btn">Submit</button>
              </Form>
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-duration="1000"
            className="contact-info"
          >
            <div className="address">
              <h6 className="fw-bold fs-5">
                <i className="fa-solid fa-house"></i> Address
              </h6>
              <p>Cicaheum, Kiaracondong, Kota Bandung, Jawa Barat, Indonesia</p>
            </div>
            <div className="phone">
              <h6 className="fw-bold fs-5">
                <i className="fa-solid fa-phone"></i> Phone Call
              </h6>
              <p>
                <a
                  href="https://wa.me/62895707749900"
                  target="_blank"
                  rel="noreferrer"
                >
                  +62 8957-0774-9900
                </a>
              </p>
            </div>
            <div className="emails">
              <h6 className="fw-bold fs-5">
                <i className="fa-solid fa-envelope"></i> E-mail
              </h6>
              <p>
                <a
                  href="mailto:seinkiannalesmana00@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  seinkiannalesmana00@gmail.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
