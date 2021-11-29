import React from "react";
import TableMaterial from "../module/TableMaterial";

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
      cdata={[]}
      title="Test"
      type="test"
    />
  );
}

export default Test;
