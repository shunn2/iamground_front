import React, { useState, useEffect } from "react";
import HorizontalFlow from "../../service/visualization/HorizontalFlow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Clear } from "@mui/icons-material";
import axios from "axios";

const ModalPer = ({ modalOpen, setmodalOpen, Id }) => {
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
  const [infoData, setInfoData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://54.180.115.206:8000/mock/scan/report?info_id=${Id}`);
    setInfoData(response.data.infoDetail);
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scanning permissionList
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Scanning Per
          </Typography>
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

export default ModalPer;
