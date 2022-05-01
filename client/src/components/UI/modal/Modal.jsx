import React from "react";
import "../modal/modal.css";

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
      </div>
    </div>
  );
};

export default Modal;
