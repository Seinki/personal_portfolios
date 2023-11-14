import { Card, Col, Container, Row } from "react-bootstrap";
import { cards } from "../data/js/index";

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
              I am a Warehouse Staff with over 2 years of experience in the
              logistics industry. I have expertise in operating scanning tools
              specialized in courier logistics. During my career, I have
              successfully helped make BDO branches into branches with better
              work performance results compared to other BDO branches.
            </p>
            <p>
              I am very passionate and enthusiastic about deepening my knowledge
              in IT, especially programming and cybersecurity. With my strong
              background in Computer and Network Engineering, I am committed to
              always improving my skills in this field to switch my career to
              Web development. My main expertise involves computer operations,
              both hardware and software. Not only that, but I am also quite
              proficient in computer networking, web programming, and security
              as evidenced by several related certifications on my LinkedIn
              profile. By understanding the basics, we can achieve the desired
              goal or result.
            </p>
            <p>
              In addition, I am very enthusiastic about current technological
              developments and I am always exploring. I love collaborating with
              passionate people who have the vision to always be up-to-date in
              technology. I am always open to new opportunities and
              collaborations that can broaden my horizons and contributions. If
              you are interested in connecting or discussing further, please
              feel free to message me.
            </p>
            <p>
              Thank you for your visit to my personal portfolios. I look forward
              to contributing to achieving common goals and building meaningful
              connections on LinkedIn.
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
      </Container>
    </div>
  );
}
