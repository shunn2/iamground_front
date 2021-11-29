import React from "react";
import { Div } from "../style/styled-compo";
import { Link } from "react-router-dom";
import Mypet from "./mypet.jpg";

function CloudRegister() {
  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Cloud Register</h1>
      <Div>
        <div style={{ left: "0", width: "30%", float: "left" }}>
          <img src={Mypet} width="500" height="250" />
        </div>
        <div style={{ right: "0", width: "70%", float: "right" }}>
          <div style={{ padding: "30px" }}>
            <h2 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "20px", height: "35px" }}>Cloud Name</h2>
            <input type="text" name="name" placeholder="Enter Cloud Name..." size="30"></input>
          </div>
          <div style={{ padding: "30px" }}>
            <h2 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "20px", height: "35px" }}>Access Key</h2>
            <input type="text" name="access key" placeholder="Enter Access Key..." size="30"></input>
          </div>
          <div style={{ padding: "30px" }}>
            <h2 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "20px", height: "35px" }}>Secret Key</h2>
            <input type="password" name="secret key" placeholder="Enter Secret Key..." size="30"></input>
          </div>
          <div style={{ float: "right", paddingRight: "100px" }}>
            <Link to="/cloud">
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  fontSize: "21px",
                  backgroundColor: "#D6D6D6",
                  borderColor: "#EFEFEF",
                  borderRadius: "5px",
                }}
              >
                Start &gt;
              </button>
            </Link>
          </div>
        </div>
      </Div>
    </>
  );
}

export default CloudRegister;
