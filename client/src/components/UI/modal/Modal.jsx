import React from "react";
import "../modal/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, visible, setVisible }) => {

 

  const mainModalVisibleClass = ["modal"];

  if (visible) {
    mainModalVisibleClass.push("active");
  }

  return (
    <div
      className={[mainModalVisibleClass.join(" ")]}
      onClick={() => setVisible(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="close-modal" onClick={() => setVisible(false)}>
        <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
