import { useMemo, useState } from "react";
import faker from "faker/locale/ko";
import Table from "../components/module/Table";
import Switch from "@mui/material/Switch";
import { Div } from "../style/styled-compo";

faker.seed(100);

const labelStyle = {
  position: "relative",
  top: "10px",
  left: "1000px",
};

function Monitoring() {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const result = [
    "Success",
    "Fail",
    "Fail",
    "Fail",
    "Success",
    "Fail",
    "Success",
    "Fail",
    "Fail",
    "Fail",
    "Fail",
    "Fail",
    "Success",
    "Success",
    "Fail",
    "Fail",
    "Fail",
    "Fail",
    "Success",
    "Success",
    "Fail",
  ];
  const resultCatgory = [
    "-",
    "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
    "IAM ROLE에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
    "90일 이내 액세스 키나 패스워드를 통해 IAM 사용자가 접속한 기록이 없습니다.",
    "-",
    "90일 이내 IAM ROLE을 사용한 기록이 없습니다.",
    "-",
    "90일 이내 해당 IAM POLICY를 이용하여 AWS 서비스에서 접근한 기록이 없습니다.",
    "IAM USER에 연결된 관리형/인라인 정책이 없습니다.",
    "IAM GROUP에 연결된 IAM USER가 없습니다.",
    "IAM ROLE에 연결된 관리형/인라인 정책이 없습니다.",
    "고객 관리형 IAM POLICY에 연결된 IAM 엔티티가 없습니다.",
    "-",
    "-",
    "자신이 해당하는 조직의 조직원들과는 다른 권한이 존재합니다.",
    "IAM GROUP에 연결된 IAM USER가 없습니다.",
    "IAM ROLE에 연결된 관리형/인라인 정책이 없습니다.",
    "고객 관리형 IAM POLICY에 연결된 IAM 엔티티가 없습니다.",
    "-",
    "-",
    "자신이 해당하는 조직의 조직원들과는 다른 권한이 존재합니다.",
  ];
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
  const dataUser = [
    "User5",
    "User1",
    "User12",
    "User2",
    "User4",
    "User23",
    "User13",
    "User1",
    "User24",
    "User3",
    "User5",
    "User7",
    "User15",
    "User13",
    "User2",
    "User4",
    "User15",
    "User13",
    "User1",
    "User24",
    "User3",
    "User5",
    "User7",
  ];
  const dataActivity = [
    "CreateBucket",
    "CreatePolicy",
    "DeleteBucket",
    "LaunchEC2",
    "AttachPolicy",
    "CreateRole",
    "CreateGroup",
    "AssumeRole",
    "CreatePolicy",
    "DeleteBucket",
    "LaunchEC2",
    "AttachPolicy",
    "CreateRole",
    "CreateGroup",
    "AssumeRole",
    "DeleteBucket",
    "LaunchEC2",
    "AttachPolicy",
    "CreateRole",
    "CreateGroup",
    "AssumeRole",
  ];
  const columns = useMemo(
    () => [
      {
        accessor: "time",
        Header: "Time",
      },
      {
        accessor: "user",
        Header: "User",
      },
      {
        accessor: "resource",
        Header: "Resource",
      },
      {
        accessor: "activity",
        Header: "Activity",
      },
      {
        accessor: "result",
        Header: "Result",
      },
      {
        accessor: "reason",
        Header: "Reason",
      },
      {
        accessor: "ip",
        Header: "Ip",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(20)
        .fill()
        .map((v, i) => ({
          time: faker.time.recent(),
          user: dataUser[i],
          resource: dataResource[i],
          activity: dataActivity[i],
          result: result[i],
          reason: resultCatgory[i],
          ip: faker.internet.ip(),
        })),
    []
  );

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px" }}>Monitoring</h1>
      <Div>
        <form>
          <label style={labelStyle}>
            <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} color="success" />
            <strong>위험한 변경사항</strong>
          </label>
        </form>
        {checked && <Table type="monitoring" columns={columns} data={data} />}
      </Div>
    </>
  );
}

export default Monitoring;
