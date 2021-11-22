import { useMemo } from "react";
import React from "react";
import Table from "../components/module/Table";
import faker from "faker/locale/ko";

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
        accessor: "resource",
        Header: "Resource",
      },
      {
        accessor: "arn",
        Header: "arn",
      },
      {
        accessor: "reason",
        Header: "Reason",
      },
      {
        accessor: "recommendation",
        Header: "Recommendation",
      },
      {
        accessor: "marking",
        Header: "Marking",
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
        <Table columns={columns} data={data} type="scanconfig" />
      </div>
    </>
  );
}

export default ScanningConfig;
