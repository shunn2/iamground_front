import React from "react";
import TableMaterial from "../components/module/MTable";

function ScanningConfig() {
  return (
    <>
      <div style={{ paddingTop: "50px" }}>
        <TableMaterial
          columns={[
            { title: "Resource", field: "resource" },
            { title: "arn", field: "arn" },
            { title: "Reason", field: "reason" },
            { title: "Recommendation", field: "recommendation", align: "center" },
            { title: "Marking", field: "marking", align: "center" },
          ]}
          cdata={[
            {
              resource: "Root",
              arn: "arn:aws:iam::284264230655:root",
              reason: "강력한 IAM 암호 정책 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "fronttt",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "암호 재사용 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "emptyUser",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "User 암호 만료",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "IAMBoto3",
              arn: "arn:aws:iam::284264230655:user/IAMBoto3",
              reason: "강력한 IAM 암호 정책 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "ssh-user",
              arn: "arn:aws:iam::284264230655:user/ssh-user",
              reason: "User SSH Public Key 2개 활성화",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "test1",
              arn: "arn:aws:iam::284264230655:user/test",
              reason: "User Access Key 만료",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "Root",
              arn: "arn:aws:iam::284264230655:root",
              reason: "강력한 IAM 암호 정책 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "fronttt",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "암호 재사용 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "emptyUser",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "User 암호 만료",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "IAMBoto3",
              arn: "arn:aws:iam::284264230655:user/IAMBoto3",
              reason: "강력한 IAM 암호 정책 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "ssh-user",
              arn: "arn:aws:iam::284264230655:user/ssh-user",
              reason: "User SSH Public Key 2개 활성화",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "test1",
              arn: "arn:aws:iam::284264230655:user/test",
              reason: "User Access Key 만료",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "Root",
              arn: "arn:aws:iam::284264230655:root",
              reason: "강력한 IAM 암호 정책 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "fronttt",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "암호 재사용 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "emptyUser",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "User 암호 만료",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "IAMBoto3",
              arn: "arn:aws:iam::284264230655:user/IAMBoto3",
              reason: "강력한 IAM 암호 정책 설정 오류",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "ssh-user",
              arn: "arn:aws:iam::284264230655:user/ssh-user",
              reason: "User SSH Public Key 2개 활성화",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "test1",
              arn: "arn:aws:iam::284264230655:user/test",
              reason: "User Access Key 만료",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
          ]}
          title="Misconfigurations"
          type="scanningconfig"
        />
      </div>
    </>
  );
}

export default ScanningConfig;
