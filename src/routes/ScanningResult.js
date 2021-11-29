import React, { useState } from "react";
import { Div } from "../style/styled-compo";
import ScanningConfig from "./ScanningConfig";
import ScanningPer from "./ScanningPer";
import ScanningSummary from "./ScanningSummary";

function ScanningResult() {
  const [tab, setTab] = useState(0);

  const handleTabClick = (tabNumber) => () => {
    setTab(tabNumber);
  };

  const Overview = () => <ScanningSummary />;

  const Permission = () => <ScanningPer />;

  const Config = () => <ScanningConfig />;

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Scanning</h1>
      <Div>
        <div style={{ height: "25px", display: "flex" }}>
          <span
            style={{
              backgroundColor: tab === 0 ? "#efefef" : "#e0e0e0",
              border: "1px solid black",
              borderRight: "none",
              borderBottom: tab === 0 ? "none" : "1px solid black",
              width: "150px",
              textAlign: "center",
              fontWeight: tab === 0 ? "bold" : "normal",
            }}
            onClick={handleTabClick(0)}
          >
            요약
          </span>
          <span
            style={{
              backgroundColor: tab === 1 ? "#efefef" : "#e0e0e0",
              border: "1px solid black",
              borderRight: "none",
              borderBottom: tab === 1 ? "none" : "1px solid black",
              width: "150px",
              textAlign: "center",
              fontWeight: tab === 1 ? "bold" : "normal",
            }}
            onClick={handleTabClick(1)}
          >
            권한 분리 추천
          </span>
          <span
            style={{
              backgroundColor: tab === 2 ? "#efefef" : "#e0e0e0",
              border: "1px solid black",
              borderBottom: tab === 2 ? "none" : "1px solid black",
              width: "150px",
              textAlign: "center",
              fontWeight: tab === 2 ? "bold" : "normal",
            }}
            onClick={handleTabClick(2)}
          >
            올바른 구성 추천
          </span>
          <span
            style={{
              backgroundColor: "#efefef",
              borderBottom: "1px solid black",
              flex: 1,
            }}
          ></span>
        </div>
        <div style={{ width: "100%", height: "calc(100% - 30px)" }}>
          {tab === 0 && <Overview />}
          {tab === 1 && <Permission />}
          {tab === 2 && <Config />}
        </div>
      </Div>
    </>
  );
}

export default ScanningResult;
