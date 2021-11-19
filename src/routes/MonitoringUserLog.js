import { useMemo } from "react";
import qs from "qs";
import faker from "faker/locale/ko";
import { Div, UserName } from "../style/styled-compo";
import Table from "../components/module/Table";
import { Link, useLocation } from "react-router-dom";
import { Personbutton, Groupbutton } from "../style/Icons";

faker.seed(100);

const MonitoringUserLog = ({ group, user, poweruser }) => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const decideWho = query.userName.substring(0, 4);
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
      Array(13)
        .fill()
        .map(() => ({
          time: faker.time.recent(),
          user: query.userName,
          resource: faker.lorem.word(),
          activity: faker.lorem.word(),
          result: faker.lorem.word(),
          reason: faker.lorem.word(),
          ip: faker.internet.ip(),
        })),
    []
  );
  return (
    <>
      <h1 style={{ position: "fixed", top: "5px", color: "#18b7be" }}>Monitoring</h1>
      <Div>
        {decideWho === "User" ? (
          <div style={{ position: "fixed", top: "20px", right: "220px" }}>
            <Personbutton />
            <UserName>{query.userName}</UserName>
          </div>
        ) : (
          <div style={{ position: "fixed", top: "20px", right: "220px" }}>
            <Groupbutton />
            <UserName>{query.userName}</UserName>
          </div>
        )}
        <div>
          <Link to="/visualization">
            <button style={{ position: "fixed", top: "80px", right: "80px", backgroundColor: "#b7d6da", height: "50px" }}>{query.userName} 정보 보기</button>
          </Link>
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Table columns={columns} data={data} />
        </div>
      </Div>
    </>
  );
};

export default MonitoringUserLog;

//location으로
