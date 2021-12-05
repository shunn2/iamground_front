import React, { useState, useEffect } from "react";
import HorizontalFlow from "../../service/visualization/HorizontalFlow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BorderBottom, Clear } from "@mui/icons-material";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";

const ModalText = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 60px;
`;
const TitleDiv = styled.div`
  font-size: 22px;
  font-weight: bold;
  width: 200px;
`;
const TextDiv = styled.div`
  font-size: 20px;
  width: 800px;
`;
const ModalInfo = ({ modalOpen, setmodalOpen, logId }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    height: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    overflowX: "auto",
  };
  const [logDetail, setLogDetail] = useState([]);
  const fetchLogDetail = async () => {
    const response = await axios.get("http://54.180.115.206:8000/mock/monitoring", { params: { log_id: logId } });
    setLogDetail(response.data.logDetail);
    console.log(response);
  };
  useEffect(() => {
    fetchLogDetail();
  }, []);

  return (
    <div>
      <Modal open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Clear
            style={{ fontSize: "26px", cursor: "pointer", position: "fixed", right: "50px" }}
            onClick={() => {
              setmodalOpen(false);
            }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "50px", borderBottom: "5px solid black" }}>
            로그 세부 정보
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ModalText>
                  <TitleDiv>클라우드 이름</TitleDiv>
                  <TextDiv>{logDetail.cloudName}</TextDiv>
                </ModalText>
                <ModalText>
                  <TitleDiv>주체 정보</TitleDiv>
                  <TextDiv>
                    {logDetail.identityName}({logDetail.identityArn}){logDetail.accessIp}
                  </TextDiv>
                </ModalText>
                <ModalText>
                  <TitleDiv>리소스 정보</TitleDiv>
                  <TextDiv>
                    {logDetail.resourceName}({logDetail.resourceArn})
                  </TextDiv>
                </ModalText>
                <ModalText>
                  <TitleDiv>활동 정보</TitleDiv>
                  <TextDiv>{logDetail.apiName}</TextDiv>
                </ModalText>
                <ModalText>
                  <TitleDiv>위험 이유</TitleDiv>
                  <TextDiv>{logDetail.reasonDetail}</TextDiv>
                </ModalText>
                <ModalText style={{ flexDirection: "column" }}>
                  <TitleDiv>원본 이벤트</TitleDiv>
                  <TextDiv>
                    <pre style={{ fontWeight: "bold" }}>{JSON.stringify(logDetail.rawData, undefined, 2)}</pre>
                  </TextDiv>
                </ModalText>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalInfo;
