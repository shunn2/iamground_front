import React, { useState } from "react";
import { Div } from "../style/styled-compo";
import ScanningConfig from "./ScanningConfig";
import ScanningPer from "./ScanningPer";
import ScanningSummary from "./ScanningSummary";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation } from "react-router-dom";
import qs from "qs";

function a11yProps(index) {
  return {
    id: `simple-value-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ScanningResult() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const report_id = query.report_id;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Overview = () => <ScanningSummary report_id={report_id} />;

  const Permission = () => <ScanningPer report_id={report_id} />;

  const Config = () => <ScanningConfig report_id={report_id} />;

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

export default ScanningResult;
