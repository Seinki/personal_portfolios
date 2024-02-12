import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ButtonTeckStack = ({ title, onClick, isActive }) => {
  return (
    <Col>
      <div className={isActive ? "actived" : "inactived"} onClick={onClick}>
        <button className="btn_techStack px-2 py-2 px-lg-4 py-lg-3 fs-6">
          {title}
        </button>
      </div>
    </Col>
  );
};

export default ButtonTeckStack;
