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
        <div className="close-modal" onClick={() => setVisible(false)}>
        <i class="bi bi-x-circle-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
