import React from "react";
import { Div1, Div2, Div3, Div4, Row, SummaryWrapper, Title } from "../style/styled-compo";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveBullet } from "@nivo/bullet";
import WarningIcon from "@mui/icons-material/Warning";
import GppGoodIcon from "@mui/icons-material/GppGood";

const ScanningSummary = () => {
  /* ********************반원 그래프******************** */
  const data1 = [
    {
      id: "Risky Permission",
      label: "Risky",
      value: 70,
      color: "hsl(143, 70%, 50%)",
    },
    {
      id: "Normal Permission",
      label: "Normal",
      value: 30,
      color: "#FFFFFF",
    },
  ];

  const data2 = [
    {
      id: "Risky Config",
      label: "Risky",
      value: 8,
      color: "# FF0000",
    },
    {
      id: "Normal Config",
      label: "Normal",
      value: 12,
      color: "#FFFFFF",
    },
  ];

  const colors = {
    "Risky Permission": "	#b7d6da",
    "Normal Permission": "	#C3B8B5",
    "Risky Config": "	#b7d6da",
    "Normal Config": "	#C3B8B5",
  };
  const getColor = (pie) => colors[pie.id];

  const MyResponsivePie = ({ data }) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-90}
      endAngle={90}
      activeOuterRadiusOffset={8}
      colors={getColor}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  /* ********************바 그래프******************** */
  const data_bar1 = [
    {
      id: "",
      ranges: [10, 30, 40, 60, 70],
      measures: [],
      markers: [],
    },
  ];
  const data_bar2 = [
    {
      id: "",
      ranges: [3, 5, 7, 9, 10],
      measures: [],
      markers: [],
    },
  ];

  const MyResponsiveBullet = ({ data }) => (
    <ResponsiveBullet
      data={data}
      minValue="auto"
      margin={{ top: 0, right: 90, bottom: 50, left: 90 }}
      spacing={0}
      titleAlign="start"
      titleOffsetX={-57}
      measureBorderColor={{ from: "color", modifiers: [] }}
      measureSize={0}
      markerSize={0}
      rangeColors="nivo"
      measureColors="nivo"
    />
  );

  /* ********************차트******************** */
  const data_chart = [
    {
      result: "Permission: Last",
      "Last Scan": 60,
      "Last ScanColor": "hsl(102, 70%, 50%)",
    },
    {
      result: "Permission: Current",
      "Current Scan": 70,
      "Current ScanColor": "hsl(102, 70%, 50%)",
    },
    {
      result: "Config: Last",
      "Last Scan": 6,
      "Last ScanColor": "hsl(102, 70%, 50%)",
    },
    {
      result: "Config: Current",
      "Current Scan": 8,
      "Current ScanColor": "hsl(102, 70%, 50%)",
    },
  ];

  const MyResponsiveChart = ({ data }) => (
    <ResponsiveBar
      data={data}
      keys={["Last Scan", "Current Scan"]}
      indexBy="result"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      // colors={{ scheme: "set2" }}
      colors={["#C3B8B5", "#b7d6da"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Risky Resources",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
  /* ********************표******************** */

  const data_table = [
    {
      resource: "policy1",
      rec: "delete permission1",
      last: <GppGoodIcon />,
      cur: <WarningIcon />,
    },
    {
      resource: "user2",
      rec: "delete permission33",
      last: <GppGoodIcon />,
      cur: <WarningIcon />,
    },
    {
      resource: "policy2",
      rec: "delete resource",
      last: <WarningIcon />,
      cur: <WarningIcon />,
    },
    {
      resource: "role1",
      rec: "misconfiguration",
      last: <WarningIcon />,
      cur: <WarningIcon />,
    },
    {
      resource: "user4",
      rec: "need delete deny",
      last: <GppGoodIcon />,
      cur: <WarningIcon />,
    },
  ];

  const MyTable = () => {
    return (
      <>
        <br />
        <br />
        <table
          border="4"
          borderColor="#b7d6da"
          cellPadding="5"
          style={{
            textAlign: "center",
            borderCollapse: "collapse",
            cellpadding: "20px",
            paddingTop: "100px",
          }}
        >
          <thead>
            <tr>
              <th>Resource</th>
              <th>Recommendation</th>
              <th>Last Scan</th>
              <th>Current Scan</th>
            </tr>
          </thead>
          <tbody>
            {data_table.map((v, i) => (
              <tr key={`tr-${i}`}>
                <td>{v.resource}</td>
                <td>{v.rec}</td>
                <td>{v.last}</td>
                <td>{v.cur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <SummaryWrapper>
      <Row>
        <Div2>
          <Title>Permission</Title>
          <div style={{ width: "100%", height: "calc(100% - 80px)" }}>
            <MyResponsivePie data={data1}></MyResponsivePie>
          </div>
          <div style={{ width: "100%", height: "60px" }}>
            <MyResponsiveBullet data={data_bar1}></MyResponsiveBullet>
          </div>
        </Div2>
        <Div1>
          <Title>Config</Title>
          <div style={{ width: "100%", height: "calc(100% - 80px)" }}>
            <MyResponsivePie data={data2}></MyResponsivePie>
          </div>
          <div style={{ width: "100%", height: "60px" }}>
            <MyResponsiveBullet data={data_bar2}></MyResponsiveBullet>
          </div>
        </Div1>
      </Row>
      <Row>
        <Div3>
          <MyResponsiveChart data={data_chart}></MyResponsiveChart>
        </Div3>
        <Div4>
          <center>
            <MyTable />
          </center>
        </Div4>
      </Row>
    </SummaryWrapper>
  );
};

export default ScanningSummary;
