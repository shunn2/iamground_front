import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalFlow from "../../service/visualization/HorizontalFlow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Clear } from "@mui/icons-material";

const ModalVisual = ({ modalOpen, setmodalOpen, resource }) => {
  // const [visualModalData, setVisualModalData] = useState(null);
  // const fetchVisualModalData = async () => {
  //   const response = await axios.get("http://54.180.115.206:8000/mock/visualization", { params: { iamResourceArn: resource } });
  //   setVisualModalData(response);
  //   console.log(response);
  //   console.log(visualModalData);
  // };
  // useEffect(() => {
  //   fetchVisualModalData();
  // }, []);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const data = () => {
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}></div>
        <div style={{ width: "50%" }}></div>
      </div>

      <div style={{ width: "100%", height: "300px" }}>
        <HorizontalFlow />
      </div>
    </>;
  };
  return (
    <div>
      <Modal open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div>{resource}</div>
          <Clear
            style={{ fontSize: "26px", cursor: "pointer" }}
            onClick={() => {
              setmodalOpen(false);
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalVisual;
