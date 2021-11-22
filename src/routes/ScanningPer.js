import React, { useMemo } from "react";
import Table from "../components/module/Table";
import faker from "faker/locale/ko";

function ScanningPer() {
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
    "과도한 권한 IAM USER",
    "미사용 IAM USER",
    "과도한 권한 IAM USER",
    "과도한 권한 IAM USER",
    "미연결 IAM POLICY",
    "과도한 권한 IAM USER",
    "미사용 IAM ROLE",
    "과도한 권한 IAM USER",
    "과도한 권한 IAM GROUP",
    "과도한 권한 IAM GROUP",
    "과도한 권한 IAM ROLE",
    "과도한 권한 IAM ROLE",
    "미사용 IAM USER",
    "미사용 IAM USER",
    "미연결 IAM USER",
    "미연결 IAM USER",
    "미사용 IAM ROLE",
    "미사용 IAM ROLE",
    "미사용 IAM ROLE",
    "미사용 IAM ROLE",
    "미사용 IAM GROUP",
    "미사용 IAM GROUP",
    "미연결 IAM GROUP",
    "미사용 IAM POLICY",
    "미사용 IAM POLICY",
    "미사용 IAM POLICY",
    "미사용 IAM POLICY",
    "미사용 IAM POLICY",
    "미사용 IAM POLICY",
    "미사용 IAM POLICY",
    "미연결 IAM POLICY",
    "미연결 IAM POLICY",
    "미연결 IAM POLICY",
    "미연결 IAM POLICY",
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
      Array(20)
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
        <Table columns={columns} data={data} type="scanper" />
      </div>
    </>
  );
}

export default ScanningPer;
