import { Col, Container, Row } from "react-bootstrap";

export default function AboutComponent() {
  return (
    <div className="about-page">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center pb-5">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur vero qui quae nam et tempora molestias voluptatem
              adipisci aliquam necessitatibus, aperiam deserunt natus quia
              beatae magni tenetur reiciendis delectus animi!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium necessitatibus vero quis quia voluptas assumenda fugiat
              ipsa iste, dolorem facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ab qui totam est repellat recusandae, impedit esse optio eligendi,
              nulla vel commodi repellendus, voluptate sunt officia inventore
              harum id. Veniam harum debitis odio repellat eum similique, dolore
              recusandae quia unde, aperiam consectetur atque beatae amet,
              distinctio laudantium voluptatibus rem earum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
