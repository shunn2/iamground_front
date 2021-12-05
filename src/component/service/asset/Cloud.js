import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableMaterial from "../../module/TableMaterial";
import { Div } from "../style/styled-compo";
import axios from "axios";
import moment from "moment";

function Cloud() {
  const [clouds, setClouds] = useState([]);
  const fetchClouds = async () => {
    const responseCloud = await axios.get("http://54.180.115.206:8000/mock/cloud");
    setClouds(responseCloud.data.cloudList);
    console.log("responseCloud", responseCloud);
  };
  useEffect(() => {
    fetchClouds();
  }, []);
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
            cdata={clouds.map((v, i) => {
              return {
                cloudName: v.nickName,
                lastScanTime: moment(v.lastScan).format("YYYY/MM/DD-hh:mm"),
                status: v.status === 1 ? "활성화" : "비활성화",
              };
            })}
            title="Clouds"
            type="cloud"
          />
        </div>
      </Div>
    </>
  );
}

export default Cloud;
