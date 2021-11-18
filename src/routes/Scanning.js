import React from "react";
import { useMemo } from "react";
import faker from "faker/locale/ko";
import Table from "../components/Table";
import { Gdiv, Tdiv, Header } from "../style/styled-compo";
import { ResponsiveLine } from "@nivo/line";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";

faker.seed(100);

function Scanning() {
  const gdata = [
    {
      id: "Dev",
      color: "hsl(269, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 40,
        },
        {
          x: "11/11",
          y: 85,
        },
        {
          x: "11/12",
          y: 44,
        },
        {
          x: "11/13",
          y: 150,
        },
        {
          x: "11/14",
          y: 100,
        },
        {
          x: "11/15",
          y: 78,
        },
      ],
    },
    {
      id: "Res",
      color: "hsl(263, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 40,
        },
        {
          x: "11/11",
          y: 85,
        },
        {
          x: "11/12",
          y: 44,
        },
        {
          x: "11/13",
          y: 150,
        },
        {
          x: "11/14",
          y: 100,
        },
        {
          x: "11/15",
          y: 78,
        },
      ],
    },
  ];

  const MyResponsiveLine = ({ gdata }) => (
    <ResponsiveLine
      data={gdata}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Recommendations",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  const columns = useMemo(
    () => [
      {
        accessor: "root",
        Header: "Root",
      },
      {
        accessor: "last_scanned",
        Header: "Last Scanned",
      },
      {
        accessor: "per",
        Header: "Per",
      },
      {
        accessor: "config",
        Header: "Config",
      },
      {
        accessor: "scan",
        Header: "Scan",
      },
      {
        accessor: "result",
        Header: "Result",
      },
    ],
    []
  );

  const tdata = useMemo(
    () =>
      Array(5)
        .fill()
        .map(() => ({
          root: faker.name.jobType(),
          last_scanned: faker.date.recent().toString(),
          per: faker.datatype.number(50),
          config: faker.datatype.number(50),
          scan: <button>Scan</button>,
          result: (
            <Link to="/scan/report/summary">
              <DescriptionIcon />
            </Link>
          ),
        })),
    []
  );

  return (
    <>
      <Header />
      <Gdiv>
        <MyResponsiveLine gdata={gdata} />
      </Gdiv>
      <Tdiv>
        <br />
        <Table columns={columns} data={tdata} />
      </Tdiv>
    </>
  );
}

export default Scanning;
