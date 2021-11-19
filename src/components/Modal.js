import React, { useState } from "react";
import Modal from "react-modal";
import ModalInfo from "./ModalInfo";
import ModalDelete from "./ModalDelete";

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: "10px",
    left: "150px",
    right: 0,
    bottom: 0,
    width: "1200px",
    height: "700px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    fontsize: "10px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

const CreateModal = ({ type, isOpen, modalClose }) => {
  const [openModal, setopenModal] = useState({ isOpen });
  const closeModal = () => {
    setopenModal((prev) => !prev);
  };
  return (
    <>
      <Modal isOpen={openModal} onRequestClose={closeModal} ariaHideApp={false} style={ModalStyle}>
        <button onClcik={closeModal} style={{ float: "right" }}>
          close
        </button>
        {type === "monitoring" ? <ModalInfo /> : <ModalDelete />}
      </Modal>
    </>
  );
};
export default CreateModal;
