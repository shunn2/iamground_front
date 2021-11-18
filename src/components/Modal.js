import React from "react";
import Modal from "react-modal";
import ModalInfo from "./ModalInfo";
import ModalJson from "./ModalJson";
import ModalDelete from "./ModalDelete";

const CreateModal = ({ onOpen, modalClose }) => {
  return (
    <>
      <Modal isOpen={onOpen} onRequestClose={() => modalClose()}>
        <button onClcik={modalClose} style={{ float: "right" }}>
          close
        </button>
        <ModalDelete />
      </Modal>
    </>
  );
};
export default CreateModal;
