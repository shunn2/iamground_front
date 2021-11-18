import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavList, NavListWrapper } from "../../style/styled-compo";
import { Homeicon, ScanIcon, MonIcon, VisIcon } from "../../style/Icons";
import CircleIcon from '@mui/icons-material/Circle';

const Sidebar = () => (
  <Nav>
    <div style={{
      padding:'0px 20px',
      fontWeight:'bold',
      fontSize: '20px',
      display:'flex',
      alignItems:'center',
      height:'64px'
    }}>
      <CircleIcon style={{marginRight:'4px'}}/>
    IAMGROUND
    </div>
    <NavListWrapper>
      <NavList>
        <Link to="/" style={{color:"black", display:'flex', alignItems:'center',   textDecoration:'none'}}>
          <Homeicon />
          Home
        </Link>
      </NavList>
      <NavList>
        <Link to="/scan" style={{color:"black", display:'flex', alignItems:'center',   textDecoration:'none'}}>
          <ScanIcon />
          Scanning
        </Link>
      </NavList>
      <NavList>
        <MonIcon />
        Monitoring
      </NavList>
      <NavListWrapper>
          <NavList>
            <Link to="/monitoring/log" style={{color:"black", display:'flex', alignItems:'center',   textDecoration:'none'}}>monitoring-log</Link>
          </NavList>
          <NavList>
            <Link to="/monitoring/user" style={{color:"black", display:'flex', alignItems:'center',   textDecoration:'none'}}>monitoring-user</Link>
          </NavList>
        </NavListWrapper>
      <NavList>
        <Link to="/visualization" style={{color:"black", display:'flex', alignItems:'center',   textDecoration:'none'}}>
          <VisIcon />
          visualization
        </Link>
      </NavList>
      <NavList>
        <Link to="/test" style={{color:"black", display:'flex', alignItems:'center',   textDecoration:'none'}}>
          <VisIcon />
          Test
        </Link>
      </NavList>
    </NavListWrapper>
  </Nav>
);

export default Sidebar;
