import { useMemo, useState } from "react";
import faker from "faker/locale/ko";
import Table from "../components/Table";
import Switch from "@mui/material/Switch";
import { Div, Header } from "../style/styled-compo";

faker.seed(100);

const labelStyle = {
  position: "relative",
  top: "50px",
  left: "850px",
};

function Monitoring() {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };
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
        <form>
          <label style={labelStyle}>
            <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} color="success" />
            <strong>위험한 변경사항</strong>
          </label>
        </form>
        {checked && <Table columns={columns} data={data} />}
      </Div>
    </>
  );
}

export default Monitoring;