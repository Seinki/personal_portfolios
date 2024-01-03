import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Card, Col, Container, Row } from "react-bootstrap";
import { cards, tools1, tools2, tools3 } from "../data/js/index";
import aboutImg from "../assets/img/about-img.png"
// ..
AOS.init();

export default function AboutComponent() {
  return (
    <div className="about-page min-vh-100 pt-5">
      <Container>
        <Row>
          <Col>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="fw-bold text-center pb-5"
            >
              About Me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-5 justify-content-center align-items-center">
            <img
              src={aboutImg}
              alt="about-img"
              title="about-img"
              data-aos="fade-right"
              data-aos-duration="1000"
              className="about-img"
            />
          </Col>
          <Col className="col-7 text-center">
            <p data-aos="fade-up" data-aos-duration="1000">
              I am a Warehouse Staff with over 2 years of experience in the
              logistics industry. I have expertise in operating scanning tools
              specialized in courier logistics. During my career, I have
              successfully helped make BDO branches into branches with better
              work performance results compared to other BDO branches.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
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
            <p data-aos="fade-up" data-aos-duration="1000">
              In addition, I am very enthusiastic about current technological
              developments and I am always exploring. I love collaborating with
              passionate people who have the vision to always be up-to-date in
              technology. I am always open to new opportunities and
              collaborations that can broaden my horizons and contributions. If
              you are interested in connecting or discussing further, please
              feel free to message me.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Thank you for your visit to my personal portfolios. I look forward
              to contributing to achieving common goals and building meaningful
              connections on LinkedIn.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="">
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="fw-bold"
            >
              Specialized in
            </h2>
          </Col>
          {/* <Col className="col-6 pt-5">
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="fw-bold"
            >
              Tools
            </h2>
          </Col> */}
        </Row>
        <Row className="d-flex">
          <Col className="pt-3 d-flex">
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
          {/* <Col className="col-6 pt-3">
            {tools1.map((data) => {
              <div className="tools" key={data.id}>
                <ul>
                  <li>{data.name}
                    <img src={data.icon} alt="" />
                  </li>
                </ul>
              </div>
            })}
          </Col> */}
        </Row>
        <Col className="col-6 pt-5">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className="fw-bold"
          >
            TechStack🚀
          </h2>
          <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            className="ms-5 mt-5 text-decoration-underline fw-semibold"
          >
            Frontend
          </h4>
        </Col>
        <Col
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-12 pt-3 d-flex flex-wrap justify-content-center align-items-center"
        >
          {tools1.map((data) => {
            return (
              <div className="tools" key={data.id}>
                <ul>
                  <li>
                    <img
                      src={data.icon}
                      alt={data.name}
                      title={data.name}
                      className="icon-tools"
                    />
                    <p className="text-center">{data.name}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </Col>
        <h4
          data-aos="fade-up"
          data-aos-duration="1000"
          className="ms-5 mt-5 text-decoration-underline fw-semibold"
        >
          Backend
        </h4>
        <Col
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-12 pt-3 d-flex flex-wrap justify-content-center align-items-center"
        >
          {tools2.map((data) => {
            return (
              <div className="tools" key={data.id}>
                <ul>
                  <li>
                    <img
                      src={data.icon}
                      alt={data.name}
                      title={data.name}
                      className="icon-tools"
                    />
                    <p className="text-center">{data.name}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </Col>
        <h4
          data-aos="fade-up"
          data-aos-duration="1000"
          className="ms-5 mt-5 text-decoration-underline fw-semibold"
        >
          Others
        </h4>
        <Col
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-12 pt-3 d-flex flex-wrap justify-content-center align-items-center"
        >
          {tools3.map((data) => {
            return (
              <div className="tools" key={data.id}>
                <ul>
                  <li>
                    <img
                      src={data.icon}
                      alt={data.name}
                      title={data.name}
                      className="icon-tools"
                    />
                    <p className="text-center">{data.name}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </Col>
      </Container>
    </div>
  );
}
