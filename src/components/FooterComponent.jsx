import { Col, Container, Row } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <footer className="footer m-auto">
      <Container>
        <Row>
          <Col className="text-center text-white">
              <p>Create with ❤️ by <a href="http://" target="_blank" rel="noopener noreferrer">Seinki Anna Lesmana</a></p>
              <p>Copyright &copy; 2023. All Right Received.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
