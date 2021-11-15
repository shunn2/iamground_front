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
        <Link to="/scanning">
          <ScanIcon />
          Scanning
        </Link>
      </li>
      <li>
        <Link to="/monitoring">
          <MonIcon />
          monitoring
        </Link>
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
