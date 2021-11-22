import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Scanning from "../routes/Scanning";
import Monitoring from "../routes/Monitoring";
import MonitoringUser from "../routes/MonitoringUser";
import MonitoringUserLog from "../routes/MonitoringUserLog";
import Visualization from "../routes/Visualization";
import Layout from "./layout";
import Setting from "../routes/Setting";
import Test from "../routes/Test";
import ScanningResult from "../routes/ScanningResult";

const AppRouter = () => {
  const user = ["User1", "User2", "User4", "User5", "User7", "User10"];
  const poweruser = ["User3", "User6", "User8", "User9"];
  const group = ["Group1", "Group2", "Group3", "Group4"];
  const accesskey = ["accesskey1", "accesskey2", "accesskey3", "accesskey4", "accesskey5"];

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/monitoring/log" element={<Monitoring />} />
          <Route path="/monitoring/user" element={<MonitoringUser user={user} group={group} poweruser={poweruser} />} />
          <Route path="/monitoring/user/log" element={<MonitoringUserLog user={user} group={group} poweruser={poweruser} />} />
          <Route path="/scan" element={<Scanning />} />
          <Route path="/scan/report/summary" element={<ScanningResult />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/visualization" element={<Visualization user={user} group={group} poweruser={poweruser} access={accesskey} />} />
          <Route path="/test" element={<Test />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default AppRouter;
