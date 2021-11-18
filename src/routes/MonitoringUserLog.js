import { useMemo, useState } from "react";
import qs from "qs";
import faker from "faker/locale/ko";
import { Div, Header } from "../style/styled-compo";
import ToggleSide from "../components/ScanSide";
import Table from "../components/Table";

faker.seed(100);

const MonitoringUserLog = ({ group, user, poweruser }) => {
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
      <Header />
      <Div>
        <ToggleSide />
        <Table columns={columns} data={data} />
      </Div>
    </>
  );
};

export default MonitoringUserLog;

//location으로
