import React, { useMemo } from "react";
import Table from "../components/module/Table";
import faker from "faker/locale/ko";
import TableMaterial from "../components/MTable";

function ScanningConfig() {
  const dataResource = [
    "Root",
    "Root",
    "emptyUser",
    "fronttt",
    "IAMBoto3",
    "iamgroundReadOnly",
    "ssh-user",
    "test",
    "test-test",
    "test1",
    "test123",
    "emptyUser",
    "fronttt",
    "IAMBoto3",
    "iamground",
    "iamgroundReadOnly",
    "OpsNow",
    "ssh-user",
    "test",
    "test-test",
    "test1",
    "test123",
    "IAMBoto3",
    "iamground",
    "OpsNow",
    "ssh-user",
  ];
  const dataArn = [
    "arn:aws:iam::284264230655:root",
    "arn:aws:iam::284264230655:root",
    "arn:aws:iam::284264230655:user/emptyUser",
    "arn:aws:iam::284264230655:user/fronttt",
    "arn:aws:iam::284264230655:user/IAMBoto3",
    "arn:aws:iam::284264230655:user/iamgroundReadOnly",
    "arn:aws:iam::284264230655:user/ssh-user",
    "arn:aws:iam::284264230655:user/test",
    "arn:aws:iam::284264230655:user/test-test",
    "arn:aws:iam::284264230655:user/test1",
    "arn:aws:iam::284264230655:user/test123",
    "arn:aws:iam::284264230655:user/emptyUser",
    "arn:aws:iam::284264230655:user/fronttt",
    "arn:aws:iam::284264230655:user/IAMBoto3",
    "arn:aws:iam::284264230655:user/iamground",
    "arn:aws:iam::284264230655:user/iamgroundReadOnly",
    "arn:aws:iam::284264230655:user/OpsNow",
    "arn:aws:iam::284264230655:user/ssh-user",
    "arn:aws:iam::284264230655:user/test",
    "arn:aws:iam::284264230655:user/test-test",
    "arn:aws:iam::284264230655:user/test1",
    "arn:aws:iam::284264230655:user/test123",
    "arn:aws:iam::284264230655:user/IAMBoto3",
    "arn:aws:iam::284264230655:user/iamground",
    "arn:aws:iam::284264230655:user/OpsNow",
    "arn:aws:iam::284264230655:user/ssh-user",
  ];
  const dataReason = [
    "강력한 IAM 암호 정책 설정 오류",
    "암호 길이 제한 설정 오류",
    "암호 재사용 설정 오류",
    "Root 사용",
    "Root MFA 비활성화",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User 암호 만료",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User MFA 비활성화",
    "User Access Key 만료",
    "User Access Key 만료",
    "User Access Key 만료",
    "User SSH Public Key 2개 활성화",
  ];

  const columns = useMemo(
    () => [
      {
        field: "resource",
        title: "Resource",
      },
      {
        field: "arn",
        title: "arn",
      },
      {
        field: "reason",
        title: "Reason",
      },
      {
        field: "recommendation",
        title: "Recommendation",
      },
      {
        field: "marking",
        title: "Marking",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(15)
        .fill()
        .map((v, i) => ({
          resource: dataResource[i],
          arn: dataArn[i],
          reason: dataReason[i],
          recommendation: <button>자세히 보기</button>,
          marking: <input type="checkbox" />,
        })),
    []
  );

  return (
    <>
      <div style={{ paddingTop: "50px" }}>
        <TableMaterial
          columns={[
            { title: "Resource", field: "resource" },
            { title: "arn", field: "arn" },
            { title: "Reason", field: "reason" },
            { title: "Recommendation", field: "recommendation" },
            { title: "Marking", field: "marking" },
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
          type="scanning2"
        />
      </div>
    </>
  );
}

export default ScanningConfig;
