import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../style/styled-compo";
import { Homeicon, ScanIcon, MonIcon, VisIcon } from "../style/Icons";

const Sidebar = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">
          <Homeicon />
          Home
        </Link>
      </li>
      <li>
        <Link to="/scan">
          <ScanIcon />
          Scanning
        </Link>
      </li>
      <li>
        <MonIcon />
        Monitoring
        <ul>
          <li>
            <Link to="/monitoring/log">monitoring-log</Link>
          </li>
          <li>
            <Link to="/monitoring/user">monitoring-user</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/visualization">
          <VisIcon />
          visualization
        </Link>
      </li>
      <li>
        <Link to="/test">
          <VisIcon />
          Test
        </Link>
      </li>
    </ul>
  </Nav>
);
export default Sidebar;
