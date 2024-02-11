import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const TechStack = ({ title, tools }) => {
  return (
    <>
      <h4
        data-aos="fade-up"
        data-aos-duration="1000"
        className="ms-5 mt-5 text-decoration-underline fw-semibold"
      >
        {title}
      </h4>
      <Col
        data-aos="fade-up"
        data-aos-duration="1000"
        className="col-12 pt-3 d-flex flex-wrap justify-content-center align-items-center"
      >
        {tools.map((data) => {
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
    </>
  );
};

TechStack.propTypes = {
  title: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TechStack;
