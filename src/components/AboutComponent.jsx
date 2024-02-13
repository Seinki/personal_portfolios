import AOS from "aos";
import "aos/dist/aos.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
import aboutImg from "../assets/img/about-img.png";
import { tools1, tools2, tools3 } from "../data/js/index";
import ButtonTechStack from "./About/ButtonTeckStack";
import ExperienceComponent from "./About/ExperienceComponent";
import SpecializedIn from "./About/SpecializedIn";
import TechStack from "./About/TechStack";
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
  const [showMore, setShowMore] = useState(false);

  const handleClick = (button) => {
    setLoading(true);
    setActiveButton(button);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const handleClickReadMore = (e) => {
    e.preventDefault();
    setShowMore(true);
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
              My Story
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
          <Col
            className="col-12 col-lg-7 ps-5"
            style={{ textAlign: "justify" }}
          >
            <p data-aos="fade-up" data-aos-duration="1000">
              As someone who has an educational background from Al Hadi Bandung
              Vocational High School with a major in Network Computer
              Engineering, I have had a diverse journey in the world of work and
              learning. My first experience started as a waiter at Jati Kopi,
              then switched to warehouse staff with DWS operator jobdesk. During
              this time, I also had the opportunity to join an internship as a
              Junior Web Programmer at Baraka Solution through the Work In Tech
              Program.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Participation in the Work In Tech Program with Yayasan Plan
              International Indonesia through Coursera opened a new window for
              me in developing IT skills. During this one-year program, I
              managed to earn a Google Professional IT Support certificate and
              attended an IT Bootcamp. This was the beginning of my journey in
              collecting various IT-related certifications, including Frontend
              and Backend web certificates from Dicoding, as well as Web
              Development certificates from MySkill, Quality Assurance from
              MySkill etc. I realize my lack of consistency, but I am constantly
              striving to improve on that. In addition, I am also actively
              involved in various small projects that include simple web
              application development and technical troubleshooting. Some of
              these projects can be found on my GitHub platform, which reflects
              my abilities and interests in various aspects of software
              development. Through these projects, I continue to hone my
              programming skills and explore new concepts and technologies in
              the IT industry.
            </p>
            {showMore && (
              <>
                <p data-aos="fade-up" data-aos-duration="1000">
                  With diverse career interests ranging from being a Frontend,
                  Backend, to Fullstack Web Developer, as well as interests in
                  IT Support, Cyber Security, Pentester, and QA Engineer, I am
                  ready to take on new challenges. I am open to internships,
                  contracts, and remote or in-office work opportunities.
                  Although my educational background is not a bachelor&apos;s
                  degree, I believe that my dedication and hard work in
                  developing my skills will be a plus for the company.
                </p>
                <p data-aos="fade-up" data-aos-duration="1000">
                  I am grateful for every opportunity that has been given to me
                  and I sincerely hope to be part of a dynamic and innovative
                  team, where I can contribute significantly and continue to
                  learn and grow together. Thank you for your attention and I
                  sincerely hope to contribute as a competent and dedicated
                  candidate.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="btn_readMoreLess"
                  onClick={() => setShowMore(false)}
                >
                  Read Less
                </button>
              </>
            )}
            {!showMore && (
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                className="btn_readMoreLess"
                onClick={handleClickReadMore}
              >
                Read More
              </button>
            )}
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
                  title="Expertise"
                  onClick={() => handleClick("Specialized")}
                  isActive={activeButton === "Specialized"}
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-3">
                <ButtonTechStack
                  button="TechStack"
                  title="My Toolkit"
                  onClick={() => handleClick("TechStack")}
                  isActive={activeButton === "TechStack"}
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-3">
                <ButtonTechStack
                  button="Experience"
                  title="My Journey"
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
