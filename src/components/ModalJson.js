import React from "react";
import faker from "faker/locale/ko";

function ModalJson() {
  const data = ["권고사항1", "권고사항2", "권고사항3", "권고사항4", "권고사항5"];
  const RecTable = () => {
    return (
      <div style={{ paddingLeft: "150px" }}>
        <table
          border="3"
          borderColor="black"
          cellPadding="5"
          style={{
            textAlign: "center",
            borderCollapse: "collapse",
            cellpadding: "20px",
          }}
        >
          <tr>
            <td style={{ width: "450px", fontWeight: "bold" }}>정책 이름: iamgroundReadOnly</td>
            <td style={{ width: "450px", fontWeight: "bold" }}>Recommendation</td>
          </tr>
          <tr>
            <td style={{ paddingLeft: "30px", width: "350px", height: "200px", textAlign: "left" }}>
              "Version": "2012-10-17",
              <br /> "Statement": [ <br />
              Effect: Allow, <br />
              "NotAction": [ <br />
              <span style={{ backgroundColor: "magenta", width: "100%", display: "inline-block" }}>"iam:*", </span>
              <br />
              "organizations:*", <br />
              "account:*" <br />
              ], <br />
              <span style={{ backgroundColor: "magenta", width: "100%", display: "inline-block" }}>"Resource": "*"</span> <br />
              "Effect": "Allow", <br />
              "Action": [<br />
              "iam:CreateServiceLinkedRole", <br />
              "iam:DeleteServiceLinkedRole", <br />
              "iam:ListRoles", <br />
              "organizations:DescribeOrganization", <br />
              "account:ListRegions" <br />
              ], <br />
              <span style={{ backgroundColor: "magenta", width: "100%", display: "inline-block" }}>"Resource": "*" </span>
              <br />]
            </td>
            <td rowSpan="2" style={{ width: "350px", height: "500px", textAlign: "left" }}>
              "Version": "2012-10-17", <br />
              "Statement": [ <br />
              "Effect": "Allow", <br />
              "NotAction":[ <br />
              <span style={{ backgroundColor: "greenyellow" }}>"iam:*",</span> <br />
              "organizations:*", <br />
              "account:*" <br />
              ], <br />
              <span style={{ backgroundColor: "greenyellow" }}>"Resource": "*"</span> <br />]
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>
              <span style={{ backgroundColor: "magenta" }}>"iam:*", </span>
              <br />
              <br />
              <span style={{ backgroundColor: "magenta" }}>"Resource": "*"</span>
            </td>
          </tr>
        </table>
      </div>
    );
  };
  return (
    <>
      <div style={{ paddingLeft: "150px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <span style={{ fontWeight: "bold" }}>권고 사항 | 과도한 권한 IAM USER 수정</span>
        <span style={{ fontWeight: "bold" }}>추천 이유 | ssh-user 사용자에 연결된 iamgroundReadOnly 정책에서 90일간 미사용 서비스/권한/리소스가 존재합니다.</span>
        <span style={{ fontWeight: "bold" }}>현재 상태 | ssh-user 사용자는 IAM GROUP Developers 하위 PowerUserAccess 관리형 정책에 연결되어 있습니다.</span>
      </div>
      <ul style={{ position: "fixed", height: "100%", width: "150px" }}>
        {data.map((rec) => (
          <div>
            <button style={{ width: "100px" }}>{rec}</button>
          </div>
        ))}
      </ul>
      <RecTable />
    </>
  );
}

export default ModalJson;
