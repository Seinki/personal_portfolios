import { Accordion, Col, Container, Row } from "react-bootstrap";
import { exp } from "../data/js/index";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function ExperienceComponent() {
  return (
    <div className="exp-page min-vh-100 pt-5">
      <Container>
        <Row>
          <Col>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="fw-bold text-center"
            >
              My Experiences
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-1 pt-5">
          <Col>
            {exp.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="accordions"
                  key={data.id}
                >
                  <Accordion
                    defaultActiveKey={data.defaultActiveKey}
                    className="p-2"
                  >
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>
                        {data.jobDesc} | {data.time} <br />
                        <hr />
                        {data.desc.map((list) => {
                          return (
                            <ul key={list.id}>
                              <li>{list.description}</li>
                            </ul>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
