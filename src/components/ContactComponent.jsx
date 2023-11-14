import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function ContactComponent() {
  const [name, setName] = useState("");
  return (
    <div className="contact-page min-vh-100 pt-5">
      <Container>
        <Row className="p-5 m-auto d-flex align-items-center justify-content-center">
          <Col>
            <h1 className="fw-bold text-center">Contact Me</h1>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <div className="contact-form">
              <Form inputStyle={{ borderColor: "transparent" }}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    borderColor="transparent"
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className="btn">
                  Submit
                </button>
              </Form>
            </div>
          </Col>
          <Col className="contact-info">
            <div className="address">
              <h6 className="fw-bold fs-5"><i className="fa-solid fa-house"></i> Address</h6>
              <p>Cicaheum, Kiaracondong, Kota Bandung, Jawa Barat, Indonesia</p>
            </div>
            <div className="phone">
              <h6 className="fw-bold fs-5"><i className="fa-solid fa-phone"></i> Phone Call</h6>
              <p><a href="https://wa.me/62895707749900" target="_blank" rel="noreferrer">+62 8957-0774-9900</a></p>
            </div>
            <div className="emails">
              <h6 className="fw-bold fs-5"><i className="fa-solid fa-envelope"></i> E-mail</h6>
              <p><a href="mailto:seinkiannalesmana00@gmail.com" target="_blank" rel="noreferrer">seinkiannalesmana00@gmail.com</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
