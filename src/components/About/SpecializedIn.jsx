import { Card, Col, Row } from "react-bootstrap";
import { cards } from "../../data/js/index";

const SpecializedIn = () => {
  return (
    <Row className="d-flex justify-content-center align-align-items-center mb-5">
      <Col className="pt-5 mx-auto d-block d-lg-flex justify-content-center align-align-items-center col-12">
        {cards.map((data) => {
          return (
            <div
              data-aos="flip-right"
              data-aos-duration={data.aosDuration}
              className="cards"
              key={data.id}
            >
              <Card
                style={{ width: "19rem" }}
                className="mx-3 shadow bg-transparent border-1 border-white rounded-5 text-white"
              >
                <Card.Body>
                  <div className="card-icon">
                    <i className={`${data.icon} text-center fs-3`}></i>
                  </div>
                  <Card.Title className="text-center px-2">
                    {data.title}
                  </Card.Title>
                  <Card.Text className="p-2 text-center">{data.desc}</Card.Text>
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
