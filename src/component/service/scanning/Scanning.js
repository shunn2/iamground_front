import React, { useEffect, useState } from "react";
import { Tdiv } from "../style/styled-compo";
import { ResponsiveLine } from "@nivo/line";
import { Link } from "react-router-dom";
import TableMaterial from "../../module/TableMaterial";
import axios from "axios";
import moment from "moment";

function Scanning() {
  const [accounts, setAccounts] = useState([]);
  const fetchAccounts = async () => {
    const responseAccount = await axios.get("http://54.180.115.206:8000/api/scan");
    setAccounts(responseAccount.data.cloudList);
    console.log("responseAccount", responseAccount);
  };
  useEffect(() => {
    fetchAccounts();
  }, []);

  const [recommandations, setRecommandations] = useState([]);
  const fetchRecommandations = async () => {
    const responseRecommand = await axios.get("http://54.180.115.206:8000/api/scan/summary");
    setRecommandations(responseRecommand.data.summaryList);
    console.log("responseRecommand", responseRecommand);
  };
  useEffect(() => {
    fetchRecommandations();
  }, []);

  const StartScan = (cloudId) => {
    axios
      .post("http://54.180.115.206:8000/api/scan", {
        cloudId: cloudId,
      })
      .then(function (response) {
        console.log("Scan Request Response", response);
      });
  };

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

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Scanning</h1>
      <div style={{ height: "45%", width: "100%", backgroundColor: "white", border: "1px solid #D6D6D6" }}>
        <MyResponsiveLine
          gdata={recommandations.map((v, i) => {
            return {
              id: v.name,
              data: v.recommandCountList.map((data, index) => {
                return {
                  x: data.date,
                  y: data.value,
                };
              }),
            };
          })}
        />
      </div>
      <div></div>
      <Tdiv>
        <br />
        <TableMaterial
          columns={[
            { title: "Clouds", field: "clouds" },
            { title: "Last Scanned", field: "last_scanned" },
            { title: "Per", field: "per", align: "center" },
            { title: "Config", field: "config", align: "center" },
            { title: "Scan", field: "scan", align: "center" },
            { title: "Result", field: "result", align: "center" },
          ]}
          cdata={accounts.map((v, i) => {
            return {
              clouds: v.name,
              last_scanned: moment(v.lastScan).format("YYYY/MM/DD-hh:mm"),
              per: v.permissionCount,
              config: v.configCount,
              scan: <button onClick={() => StartScan(v.cloudId)}>스캔 하기</button>,
              result: (
                <Link to={`/scan/report/summary?report_id=${v.reportList[v.reportList.length - 1]}`}>
                  <button>결과 보기</button>
                </Link>
              ),
            };
          })}
          title="Root Accounts"
          type="scanningsum"
        />
      </Tdiv>
    </>
  );
}

export default Scanning;
