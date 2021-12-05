import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import AlertMessage from "../module/AlertMessage";
import ModalInfo from "../module/modal/ModalInfo";

function Test() {
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setmodalOpen(true)}>click</button>
      </div>
      {modalOpen && <ModalInfo modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}{" "}
    </>
  );
}

export default Test;
