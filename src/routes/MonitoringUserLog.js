import { useMemo } from "react";
import qs from "qs";
import faker from "faker/locale/ko";
import { Div, UserName } from "../style/styled-compo";
import Table from "../components/module/Table";
import { Link, useLocation } from "react-router-dom";
import { Personbutton, Groupbutton } from "../style/Icons";
import Button from '@mui/material/Button';

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
      <h1 style={{ color: "#787878",margin:'0px 0px 10px 0px', fontSize:'26px', height:'35px' }}>Monitoring</h1>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          {decideWho === "User" ? (
            <div style={{display:'flex', alignItems:'center', }}>
              <Personbutton />
              <div style={{fontSize:'24px'}}>{query.userName}</div>
            </div>
          ) : (
            <div>
              <Groupbutton />
              <UserName>{query.userName}</UserName>
            </div>
          )}
          <Link to="/visualization" style={{textDecoration:'none'}}>
            <Button variant="contained">{query.userName} 정보 보기</Button>
          </Link>
        </div>
      <Div>
        <div style={{ paddingTop: "40px" }}>
          <Table columns={columns} data={data} />
        </div>
      </Div>
    </>
  );
};

export default MonitoringUserLog;

//location으로
