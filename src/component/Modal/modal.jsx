import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({
  visible,
  handleClose,
  title,
  paragraph,
  body,
  width,
  height,
}) => {
  return (
    <div>
      <Rodal
        visible={visible}
        onClose={handleClose}
        width={width}
        height={height}
      >
        <div className="modContainer">
          <div className="modalTitle">{title}</div>
          <div className="modalPar">{paragraph}</div>
          <div className="modalBody">{body}</div>
        </div>
      </Rodal>
    </div>
  );
};

Modal.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    body: PropTypes.element.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

export default Modal;
