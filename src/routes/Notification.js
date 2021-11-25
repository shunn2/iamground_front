import React from "react";
import TableMaterial from "../components/module/MTable";

const Notification = () => {
  const column = [
    { title: "Time", field: "time" },
    { title: "Object", field: "object" },
    { title: "arn", field: "arn" },
    { title: "Message", field: "message" },
    { title: "Marking", field: "marking" },
  ];
  return (
    <div>
      <div style={{ padding: "50px" }}>
        <TableMaterial columns={column} cdata={[]} title="현재 알림 목록" type="notification" />
      </div>
      <div style={{ padding: "50px" }}>
        <TableMaterial columns={column} cdata={[]} title="예정 알림 목록" type="notification" />
      </div>
    </div>
  );
};

export default Notification;
