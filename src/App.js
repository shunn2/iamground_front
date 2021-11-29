import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import Monitoring from "./component/service/monitoring/Monitoring";
import MonitoringUser from "./component/service/monitoring/MonitoringUser";
import MonitoringUserLog from "./component/service/monitoring/MonitoringUserLog";
import Scanning from "./component/service/scanning/Scanning";
import ScanningResult from "./component/service/scanning/ScanningResult";
import Visualization from "./component/service/visualization/Visualization";
import Test from "./component/service/Test";
import Setting from "./component/service/setting/Setting";
import Cloud from "./component/service/asset/Cloud";
import CloudRegister from "./component/service/asset/CloudRegister";
import Organization from "./component/service/asset/Organization";
import Home from "./component/service/dashboard/Home";
import Notification from "./component/service/notification/Notification";

function App() {
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
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/cloud/register" element={<CloudRegister />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
