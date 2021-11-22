import React from "react";
import { Link } from "react-router-dom";
import { Div, SideSpan, MonGroup, MonPower, MonUser, UserName } from "../style/styled-compo";
import { Personbutton, Groupbutton, PowerPbutton } from "../style/Icons";

const MonitoringUser = ({ group, user, poweruser }) => {
  return (
    <>
      <h1 style={{ color: "#787878",margin:'0px 0px 10px 0px', fontSize:'26px', height:'35px' }}>Monitoring</h1>
      <Div>
        <div style={{display:'flex', alignItems:'center', gap:'0px 30px'}}>
        <button style={{ fontSize: "30px", height: "70px", width: "70px", borderRadius: "10px" }}><div style={{color:"red", border:'2px solid red', borderRadius:'20px', width:'30px', height:'30px', fontSize:"14px", display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', backgroundColor:'#ffffff', position:'absolute', top:'70px', left:'80px'}}>177</div>ALL</button>
          {group.map((group, index) => (
            <SideSpan key={`group-${index}`}>
              <Link to={`/monitoring/user/log?userName=${group}`} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none', color:"black", fontWeight:'600'}}>
              <div style={{color:"red", border:'2px solid red', borderRadius:'20px', width:'30px', height:'30px', fontSize:"14px", display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', backgroundColor:'#ffffff', position:'absolute', top:'70px', left:`${index*106 + 180}px`}}>{Math.floor(Math.random()*60)}</div>
                <Groupbutton />
                <div style={{marginTop:"-10px"}}>
                  {group}
                </div>
              </Link>
            </SideSpan>
          ))}
        </div>
        
        <div style={{height:'1px', margin:'15px 0px', backgroundColor:'black'}} />

        <div>
          <div style={{fontSize:'20px', fontWeight:'bold', color: "#787878", margin: '10px 0px'}}>관리대상</div>
          <div style={{display:'flex', alignItems:'center', gap:'0px 30px', marginBottom:'50px'}}>
            {poweruser.map((poweruser, index) => (
              <SideSpan key={`poweruser-${index}`}>
                <Link to={`/monitoring/user/log?userName=${poweruser}`} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none', color:"black", fontWeight:'600'}}>
                  <div style={{color:"red", border:'2px solid red', borderRadius:'20px', width:'30px', height:'30px', fontSize:"14px", display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', backgroundColor:'#ffffff', position:'absolute', top:'222px', left:`${index*116 + 80}px`}}>{Math.floor(Math.random()*60)}</div>
                  <PowerPbutton />
                  <div style={{marginTop:"-10px"}}>
                    {poweruser}
                  </div>
                </Link>
              </SideSpan>
            ))}
          </div>
        </div>

        <div>
          <div style={{fontSize:'20px', fontWeight:'bold', color: "#787878", margin: '10px 0px'}}>일반 사용자</div>
          <div style={{display:'flex', alignItems:'center', gap:'0px 30px'}}>
            {user.map((user, index) => (
              <SideSpan key={`user-${index}`}>
                <Link to={`/monitoring/user/log?userName=${user}`} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none', color:"black", fontWeight:'600'}}>
                <div style={{color:"red", border:'2px solid red', borderRadius:'20px', width:'30px', height:'30px', fontSize:"14px", display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', backgroundColor:'#ffffff', position:'absolute', top:'397px', left:`${index*116 + 80}px`}}>{Math.floor(Math.random()*60)}</div>
                  <Personbutton />
                  <div style={{marginTop:"-10px"}}>
                    {user}
                  </div>
                </Link>
              </SideSpan>
            ))}
          </div>
        </div>
      
      </Div>
    </>
  );
};

export default MonitoringUser;

// Link to=`/monitoring/user/log?userName=${user.userName}`
