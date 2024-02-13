import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { exp } from "../../data/js/index";
// ..
AOS.init();

export default function ExperienceComponent() {
  return (
    <div className="exp-page min-vh-100">
      <Container>
        <Row>
          <Col>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="fw-bold text-center pb-5 pt-3"
            >
              Professional Journey
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-1 pt-4">
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
                    <Accordion.Item
                      eventKey={data.eventKey}
                      className="bg-transparent text-white"
                    >
                      <Accordion.Header className="bg-transparent text-white px-0 py-1 pb-0">
                        {data.title}
                      </Accordion.Header>
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
