import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Nav, NavList, NavListWrapper, SideSpan, Iamground } from "../../style/styled-compo";
import { Homeicon, ScanIcon, MonIcon, VisIcon } from "../../style/Icons";
import {Circle, Description, Person, Dashboard, Cloud, Settings } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  
  return (  <Nav>
    <div
      style={{
        padding: "0px 20px",
        fontWeight: "bold",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        height: "50px",
        color: "#EDEDED",
        justifyContent:'center',
        marginRight:'10px'
      }}
    >
      <Circle style={{ marginRight: "4px" }} />
      <Iamground>IAMGROUND</Iamground>
    </div>
    <NavListWrapper>
      <NavList>
        <Link to="/" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
          <Dashboard style={{  marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }}/>
          <SideSpan>Dashboard</SideSpan>
        </Link>
      </NavList>
      <NavList>
        <Link to="/scan" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
          <ScanIcon />
          <SideSpan>Scanning</SideSpan>
        </Link>
      </NavList>
      <NavList onClick={() => {setOpen(!open)}}>
          <MonIcon />
          <SideSpan>Monitoring</SideSpan>
      </NavList>
      <NavListWrapper style={{height: open? "88px" : '0px',   margin: "0px -20px", padding:'0px 10px'}}>
        <NavList style={{margin: "0px -20px", padding:'10px 50px', backgroundColor:'#2C3239'}}>
          <Link to="/monitoring/log" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
            <Description style={{  fontSize: "21px", width:'24px', color: "#d6d6d6" }}/>
            <SideSpan style={{ paddingLeft: "5px" }}>Log</SideSpan>
          </Link>
        </NavList>
        <NavList style={{margin: "0px -20px", padding:'10px 50px', backgroundColor:'#2C3239'}}>
          <Link to="/monitoring/user" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
            <Person style={{ fontSize: "24px", color: "#d6d6d6" }}/>
            <SideSpan style={{ paddingLeft: "5px" }}>User</SideSpan>
          </Link>
        </NavList>
      </NavListWrapper>
      <NavList>
        <Link to="/visualization" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
          <VisIcon />
          <SideSpan>Visualization</SideSpan>
        </Link>
      </NavList>
      <NavList>
        <Link to="/cloud" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
          <Cloud style={{  marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }}/>
          <SideSpan>Asset</SideSpan>
        </Link>
      </NavList>
      <NavList style={{borderBottom:'1px solid #5e6c70'}}>
        <Link to="/setting" style={{ color: "black", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "18px" }}>
          <Settings style={{  marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }}/>
          <SideSpan>Setting</SideSpan>
        </Link>
      </NavList>
    </NavListWrapper>
  </Nav>
)};

export default Sidebar;
