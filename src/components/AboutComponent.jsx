import AOS from "aos";
import "aos/dist/aos.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
import aboutImg from "../assets/img/about-img.png";
import { tools1, tools2, tools3 } from "../data/js/index";
import ButtonTechStack from "./About/ButtonTeckStack";
import SpecializedIn from "./About/SpecializedIn";
import TechStack from "./About/TechStack";
import ExperienceComponent from "./ExperienceComponent";
// ..
AOS.init();

const Content = ({ activeButton }) => {
  if (activeButton === "Specialized") {
    return <SpecializedIn />;
  } else if (activeButton === "TechStack") {
    return (
      <div className="my-5">
        <TechStack title="Frontend" tools={tools1} />
        <TechStack title="Backend" tools={tools2} />
        <TechStack title="Others" tools={tools3} />
      </div>
    );
  } else if (activeButton === "Experience") {
    return <ExperienceComponent />;
  } else {
    return null;
  }
};
Content.propTypes = {
  activeButton: PropTypes.string,
};

export default function AboutComponent() {
  const [activeButton, setActiveButton] = useState("Specialized");
  const [isLoading, setLoading] = useState(false);

  const handleClick = (button) => {
    setLoading(true);
    setActiveButton(button);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <div className="about-page min-vh-100 pt-5 position-relative">
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
        <Row className="my-5">
          <Col className="col-12 col-lg-5 justify-content-center align-items-center">
            <img
              src={aboutImg}
              alt="about-img"
              title="about-img"
              data-aos="fade-right"
              data-aos-duration="1000"
              className="about-img"
            />
          </Col>
          <Col className="col-12 col-lg-7 text-center">
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

        <Row
          data-aos="fade-right"
          data-aos-duration="1000"
          className="mt-5 d-flex flex-wrap justify-content-between align-items-center"
        >
          <Col className="d-flex col-12 col-lg-12 justify-content-lg-start justify-content-center">
            <Row className="">
              <Col className="p-3">
                <ButtonTechStack
                  button="Specialized"
                  title="Specialized"
                  onClick={() => handleClick("Specialized")}
                  isActive={activeButton === "Specialized"}
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-3">
                <ButtonTechStack
                  button="TechStack"
                  title="TechStack"
                  onClick={() => handleClick("TechStack")}
                  isActive={activeButton === "TechStack"}
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-3">
                <ButtonTechStack
                  button="Experience"
                  title="Experience"
                  onClick={() => handleClick("Experience")}
                  isActive={activeButton === "Experience"}
                />
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        {isLoading && (
          <div className="loading-spinner">
            <BeatLoader color={"#36D7B7"} size={20} />
          </div>
        )}

        {!isLoading && (
          <Row className="mt-5">
            <Col>
              <Content activeButton={activeButton} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
