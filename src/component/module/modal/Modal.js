import React from "react";
import Button from "@mui/material/Button";
import { Clear } from "@mui/icons-material";
import ModalPer from "./ModalPer";
import ModalInfo from "./ModalInfo";
import ModalDelete from "./ModalDelete";
import ModalVisual from "./ModalVisual";
import ModalConfig from "./ModalConfig";

function Modal({ type, modalOpen, setmodalOpen }) {
  return (
    <React.Fragment>
      <div
        style={{
          zIndex: 1000,
          position: "fixed",
          width: "60%",
          minHeight: "600px",
          height: "fit-content",
          backgroundColor: "#ffffff",
          top: 0,
          left: 0,
          marginLeft: "20%",
          marginTop: "10%",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <div style={{ height: "30px", display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}></div>
          <Clear
            style={{ fontSize: "26px", cursor: "pointer" }}
            onClick={() => {
              setmodalOpen(false);
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          {type === "monitoring" && <ModalInfo />}
          {type === "scanningconfig" && <ModalConfig />}
          {type === "scanningper" && <ModalPer />}
          {type === "ModalVisual" && <ModalVisual />}
        </div>
        <div style={{ height: "30px", display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            style={{ marginRight: "10px" }}
            onClick={() => {
              setmodalOpen(false);
            }}
          >
            OK
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              setmodalOpen(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <div
        style={{ zIndex: 999, position: "fixed", width: "100%", height: "100%", backgroundColor: "black", top: 0, left: 0, opacity: 0.5, cursor: "pointer" }}
        onClick={() => {
          setmodalOpen(false);
        }}
      />
    </React.Fragment>
  );
}

export default Modal;
