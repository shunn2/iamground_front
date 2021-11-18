import React, { useState } from "react";
import { Div, Header } from "../style/styled-compo";
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
      <Header />
      <Div>
        <div>
          <span
            style={{
              backgroundColor: tab === 0 ? "white" : "pink",
            }}
            onClick={handleTabClick(0)}
          >
            요약
          </span>
          <span
            style={{ backgroundColor: tab === 1 ? "white" : "pink" }}
            onClick={handleTabClick(1)}
          >
            권한 분리 추천
          </span>
          <span
            style={{ backgroundColor: tab === 2 ? "white" : "pink" }}
            onClick={handleTabClick(2)}
          >
            올바른 구성 추천
          </span>
        </div>
        <div>
          {tab === 0 && <Overview />}
          {tab === 1 && <Permission />}
          {tab === 2 && <Config />}
        </div>
      </Div>
    </>
  );
}

export default ScanningResult;
