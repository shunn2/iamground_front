import { useMemo } from "react";
import faker from "faker/locale/ko";
import Table from "../components/Table";
import { Div, Header } from "../style/styled-compo";

faker.seed(100);

function Monitoring() {
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
      Array(53)
        .fill()
        .map(() => ({
          time: faker.time.recent(),
          user: faker.name.lastName() + faker.name.firstName(),
          resource: faker.lorem.word(),
          activity: faker.lorem.word(),
          result: faker.lorem.sentence(),
          reason: faker.lorem.sentence(),
          ip: faker.internet.ip(),
        })),
    []
  );

  return (
    <>
      <Header />
      <Div>
        <Table columns={columns} data={data} />;
      </Div>
    </>
  );
}

export default Monitoring;
