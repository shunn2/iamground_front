import React from "react";
import TableMaterial from "../components/MTable";

function Test() {
  return (
    <TableMaterial
      columns={[
        { title: "Time", field: "time", defaultSort: "asc" },
        { title: "User", field: "user", lookup: { user1: "User1" }, cellStyle: { color: "blue" } },
        { title: "Service", field: "service", align: "right", filterPlaceholder: "Filter by service" },
        { title: "Resource", field: "resource", align: "center" },
        { title: "Activity", field: "activity" },
        { title: "Result", field: "result", sorting: false, render: (rowData) => <div style={{ background: rowData.result === "success" ? "White" : "Grey" }}>{rowData.result}</div> },
        { title: "Reason", field: "reason", emptyValue: () => <strong>NULL</strong> },
      ]}
      cdata={[
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/23", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/22", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: "-" },
        { time: "2021 11/22", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: null },
        { time: "2021 11/26", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: null },
        { time: "2021 11/28", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: "-" },
        { time: "2021 11/29", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/22", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: null },
        { time: "2021 11/26", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: null },
        { time: "2021 11/28", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "fail", reason: "-" },
        { time: "2021 11/29", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
        { time: "2021 11/24", user: "user1", service: "IAM", resource: "Policy1", activity: "CreatePolicy", result: "success", reason: "-" },
      ]}
      title="Test"
      type="scanning2"
    />
  );
}

export default Test;
