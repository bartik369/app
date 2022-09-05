import React from "react";
import "../modal/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { addModal, updateModal } from "../../../store/actions/modalActions";

const Modal = ({ children, active}) => {

  const [visible, setVisible] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setVisible(active)
  }, [active]);

  const refreshModalState = () => {
    dispatch(addModal(false));
    dispatch(updateModal(false));
  }
=======

const Modal = ({ children, visible }) => {

  useEffect(() => {
    setOpenModal(visible)
  })
>>>>>>> c19a6ae3e30fc9b39b27d66a19c80fcf4a6e73fe

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
<<<<<<< HEAD
        <div className="close-modal" onClick={() => refreshModalState()}>
=======
        <div className="close-modal" onClick={() => setOpenModal(false)}>
>>>>>>> c19a6ae3e30fc9b39b27d66a19c80fcf4a6e73fe
        <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
