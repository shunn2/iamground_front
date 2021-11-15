import React, { useState } from "react";
import Modal from "react-modal";

const CreateModal = ({ onOpen }) => {
  return (
    <>
      {/* <button onClick={() => setmodalOpen(true)}>Open</button> */}
      <Modal isOpen={onOpen}>
        modal is Open
        <button>close</button>
      </Modal>
    </>
  );
};
export default CreateModal;
