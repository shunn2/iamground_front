import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavList, NavListWrapper, SideSpan, Iamground } from "../../style/styled-compo";
import { Homeicon, ScanIcon, MonIcon, VisIcon } from "../../style/Icons";
import CircleIcon from "@mui/icons-material/Circle";
import Topbar from "./Topbar";

const Sidebar = () => (
  <Nav>
    <div
      style={{
        padding: "0px 20px",
        fontWeight: "bold",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        height: "64px",
      }}
    >
      <CircleIcon style={{ marginRight: "4px" }} />
      <Iamground>IAMGROUND</Iamground>
    </div>
    <NavListWrapper>
      <NavList>
        <Link to="/" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Homeicon />
          <SideSpan>Home</SideSpan>
        </Link>
      </NavList>
      <NavList>
        <Link to="/scan" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none" }}>
          <ScanIcon />
          <SideSpan>Scanning</SideSpan>
        </Link>
      </NavList>
      <NavList>
        <Link to="/monitoring/log" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none" }}>
          <MonIcon />
          <SideSpan>Monitoring</SideSpan>
          <Topbar what="monitoring" />
        </Link>
      </NavList>
      <NavListWrapper>
        <NavList style={{ padding: "0px" }}>
          <Link to="/monitoring/log" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "0.8em" }}>
            <SideSpan style={{ paddingLeft: "15px" }}>monitor-log</SideSpan>
          </Link>
        </NavList>
        <NavList>
          <Link to="/monitoring/user" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "0.8em" }}>
            <SideSpan style={{ paddingLeft: "15px" }}>monitor-user</SideSpan>
          </Link>
        </NavList>
      </NavListWrapper>
      <NavList>
        <Link to="/visualization" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none" }}>
          <VisIcon />
          <SideSpan>Visualization</SideSpan>
        </Link>
      </NavList>
    </NavListWrapper>
  </Nav>
);

export default Sidebar;
