import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Div } from "../style/styled-compo";
import TableMaterial from "../../module/TableMaterial";

const labelStyle = {
  position: "relative",
  top: "10px",
  left: "1000px",
};

function Monitoring() {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const data = [
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: true,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: false,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: false,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: true,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: false,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: true,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: true,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: false,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: true,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: true,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: false,
    },
    {
      time: "2021-11-25 14:47:10",
      user: "User5",
      resource: "emptyUser",
      activity: "AttachPolicy",
      result: "Success",
      reason: "IAM GROUP에게 연결된 서비스, 권한, 리소스 중 90일 이내 사용하지 않은 것이 존재합니다.",
      ip: "112.34.212.120",
      cau: false,
    },
  ];
  const ReturnData = (data) => {
    let cdata = [];
    if (checked) {
      for (let log of data) {
        if (log.cau === true) cdata.push(log);
      }
      return cdata;
    } else {
      return data;
    }
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
          {/* {checked && ( */}
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
            cdata={ReturnData(data)}
            title="Monitoring Log"
            type="monitoring"
          />
          {/* )} */}
        </div>
      </Div>
    </>
  );
}

export default Monitoring;
