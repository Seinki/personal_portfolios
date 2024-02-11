import { Card, Col, Row } from "react-bootstrap";
import { cards } from "../../data/js/index";

const SpecializedIn = () => {
  return (
    <Row className="d-flex">
      <Col className="pt-3 d-flex flex-wrap justify-content-center align-items-center">
        {cards.map((data) => {
          return (
            <div
              data-aos="flip-right"
              data-aos-duration={data.aosDuration}
              className="cards"
              key={data.id}
            >
              <Card style={{ width: "20rem" }} className="shadow">
                <Card.Body>
                  <div className="card-icon">
                    <i className={`${data.icon} text-center fs-3`}></i>
                  </div>
                  <Card.Title className="text-center p-2">
                    {data.title}
                  </Card.Title>
                  <Card.Text className="p-3 pt-0 text-center">
                    {data.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default SpecializedIn;
