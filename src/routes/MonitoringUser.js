import React from "react";
import { Link } from "react-router-dom";
import { Div, SideSpan, MonGroup, MonPower, MonUser, UserName } from "../style/styled-compo";
import { Personbutton, Groupbutton, PowerPbutton } from "../style/Icons";

const MonitoringUser = ({ group, user, poweruser }) => {
  return (
    <>
      <h1 style={{ position: "fixed", top: "5px", color: "#18b7be" }}>Monitoring</h1>
      <Div>
        <MonGroup>
          <button style={{ fontSize: "40px", height: "100px", width: "100px", borderRadius: "10px" }}>ALL</button>
          {group.map((group, index) => (
            <SideSpan key={`group-${index}`}>
              <Link to={`/monitoring/user/log?userName=${group}`}>
                <Groupbutton />
                <UserName>{group}</UserName>
              </Link>
            </SideSpan>
          ))}
        </MonGroup>
        <hr />
        <MonPower>
          <span style={{ position: "fixed", left: "270px", top: "300px", border: "1px solid black" }}>관리대상</span>
          {poweruser.map((poweruser, index) => (
            <SideSpan key={`poweruser-${index}`}>
              <Link to={`/monitoring/user/log?userName=${poweruser}`}>
                <PowerPbutton />
                <UserName>{poweruser}</UserName>
              </Link>
            </SideSpan>
          ))}
        </MonPower>
        <hr />
        <MonUser>
          <span style={{ position: "fixed", left: "260px", top: "500px", border: "1px solid black" }}>일반 사용자</span>
          {user.map((user, index) => (
            <SideSpan key={`user-${index}`}>
              <Link to={`/monitoring/user/log?userName=${user}`}>
                <Personbutton />
                <UserName>{user}</UserName>
              </Link>
            </SideSpan>
          ))}
        </MonUser>
      </Div>
    </>
  );
};

export default MonitoringUser;

// Link to=`/monitoring/user/log?userName=${user.userName}`
