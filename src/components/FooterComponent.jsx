import { Col, Container, Row } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
          <h3 className="fw-bold">SeinkiAL</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}