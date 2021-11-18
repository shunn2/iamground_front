import { useMemo, useState } from "react";

import qs from "qs";
import faker from "faker/locale/ko";
import { Div } from "../style/styled-compo";
import ToggleSide from "../components/ScanSide";
import Table from "../components/Table";
import { Link, useLocation } from "react-router-dom";
import { Personbutton, Groupbutton, PowerPbutton } from "../style/Icons";

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
      Array(100)
        .fill()
        .map(() => ({
          time: faker.time.recent(),
          user: faker.name.lastName() + faker.name.firstName(),
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
      <Div>
        {decideWho === "grou" ? (
          <div>
            <Groupbutton />
            {query.userName}
          </div>
        ) : decideWho === "p-us" ? (
          <div>
            <PowerPbutton />
            {query.userName}
          </div>
        ) : (
          <div>
            <Personbutton />
            {query.userName}
          </div>
        )}
        <div>
          <Link to="/visualization">
            <button>{query.userName} 정보 보기</button>
          </Link>
        </div>
        <Table columns={columns} data={data} />
      </Div>
    </>
  );
};

export default MonitoringUserLog;

//location으로
