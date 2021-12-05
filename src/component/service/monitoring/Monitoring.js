import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { Div } from "../style/styled-compo";
import TableMaterial from "../../module/TableMaterial";
import axios from "axios";
import moment from "moment";

function Monitoring() {
  const [logs, setLogs] = useState([]);
  const fetchLogs = async () => {
    const response = await axios.get("http://54.180.115.206:8000/mock/monitoring/iam");
    setLogs(response.data.iamLogs);
    console.log("response", response);
    console.log("logs", logs);
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <h1
        style={{
          color: "#787878",
          margin: "0px 0px 10px 0px",
          fontSize: "26px",
        }}
      >
        Monitoring
      </h1>
      <Div>
        <form>
          <div style={{ float: "right", paddingRight: "50px" }}>
            <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} color="primary" />
            <strong>위험한 변경사항만</strong>
          </div>
        </form>
        <div style={{ width: "calc(100%-30px)", paddingTop: "33px" }}>
          <TableMaterial
            columns={[
              { title: "Time", field: "time" },
              { title: "User", field: "user" },
              { title: "Resource", field: "resource" },
              { title: "Activity", field: "activity" },
              { title: "Result", field: "result" },
              { title: "Reason", field: "reason" },
              { title: "Ip", field: "ip" },
            ]}
            cdata={logs.map((v, i) => {
              if (checked) {
                if (v.reasonCategory)
                  return {
                    time: moment(v.creation).format("YYYY/MM/DD-hh:mm"),
                    user: v.identityName,
                    resource: v.resourseName,
                    activity: v.apiName,
                    result: v.result === 1 ? "Success" : "Fail",
                    reason: v.reasonCategory,
                    ip: v.accessIp,
                    caution: v.reasonCategory ? true : false,
                  };
              } else
                return {
                  time: moment(v.creation).format("YYYY/MM/DD-hh:mm"),
                  user: v.identityName,
                  resource: v.resourseName,
                  activity: v.apiName,
                  result: v.result === 1 ? "Success" : "Fail",
                  reason: v.reasonCategory,
                  ip: v.accessIp,
                  caution: v.reasonCategory ? true : false,
                };
            })}
            title="Monitoring Log"
            type="monitoring"
          />
        </div>
      </Div>
    </>
  );
}

export default Monitoring;
