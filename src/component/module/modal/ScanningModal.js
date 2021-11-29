import React from "react";
import Button from "@mui/material/Button";
import { Clear } from "@mui/icons-material";
import ModalJson from "./ModalJson";

function Modal({ type, modalOpen, setmodalOpen }) {
  return (
    <React.Fragment>
      <div
        style={{
          zIndex: 1000,
          position: "fixed",
          width: "80%",
          minHeight: "600px",
          height: "fit-content",
          backgroundColor: "#ffffff",
          top: 0,
          left: 0,
          marginLeft: "10%",
          marginTop: "50px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <div style={{ height: "30px", display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>로그 세부 정보</div>
          <Clear
            style={{ fontSize: "26px", cursor: "pointer" }}
            onClick={() => {
              setmodalOpen(false);
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ModalJson />
        </div>
        <div style={{ height: "30px", display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
          <Button
            variant="contained"
            color="inherit"
            style={{ marginRight: "10px" }}
            onClick={() => {
              setmodalOpen(false);
            }}
          >
            이전
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setmodalOpen(false);
            }}
          >
            다음
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
