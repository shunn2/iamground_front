import React from "react";
import HorizontalFlow from "../Visualization/HorizontalFlow";

const ModalVisual = () => {
  const index = ["클라우드 이름", "리소스 이름", "권한 분리 그룹", "생성 시간", "마지막 사용 시간", "MFA", "Access Key", "올바른 구성 스캔 결과", "권한 분리 스캔 결과"];
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>클라우드 이름</span> | Iamground1
          </div>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>리소스 이름</span> | {`  `}User1 (arn:aws:iam::284264230655:user/User1)
          </div>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>권한 분리 그룹</span> | Group1
          </div>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>생성 시간</span> | 2021-09-08 05:27
          </div>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>마지막 사용 시간</span> | 2021-11-20 04:55
          </div>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>MFA</span> | 비활성화
          </div>
          <div style={{ padding: "5px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "160px" }}>Access Key</span> | AKIA6AAR5677YIONAWGX
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ paddingTop: "10px", paddingBottom: "10px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "200px" }}>올바른 구성 스캔 결과</span> | User MFA 비활성화, User Access Key 만료
          </div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px", fontSize: "20px" }}>
            <span style={{ display: "inline-block", width: "200px" }}>권한 분리 스캔 결과</span> | 과도한 권한 IAM USER
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "300px" }}>
        <HorizontalFlow />
      </div>
    </>
  );
};

export default ModalVisual;
