import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, Div, Spanstyle } from "../style/styled-compo";
import { Personbutton, Groupbutton, PowerPbutton } from "../style/Icons";

const MonitoringUser = ({ group, user, poweruser }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Header />
      <Div>
        <div>
          {group.map((group, index) => (
            <Spanstyle key={`group-${index}`}>
              {group}
              <Link to={`/monitoring/user/log?userName=${group}`}>
                <Groupbutton />
              </Link>
            </Spanstyle>
          ))}
        </div>
        <hr />
        <div>
          {poweruser.map((poweruser, index) => (
            <Spanstyle key={`poweruser-${index}`}>
              {poweruser}
              <Link to={`/monitoring/user/log?userName=${poweruser}`}>
                <PowerPbutton />
              </Link>
            </Spanstyle>
          ))}
        </div>
        <hr />
        <div>
          {user.map((user, index) => (
            <Spanstyle key={`user-${index}`}>
              {user}
              <Link to={`/monitoring/user/log?userName=${user}`}>
                <Personbutton />
              </Link>
            </Spanstyle>
          ))}
        </div>
      </Div>
    </>
  );
};

export default MonitoringUser;

// Link to=`/monitoring/user/log?userName=${user.userName}`
