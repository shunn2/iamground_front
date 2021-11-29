import React from "react";
import { Link } from "react-router-dom";
import TableMaterial from "../../module/TableMaterial";
import { Div } from "../style/styled-compo";

function Cloud() {
  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Cloud List</h1>
      <Div>
        <Link to="/cloud/register" style={{ float: "right", paddingRight: "50px" }}>
          <button
            style={{
              height: "30px",
              width: "100px",
              backgroundColor: "#D6D6D6",
              borderColor: "#EFEFEF",
              borderRadius: "5px",
              fontSize: "20px",
            }}
          >
            Register
          </button>
        </Link>
        <div style={{ width: "calc(100%-30px)", padding: "40px" }}>
          <TableMaterial
            columns={[
              { title: "Cloud Name", field: "cloudName" },
              { title: "Last Scan", field: "lastScanTime" },
              { title: "Status", field: "status" },
            ]}
            cdata={[
              { cloudName: "IAMGROUND", lastScanTime: "Sat Nov 20 2021 02:47:47", status: "활성화" },
              { cloudName: "DEMO", lastScanTime: "Sat Nov 20 2021 02:47:46", status: "활성화" },
            ]}
            title="Clouds"
            type="cloud"
          />
        </div>
      </Div>
    </>
  );
}

export default Cloud;
