import { Card, Col, Container, Row } from "react-bootstrap";
import { cards } from "../data/index";

export default function AboutComponent() {
  return (
    <div className="about-page ">
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
        <Row>
          <Col>
            <h2 className="fw-bold">Specialized in</h2>
          </Col>
        </Row>
        <Row>
          <Col className="pt-3 d-flex gap-3">
            {cards.map((data) => {
              return (
                <div className="cards" key={data.id}>
                  <Card style={{ width: "20rem" }} className="shadow">
                    <Card.Body>
                      <div className="card-icon">
                        <i className={`${data.icon} text-center fs-3`}></i>
                      </div>
                      <Card.Title className="text-center p-2">
                        {data.title}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {data.tools}
                      </Card.Subtitle>
                      <Card.Text className="p-3 pt-0 text-center">{data.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
