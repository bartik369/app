import React from "react";
import "../modal/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const Modal = ({ children, visible }) => {

  useEffect(() => {
    setOpenModal(visible)
  })

  const [openModal, setOpenModal] = useState("");
  const mainModalVisibleClass = ["modal"];

  if (openModal) {
    mainModalVisibleClass.push("active");
  } else {
    mainModalVisibleClass.push("modal");
  }

  return (
    <div
      className={[mainModalVisibleClass.join(" ")]}
      onClick={() => setOpenModal(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="close-modal" onClick={() => setOpenModal(false)}>
        <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
