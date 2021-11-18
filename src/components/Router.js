import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Scanning from "../routes/Scanning";
import Monitoring from "../routes/Monitoring";
import MonitoringUser from "../routes/MonitoringUser";
import MonitoringUserLog from "../routes/MonitoringUserLog";
import Visualization from "../routes/Visualization";
import Layout from "./layout";
import Test from "../routes/Test";
import ScanningSummary from "../routes/ScanningSummary";
import ScanningResult from "../routes/ScanningResult";

const AppRouter = () => {
  const user = ["user1", "user2", "user3", "user4", "user5", "user6"];
  const poweruser = ["p-user1", "p-user2", "p-user3", "p-user4"];
  const group = ["group1", "group2", "group3", "group4"];

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/monitoring/log" element={<Monitoring />} />
          <Route
            path="/monitoring/user"
            element={
              <MonitoringUser user={user} group={group} poweruser={poweruser} />
            }
          />
          <Route
            path="/monitoring/user/log"
            element={
              <MonitoringUserLog
                user={user}
                group={group}
                poweruser={poweruser}
              />
            }
          />
          <Route path="/scan" element={<Scanning />} />
          <Route path="/scan/report/summary" element={<ScanningResult />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default AppRouter;
