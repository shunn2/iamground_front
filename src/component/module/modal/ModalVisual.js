import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalFlow from "../../service/visualization/HorizontalFlow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Clear } from "@mui/icons-material";
import styled from "styled-components";
import moment from "moment";

const ModalText = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 40px;
`;
const TitleDiv = styled.div`
  font-size: 22px;
  font-weight: bold;
  width: 250px;
`;
const TextDiv = styled.div`
  font-size: 20px;
`;
const ModalVisual = ({ modalOpen, setmodalOpen, resource }) => {
  // const [visualModalData, setVisualModalData] = useState(null);
  // const fetchVisualModalData = async () => {
  //   const response = await axios.get("http://54.180.115.206:8000/mock/visualization", { params: { iamResourceArn: resource } });
  //   setVisualModalData(response.data);
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
    width: 1200,
    height: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
  };
  const visualModalData = {
    detail: {
      cloudName: "iamgroundCloud",
      resourceArn: "arn:user/kim1234",
      resourceName: "kim1234",
      orgGroup: "Dev-junior",
      creation: "2021-12-03T02:51:39.000Z",
      lastUsedDate: "2021-12-03T02:51:39.000Z",
      mfa: true,
      accessKey1: "AAWDAW",
      accessKey2: "ssdfsdfsd",
      confResult: ["Root 사용"],
      perResult: ["과도한 권한 IAM USER"],
    },
    relation: {
      group: [
        {
          source: "arn:user/kim1234",
          target: "arn:group/group1",
          lineColor: 1,
        },
      ],
      policy: [
        {
          source: "arn:group/group1",
          target: "arn:policy/policy1",
          lineColor: 1,
        },
        {
          source: "arn:group/group1",
          target: "arn:policy/policy2",
          lineColor: 3,
        },
        {
          source: "arn:group/group1",
          target: "arn:policy/policy3",
          lineColor: 2,
        },
      ],
    },
  };
  const Format = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", width: "50%", flexDirection: "column" }}>
            <ModalText>
              <TitleDiv>클라우드 이름</TitleDiv>
              <TextDiv>{visualModalData.detail.cloudName}</TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>리소스 정보</TitleDiv>
              <TextDiv>
                {visualModalData.detail.resourceName}({visualModalData.detail.resourceArn})
              </TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>권한 분리 그룹</TitleDiv>
              <TextDiv>{visualModalData.detail.orgGroup}</TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>생성 시간</TitleDiv>
              <TextDiv> {moment(visualModalData.detail.creation).format("YYYY-MM-DD HH:mm:ss")}</TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>마지막 사용 시간</TitleDiv>
              <TextDiv>{moment(visualModalData.detail.lastUsedDate).format("YYYY-MM-DD HH:mm:ss")}</TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>MFA</TitleDiv>
              <TextDiv>{visualModalData.detail.mfa ? <span>yes</span> : <span>no</span>}</TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>액세스 키</TitleDiv>
              <TextDiv>
                {visualModalData.detail.accessKey1}
                <br />
                {visualModalData.detail.accessKey2 == null ? null : <span>{visualModalData.detail.accessKey2}</span>}
              </TextDiv>
            </ModalText>
          </div>
          <div style={{ display: "flex", width: "50%", flexDirection: "column" }}>
            <ModalText>
              <TitleDiv>올바른 구성 스캔 결과</TitleDiv>
              <TextDiv>{visualModalData.detail.confResult}</TextDiv>
            </ModalText>
            <ModalText>
              <TitleDiv>권한 분리 스캔 결과</TitleDiv>
              <TextDiv>{visualModalData.detail.perResult}</TextDiv>
            </ModalText>
          </div>
        </div>

        <div style={{ width: "100%", height: "400px", paddingTop: "100px" }}>
          <HorizontalFlow resource={visualModalData.relation} subject={visualModalData.detail.resourceArn} />
        </div>
      </div>
    );
  };
  return (
    <div style={{ width: "500px" }}>
      <Modal open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div>
            <Format />
          </div>
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
