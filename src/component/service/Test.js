import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import ScanningConfig from "./scanning/ScanningConfig";
import ScanningPer from "./scanning/ScanningPer";
import ScanningSummary from "./scanning/ScanningSummary";
import { Div, Div3 } from "./style/styled-compo";

function a11yProps(index) {
  return {
    id: `simple-value-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Test() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Overview = () => <ScanningSummary />;

  const Permission = () => <ScanningPer />;

  const Config = () => <ScanningConfig />;

  return (
    <Div>
      <div sx={{ borderBottom: 1, borderColor: "divider", height: "100%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="요약" {...a11yProps(0)} style={{ width: "180px", fontWeight: "bolder", fontSize: "18px" }} />
          <Tab label="권한 분리 추천" {...a11yProps(1)} style={{ width: "180px", fontWeight: "bolder", fontSize: "18px" }} />
          <Tab label="올바른 구성 추천" {...a11yProps(2)} style={{ width: "180px", fontWeight: "bolder", fontSize: "18px" }} />
        </Tabs>
      </div>
      {value === 0 && <Overview />}
      {value === 1 && <Permission />}
      {value === 2 && <Config />}
    </Div>
  );
}

export default Test;
