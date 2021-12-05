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
  // const [logDetail, setLogDetail] = useState(null);
  // const fetchLogDetail = async () => {
  //   const response = await axios.get("http://54.180.115.206:8000/mock/monitoring", { params: { log_id: logId } });
  //   setLogDetail(response.logDetail);
  //   console.log(response);
  //   console.log(logDetail);
  // };
  // useEffect(() => {
  //   fetchLogDetail();
  // }, []);
  const title = ["클라우드 이름", "주체 정보", "서비스", "리소스 정보", "활동 정보", "위험 이유", "원본 이벤트"];
  const logDetail = {
    cloudName: "test-cloud",
    creation: "Wed Nov 10 2021 14:03:45 GMT+0900 (한국 표준시)",
    identityName: "user1",
    identityArn: "arn:aws:iam::486211121934:user/test1",
    accessIp: "127.0.0.1",
    region: "us-east-1",
    resourseName: "user2",
    resourseArn: "arn:aws:iam::486211121934:user/test2",
    service: "ec2",
    apiName: "LaunchEC2",
    result: 0,
    reasonCategory: "3.2.1", // possibly undifined
    reasonDetail: "평소 활동 리전은 ap-northeast-2입니다. 하지만 us-east-1 리전에서 활동이 발견되었습니다.", // possibly undifined
    rawData: {
      version: "0",
      id: "ce5645a3-2791-73ef-9db9-73c889bbe0e9",
      "detail-type": "AWS API Call via CloudTrail",
      source: "aws.iam",
      account: "962110289919",
      time: "2021-10-09T15:32:13Z",
      region: "us-east-1",
      resources: [],
      detail: {
        eventVersion: "1.08",
        userIdentity: {
          type: "Root",
          principalId: "962110289919",
          arn: "arn:aws:iam::962110289919:root",
          accountId: "962110289919",
          accessKeyId: "ASIA6AAR5677ZZ2VY24L",
          sessionContext: {
            sessionIssuer: {},
            webIdFederationData: {},
            attributes: {
              creationDate: "2021-10-09T11:54:21Z",
              mfaAuthenticated: "false",
            },
          },
        },
        eventTime: "2021-10-09T15:32:13Z",
        eventSource: "iam.amazonaws.com",
        eventName: "CreatePolicy",
        awsRegion: "us-east-1",
        sourceIPAddress: "221.149.235.161",
        userAgent: "console.amazonaws.com",
        requestParameters: {
          policyName: "trailTest",
          policyDocument:
            "{\n    'Version': '2012-10-17',\n    'Statement': [\n        {\n            'Sid': 'VisualEditor0',\n            'Effect': 'Allow',\n            'Action': 'cloudtrail:',\n            'Resource': ''\n        }\n    ]\n}",
          description: "trail ALL",
          tags: [],
        },
        responseElements: {
          policy: {
            policyName: "trailTest",
            policyId: "ANPA6AAR5677WZIUJRAYD",
            arn: "arn:aws:iam::962110289919:policy/trailTest",
            path: "/",
            defaultVersionId: "v1",
            attachmentCount: 0,
            permissionsBoundaryUsageCount: 0,
            isAttachable: true,
            createDate: "Oct 9, 2021 3:32:13 PM",
            updateDate: "Oct 9, 2021 3:32:13 PM",
            tags: [],
          },
        },
        requestID: "aaf7a930-75b8-4ffe-9c9d-ec565090c403",
        eventID: "c163e542-af25-4cbd-b56a-b2e5d0bb437a",
        readOnly: false,
        eventType: "AwsApiCall",
        managementEvent: true,
        recipientAccountId: "962110289919",
        eventCategory: "Management",
        sessionCredentialFromConsole: true,
      },
    },
  };

  const Format = () => {
    return (
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
              {logDetail.resourseName}({logDetail.resourseArn})
            </TextDiv>
          </ModalText>
          <ModalText>
            <TitleDiv>활동 정보</TitleDiv>
            <TextDiv></TextDiv>
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
    );
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
            <Format />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalInfo;
