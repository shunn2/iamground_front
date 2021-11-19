import React from "react";
import { Header } from "../../style/styled-compo";
import {Menu, AccountCircle, Settings, Notifications} from '@mui/icons-material';


function Topbar({ what }) {
  return <Header>
    <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
      <div style={{height:"50px", display:'flex', alignItems:'center',width:"50px", justifyContent:'center', cursor:'pointer'}}>
        <Menu style={{width:'36px', height:'36px', color:'#d6d6d6'}}/>
      </div>

      <div style={{height:"50px", display:'flex', alignItems:'center',width:"135px"}}>
        <div style={{height:"50px", display:'flex', alignItems:'center',width:"40px", justifyContent:'center', cursor:'pointer'}}>
          <Notifications style={{width:'30px', height:'30px', color:'#d6d6d6'}}/>
        </div>
        <div style={{height:"50px", display:'flex', alignItems:'center',width:"40px", justifyContent:'center', cursor:'pointer'}}>
          <Settings style={{width:'30px', height:'30px', color:'#d6d6d6'}}/>
        </div>
        <div style={{height:"50px", display:'flex', alignItems:'center',width:"40px", justifyContent:'center', cursor:'pointer'}}>
          <AccountCircle style={{width:'30px', height:'30px', color:'#d6d6d6'}}/>
        </div>
      </div>
    </div>
  </Header>;
}

export default Topbar;
