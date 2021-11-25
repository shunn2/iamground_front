import React from "react";
import { useMemo } from "react";
import faker from "faker/locale/ko";
import Table from "../components/module/Table";
import { Gdiv, Tdiv } from "../style/styled-compo";
import { ResponsiveLine } from "@nivo/line";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import TableMaterial from "../components/MTable";

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
    {
      id: "Sec",
      color: "hsl(269, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 150,
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
          y: 30,
        },
        {
          x: "11/14",
          y: 20,
        },
        {
          x: "11/15",
          y: 5,
        },
      ],
    },
    {
      id: "Test",
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
        field: "root",
        title: "Root",
      },
      {
        field: "last_scanned",
        title: "Last Scanned",
      },
      {
        field: "per",
        title: "Per",
      },
      {
        field: "config",
        title: "Config",
      },
      {
        field: "scan",
        title: "Scan",
      },
      {
        field: "result",
        title: "Result",
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
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Scanning</h1>
      <Gdiv>
        <MyResponsiveLine gdata={gdata} />
      </Gdiv>
      <Tdiv>
        <br />

        <TableMaterial
          columns={[
            { title: "Root", field: "root" },
            { title: "Last Scanned", field: "last_scanned" },
            { title: "Per", field: "per" },
            { title: "Config", field: "config" },
            { title: "Scan", field: "scan" },
            { title: "Result", field: "result" },
          ]}
          cdata={[
            {
              root: "Dev",
              last_scanned: "Thu Nov 25 2021 00:08:27 GMT+0900",
              per: "10",
              config: "26",
              scan: <button>Scan</button>,
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            },
            {
              root: "Res",
              last_scanned: "Thu Nov 25 2021 00:08:27 GMT+0900",
              per: "19",
              config: "36",
              scan: <button>Scan</button>,
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            },
            {
              root: "Sec",
              last_scanned: "Thu Nov 25 2021 00:08:27 GMT+0900",
              per: "30",
              config: "26",
              scan: <button>Scan</button>,
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            },
            {
              root: "Test",
              last_scanned: "Thu Nov 25 2021 00:08:27 GMT+0900",
              per: "8",
              config: "40",
              scan: <button>Scan</button>,
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            },
          ]}
          title="Root Accounts"
          type="scanning1"
        />
      </Tdiv>
    </>
  );
}

export default Scanning;
