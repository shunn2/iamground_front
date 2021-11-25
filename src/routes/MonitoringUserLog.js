import React from "react";
import qs from "qs";
import { Div, UserName } from "../style/styled-compo";
import { Link, useLocation } from "react-router-dom";
import { Personbutton, Groupbutton } from "../style/Icons";
import Button from "@mui/material/Button";
import TableMaterial from "../components/module/MTable";

const MonitoringUserLog = ({ group, user, poweruser }) => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const decideWho = query.userName.substring(0, 4);

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
        {decideWho === "User" ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Personbutton />
            <div style={{ fontSize: "24px" }}>{query.userName}</div>
          </div>
        ) : (
          <div>
            <Groupbutton />
            <UserName>{query.userName}</UserName>
          </div>
        )}
        <div style={{ paddingRight: "10px" }}>
          <Link to="/visualization" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ backgroundColor: "#D6D6D6", color: "black" }}>
              {query.userName} 정보 보기
            </Button>
          </Link>
        </div>
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
            cdata={[
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
              {
                time: "2021-11-25 14:47:10",
                user: "User5",
                resource: "emptyUser",
                activity: "AttachPolicy",
                result: "Success",
                reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
                ip: "112.34.212.120",
              },
            ]}
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
