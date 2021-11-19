import { useMemo } from "react";
import Table from "../components/module/Table";
import faker from "faker/locale/ko";

function ScanningConfig() {
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
        .map(() => ({
          resource: faker.lorem.word(),
          arn: faker.lorem.word(),
          reason: faker.lorem.word(),
          recommendation: <button>자세히 보기</button>,
          marking: <input type="checkbox" />,
        })),
    []
  );

  return (
    <>
      <div style={{ paddingTop: "50px" }}>
        <Table type="scan" columns={columns} data={data} />
      </div>
    </>
  );
}

export default ScanningConfig;
