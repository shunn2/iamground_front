import React from "react";
import { Link } from "react-router-dom";
import { Div, SideSpan } from "../style/styled-compo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import ModalGroup from "../../module/modal/ModalGroup";
import { useState } from "react";
import ModalGroup from "../../module/modal/ModalGroup";

const MonitoringUser = ({ group, user, poweruser }) => {
  const [modalOpen, setmodalOpen] = useState(false);

  const openModal = () => {
    setmodalOpen(true);
  };

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Monitoring</h1>
      <Div>
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#787878", margin: "10px 0px" }}>Groups</div>
        <div style={{ display: "flex", fontWeight: "bold", alignItems: "center", justifyContent: "space-evenly", padding: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "black", fontWeight: "600" }}>
            <button style={{ border: "none" }}>
              <div
                style={{
                  color: "white",
                  border: "2px solid red",
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  backgroundColor: "red",
                  position: "relative",
                  top: "0px",
                  left: "160px",
                }}
              >
                177
              </div>
              <GroupsIcon style={{ marginTop: "-11px", fontSize: "150px", color: "#3B434D" }} />
            </button>
            <div style={{ marginTop: "-30px" }}>All</div>
          </div>

          {/* **************************Groups************************** */}
          {group.map((group, index) => (
            <SideSpan key={`group-${index}`}>
              <Link to={`/monitoring/user/log?userName=${group}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "black", fontWeight: "600" }}>
                <div
                  style={{
                    color: "white",
                    border: "2px solid red",
                    borderRadius: "20px",
                    width: "30px",
                    height: "30px",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    backgroundColor: "red",
                    position: "relative",
                    top: "22x",
                    left: "60px",
                  }}
                >
                  {Math.floor(Math.random() * 60)}
                </div>
                <PeopleAltIcon style={{ fontSize: "120px", color: "#3B434D" }} />
                <div style={{ marginTop: "-10px" }}>{group}</div>
              </Link>
            </SideSpan>
          ))}
          <div style={{ marginLeft: "50px", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "black", fontWeight: "600" }}>
            <button style={{ border: "none" }} onClick={openModal}>
              <GroupAddIcon style={{ marginTop: "20px", fontSize: "150px", color: "#3B434D" }} />
            </button>
            <div style={{ marginTop: "-30px" }}>Add Group</div>
          </div>
        </div>

        <div style={{ height: "2px", margin: "15px 0px", backgroundColor: "#3B434D" }} />

        {/* **************************Power Users************************** */}
        <div>
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#787878", margin: "10px 0px" }}>Power Users</div>
          <div style={{ display: "flex", alignItems: "center", padding: "40px", justifyContent: "space-evenly" }}>
            {poweruser.map((poweruser, index) => (
              <SideSpan key={`poweruser-${index}`}>
                <Link
                  to={`/monitoring/user/log?userName=${poweruser}`}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "black", fontWeight: "600" }}
                >
                  <div
                    style={{
                      color: "white",
                      border: "2px solid red",
                      borderRadius: "20px",
                      width: "30px",
                      height: "30px",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      backgroundColor: "red",
                      position: "relative",
                      top: "20px",
                      left: "60px",
                    }}
                  >
                    {Math.floor(Math.random() * 60)}
                  </div>
                  <AccountCircleIcon style={{ fontSize: "120px", color: "#F32668" }} />
                  <div style={{ marginTop: "-10px" }}>{poweruser}</div>
                </Link>
              </SideSpan>
            ))}
          </div>
        </div>
        {/* **************************Users************************** */}
        <div>
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#787878", margin: "10px 0px" }}>Users</div>
          <div style={{ display: "flex", alignItems: "center", padding: "40px", justifyContent: "space-evenly" }}>
            {user.map((user, index) => (
              <SideSpan key={`user-${index}`}>
                <Link
                  to={`/monitoring/user/log?userName=${user}`}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "black", fontWeight: "600" }}
                >
                  <div
                    style={{
                      color: "white",
                      border: "2px solid red",
                      borderRadius: "20px",
                      width: "30px",
                      height: "30px",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      backgroundColor: "red",
                      position: "relative",
                      top: "20px",
                      left: "60px",
                    }}
                  >
                    {Math.floor(Math.random() * 60)}
                  </div>
                  <AccountCircleIcon style={{ fontSize: "120px", color: "#3B434D" }} />
                  <div style={{ marginTop: "-10px" }}>{user}</div>
                </Link>
              </SideSpan>
            ))}
          </div>
        </div>
      </Div>
      {modalOpen && <ModalGroup type="addgroup" modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}
    </>
  );
};

export default MonitoringUser;

// Link to=`/monitoring/user/log?userName=${user.userName}`
