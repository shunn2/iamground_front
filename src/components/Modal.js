import React from "react";
import Modal from "react-modal";
import ModalInfo from "./ModalInfo";
import ModalJson from "./ModalJson";

const CreateModal = ({ onOpen, modalClose }) => {
  return (
    <>
      <Modal isOpen={onOpen} onRequestClose={() => modalClose()}>
        <button onClcik={modalClose} style={{ float: "right" }}>
          close
        </button>
        <ModalInfo />
      </Modal>
    </>
  );
};
export default CreateModal;
