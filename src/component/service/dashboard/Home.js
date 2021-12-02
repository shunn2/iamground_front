import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import TableMaterial from "../../module/TableMaterial";

function Home() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const data = [
    {
      id: "korea",
      color: "#90CAF9",
      data: [
        {
          x: "12-01",
          y: 142,
        },
        {
          x: "12-02",
          y: 168,
        },
        {
          x: "12-03",
          y: 224,
        },
        {
          x: "12-04",
          y: 212,
        },
        {
          x: "12-05",
          y: 146,
        },
        {
          x: "12-06",
          y: 148,
        },
        {
          x: "12-07",
          y: 64,
        },
        {
          x: "12-08",
          y: 161,
        },
        {
          x: "12-09",
          y: 237,
        },
        {
          x: "12-10",
          y: 142,
        },
        {
          x: "12-11",
          y: 19,
        },
        {
          x: "12-12",
          y: 258,
        },
      ],
    },
  ];

  const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
      data={data}
      curve="monotoneX"
      colors="#90CAF9"
      margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
      yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "date",
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
      useMesh={true}
    />
  );

  const pieData = [
    {
      id: "안전한 유저",
      label: "안전한 유저",
      value: 25,
      color: "#61CDBB",
    },
    {
      id: "위험한 로그가 발생한 유저",
      label: "위험한 로그가 발생한 유저",
      value: 75,
      color: "#F47560",
    },
  ];

  const MyResponsivePie = ({ data }) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.6}
      padAngle={5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      colors={(pie) => pieData.find((v) => v.id === pie.id).color}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#DEDEDE"
      arcLinkLabelsThickness={0}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={(pie) => pieData.find((v) => v.id === pie.id).color}
      defs={[
        {
          id: "dots",
          background: "inherit",
          color: "#F47560",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          background: "inherit",
          color: "#61CDBB",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "hack",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "lines",
        },
      ]}
    />
  );

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px" }}>Dashboard</h1>
      <div style={{ width: "calc(100% - 30px)", height: "145px", backgroundColor: "#dedede", padding: "15px", marginBottom: "30px" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ color: "#787878", fontSize: "20px" }}>Percentage of Dangerous IAM Resources</div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: "120px", backgroundColor: "#ffffff", borderRadius: "4px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                  <MenuItem value={10}>ALL</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "0px 2%", marginTop: "15px" }}>
            <div style={{ width: "calc(18.4% - 20px)", height: "60px", backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px" }}>
              <div style={{ textAlign: "center", fontSize: "14px", fontWeight: "500", height: "19px" }}>
                <span style={{ fontWeight: "bold" }}>128</span> IAM USERS
              </div>
              <div style={{ height: "41px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "8px", marginBottom: "2px", fontSize: "12px" }}>16%</div>
                <div style={{ width: "100%", height: "10px", backgroundColor: "#EFEFEF", borderRadius: "4px" }}>
                  <div style={{ width: "16%", height: "10px", backgroundColor: "#90CAF9", borderRadius: "4px" }}></div>
                </div>
              </div>
            </div>

            <div style={{ width: "calc(18.4% - 20px)", height: "60px", backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px" }}>
              <div style={{ textAlign: "center", fontSize: "14px", fontWeight: "500", height: "19px" }}>
                <span style={{ fontWeight: "bold" }}>37</span> IAM SERVICE IDS
              </div>
              <div style={{ height: "41px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "8px", marginBottom: "2px", fontSize: "12px" }}>29%</div>
                <div style={{ width: "100%", height: "10px", backgroundColor: "#EFEFEF", borderRadius: "4px" }}>
                  <div style={{ width: "29%", height: "10px", backgroundColor: "#90CAF9", borderRadius: "4px" }}></div>
                </div>
              </div>
            </div>

            <div style={{ width: "calc(18.4% - 20px)", height: "60px", backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px" }}>
              <div style={{ textAlign: "center", fontSize: "14px", fontWeight: "500", height: "19px" }}>
                <span style={{ fontWeight: "bold" }}>24</span> IAM GROUPS
              </div>
              <div style={{ height: "41px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "8px", marginBottom: "2px", fontSize: "12px" }}>27%</div>
                <div style={{ width: "100%", height: "10px", backgroundColor: "#EFEFEF", borderRadius: "4px" }}>
                  <div style={{ width: "27%", height: "10px", backgroundColor: "#90CAF9", borderRadius: "4px" }}></div>
                </div>
              </div>
            </div>

            <div style={{ width: "calc(18.4% - 20px)", height: "60px", backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px" }}>
              <div style={{ textAlign: "center", fontSize: "14px", fontWeight: "500", height: "19px" }}>
                <span style={{ fontWeight: "bold" }}>30</span> IAM ROLES
              </div>
              <div style={{ height: "41px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "8px", marginBottom: "2px", fontSize: "12px" }}>70%</div>
                <div style={{ width: "100%", height: "10px", backgroundColor: "#EFEFEF", borderRadius: "4px" }}>
                  <div style={{ width: "70%", height: "10px", backgroundColor: "#90CAF9", borderRadius: "4px" }}></div>
                </div>
              </div>
            </div>

            <div style={{ width: "calc(18.4% - 20px)", height: "60px", backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px" }}>
              <div style={{ textAlign: "center", fontSize: "14px", fontWeight: "500", height: "19px" }}>
                <span style={{ fontWeight: "bold" }}>200</span> IAM POLICIES
              </div>
              <div style={{ height: "41px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "8px", marginBottom: "2px", fontSize: "12px" }}>52%</div>
                <div style={{ width: "100%", height: "10px", backgroundColor: "#EFEFEF", borderRadius: "4px" }}>
                  <div style={{ width: "52%", height: "10px", backgroundColor: "#90CAF9", borderRadius: "4px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "calc(100% - 30px)", height: "300px", backgroundColor: "#dedede", padding: "15px", display: "flex", marginBottom: "30px" }}>
        <div style={{ width: "70%", height: "100%", backgroundColor: "white", borderRadius: "5px" }}>
          <div style={{ color: "#787878", fontSize: "20px", paddingLeft: "10px", paddingTop: "10px" }}>Number of Events</div>
          <div style={{ width: "100%", height: "90%" }}>
            <MyResponsiveLine data={data} />
          </div>
        </div>

        <div style={{ width: "30%", height: "100%" }}>
          <MyResponsivePie data={pieData} />
          <div style={{ position: "relative", textAlign: "center", bottom: "180px" }}>
            <span style={{ color: "#e0452b" }}>75</span> / 100
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-65px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "16px", backgroundColor: "#F47560", marginRight: "6px" }} />
            <div>위험한 로그가 발생한 유저</div>
          </div>
        </div>
      </div>

      <div style={{ width: "calc(100% - 30px)", height: "260px", backgroundColor: "#dedede", padding: "15px" }}>
        <TableMaterial
          columns={[
            { title: "Cloud Name", field: "cloudName" },
            { title: "Last Scan", field: "lastScanTime" },
            { title: "Status", field: "status" },
            { title: "Result", field: "result" },
          ]}
          cdata={[
            {
              cloudName: "IAMGROUND",
              lastScanTime: "Sat Nov 20 2021 02:47:47",
              status: "활성화",
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            },
            {
              cloudName: "DEMO",
              lastScanTime: "Sat Nov 20 2021 02:47:46",
              status: "활성화",
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            },
          ]}
          title="Clouds"
          type="main"
        />
      </div>
    </>
  );
}

export default Home;
