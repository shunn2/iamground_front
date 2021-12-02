import React, { useEffect, useState } from "react";
import qs from "qs";
import { Div } from "../style/styled-compo";
import { Link, useLocation } from "react-router-dom";
import { Personbutton, Groupbutton } from "../style/Icons";
import Button from "@mui/material/Button";
import TableMaterial from "../../module/TableMaterial";
import axios from "axios";

const MonitoringUserLog = () => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const decideWho = () => {
    if (query.iam_user_arn) return query.iam_user_arn;
    else return query.bookmark_id;
  };

  const [logs, setLogs] = useState([]);
  const fetchLogs = async () => {
    const response =
      decideWho().substring(0, 4) === "User"
        ? await axios.get(`http://54.180.115.206:8000/mock/monitoring/log?iam_user_arn=${decideWho()}`)
        : await axios.get(`http://54.180.115.206:8000/mock/monitoring/log?bookmark_id=${decideWho()}`);
    setLogs(response.data.resourceLogs);
    console.log("response", response);
    console.log("logs", logs);
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <>
      <h1
        style={{
          color: "#787878",
          margin: "0px 0px 10px 0px",
          fontSize: "26px",
          height: "35px",
        }}
      >
        Monitoring
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {decideWho().substring(0, 4) === "User" ? (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Personbutton />
              <div style={{ fontSize: "24px", fontWeight: "bolder" }}>{query.iam_user_arn}</div>
            </div>
            <div style={{ paddingRight: "10px" }}>
              <Link to="/visualization" style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{ backgroundColor: "#D6D6D6", color: "black" }}>
                  {query.iam_user_arn} 정보 보기
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Groupbutton />
              <div style={{ fontSize: "24px", fontWeight: "bolder" }}>{query.bookmark_id}</div>
            </div>
            <div style={{ paddingRight: "10px" }}>
              <Link to="/visualization" style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{ backgroundColor: "#D6D6D6", color: "black" }}>
                  {query.bookmark_id} 정보 보기
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
      <Div>
        <div style={{ width: "calc(100%-30px)" }}>
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
              return {
                time: v.creation,
                user: v.identityName,
                resource: v.resourseName,
                activity: v.apiName,
                result: v.result === 1 ? "Success" : "Fail",
                reason: v.reasonCategory,
                ip: v.accessIp,
                caution: v.reasonCategory ? true : false,
              };
            })}
            title="User Log"
            type="monitoring"
          />
        </div>
      </Div>
    </>
  );
};

export default MonitoringUserLog;

//location으로
