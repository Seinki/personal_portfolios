import { PropTypes } from "prop-types";
import { Col } from "react-bootstrap";

const ButtonTechStack = ({ title, onClick, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(title);
  };

  return (
    <Col>
      <div className={isActive ? "actived" : "inactived"} onClick={handleClick}>
        <button className="btn_techStack px-3 py-2 px-lg-4 py-lg-3 fs-6">
          {title}
        </button>
      </div>
    </Col>
  );
};

ButtonTechStack.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.string,
  isActive: PropTypes.string,
};

export default ButtonTechStack;
