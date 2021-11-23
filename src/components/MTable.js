import React, { useState, forwardRef } from "react";
import MaterialTable from "material-table";
import Modal from "./Modal";
import GetAppIcon from "@mui/icons-material/GetApp";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const TableMaterial = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const openModal = () => {
    setmodalOpen(true);
  };
  const [tableData, setTableData] = useState([
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
  ]);
  //field 뒤에 있는 것들은 그냥 연습 time 뒤에 defaultsort는 있는 게 좋을 듯
  const columns = [
    { title: "Time", field: "time", defaultSort: "asc" },
    { title: "User", field: "user", lookup: { user1: "User1" }, cellStyle: { color: "blue" } },
    { title: "Service", field: "service", align: "right", filterPlaceholder: "Filter by service" },
    { title: "Resource", field: "resource", align: "center" },
    { title: "Activity", field: "activity" },
    { title: "Result", field: "result", sorting: false, render: (rowData) => <div style={{ background: rowData.result === "success" ? "White" : "Grey" }}>{rowData.result}</div> },
    { title: "Reason", field: "reason", emptyValue: () => <strong>NULL</strong> },
  ];
  return (
    <div className="App">
      <MaterialTable
        columns={columns}
        data={tableData}
        title="Monitoring"
        icons={tableIcons}
        editable={{
          //newRow에 추가된 정보 다 들어가 있음
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[{ icon: () => <GetAppIcon />, tooltip: "Click", onClick: (e, data) => console.log(data) }]}
        onSelectionChange={(selectedRow) => console.log(selectedRow)}
        onRowClick={openModal}
        options={{
          sorting: true,
          search: true,
          filtering: true,
          paging: true,
          pageSize: 10,
          maxBodyHeight: "450px",
          pageSizeOptions: [5, 10, 15, 20],
          paginationType: "stepped",
          showFirstLastPageButtons: true,
          paginationPosition: "bottom",
          exportButton: true,
          exportAllData: true,
          addRowPosition: "last",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: true,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({ color: "primary" }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) => (data.result === "fail" ? { background: "Pink" } : null),
          headerStyle: { background: "#d6d6d6", fontStyle: "italic" },
        }}
      />
      {modalOpen && <Modal type="monitoring" modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}
    </div>
  );
};

export default TableMaterial;
