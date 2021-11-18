import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Scanning from "../routes/Scanning";
import Monitoring from "../routes/Monitoring";
import Visualization from "../routes/Visualization";
import Sidebar from "./Sidebar";
import Test from "../routes/Test";
import ScanningSummary from "../routes/ScanningSummary";

const AppRouter = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/scan" element={<Scanning />} />
          <Route path="/scan/report/summary" element={<ScanningSummary />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/test" element={<Test />} />
        </>
      </Routes>
    </Router>
  );
};
export default AppRouter;
