import React from "react";
import TableMaterial from "../components/module/MTable";

function ScanningPer() {
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
              reason: "과도한 권한 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "fronttt",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "emptyUser",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "과도한 권한 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "IAMBoto3",
              arn: "arn:aws:iam::284264230655:user/IAMBoto3",
              reason: "과도한 권한 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "ssh-user",
              arn: "arn:aws:iam::284264230655:user/ssh-user",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "test1",
              arn: "arn:aws:iam::284264230655:user/test",
              reason: "과도한 권한 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "Root",
              arn: "arn:aws:iam::284264230655:root",
              reason: "과도한 권한 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "fronttt",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "emptyUser",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "IAMBoto3",
              arn: "arn:aws:iam::284264230655:user/IAMBoto3",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "ssh-user",
              arn: "arn:aws:iam::284264230655:user/ssh-user",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "test1",
              arn: "arn:aws:iam::284264230655:user/test",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "Root",
              arn: "arn:aws:iam::284264230655:root",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "fronttt",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "미사용 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "emptyUser",
              arn: "arn:aws:iam::284264230655:user/emptyUser",
              reason: "미연결 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "IAMBoto3",
              arn: "arn:aws:iam::284264230655:user/IAMBoto3",
              reason: "미연결 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "ssh-user",
              arn: "arn:aws:iam::284264230655:user/ssh-user",
              reason: "미연결 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
            {
              resource: "test1",
              arn: "arn:aws:iam::284264230655:user/test",
              reason: "미연결 IAM USER",
              recommendation: <button>자세히 보기</button>,
              marking: <input type="checkbox" />,
            },
          ]}
          title="Permissions"
          type="scanning2"
        />
      </div>
    </>
  );
}

export default ScanningPer;
