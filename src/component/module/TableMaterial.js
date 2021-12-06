import React, { useState, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
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
import ModalInfo from "../module/modal/ModalInfo";
import ModalConfig from "../module/modal/ModalConfig";
import ModalPer from "../module/modal/ModalPer";

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

const TableMaterial = ({ columns, cdata, title, type, Id }) => {
  const [modalOpen, setmodalOpen] = useState(false);

  const openModal = (event, data, index) => {
    console.log(data.logId);
    if (type === "monitoring" || type === "scanningper" || type === "scanningconfig") setmodalOpen(true);
    else setmodalOpen(false);
  };
  const [tableData, setTableData] = useState();
  useEffect(() => {
    setTableData(cdata);
  });

  return (
    <div>
      {type === "cloud" || type === "organization" ? (
        <MaterialTable
          columns={columns}
          data={tableData}
          title={title}
          icons={tableIcons}
          editable={{
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
          // actions={[{ icon: () => <GetAppIcon />, tooltip: "Click", onClick: (e, data) => console.log(data) }]}
          onSelectionChange={(selectedRow) => console.log(selectedRow)}
          onRowClick={openModal}
          // {data[selected]}
          options={{
            sorting: true,
            search: true,
            filtering: true,
            paging: true,
            pageSize: 10,
            pageSizeOptions: [5, 10, 15, 20],
            paginationType: "stepped",
            showFirstLastPageButtons: true,
            paginationPosition: "bottom",
            exportAllData: true,
            addRowPosition: "last",
            actionsColumnIndex: -1,
            showSelectAllCheckbox: true,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({ color: "primary" }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) => (data.result === "fail" ? { background: "Pink" } : null),
            headerStyle: { background: "#d6d6d6", fontStyle: "italic" },
            maxBodyHeight: "650px",
            exportButton: type === "organization" ? true : false,
            selection: true,
          }}
        />
      ) : (
        <MaterialTable
          columns={columns}
          data={tableData}
          title={title}
          icons={tableIcons}
          // actions={[{ icon: () => <GetAppIcon />, tooltip: "Click", onClick: (e, data) => console.log(data) }]}
          onSelectionChange={(selectedRow) => console.log(selectedRow)}
          onRowClick={openModal}
          options={{
            sorting: true,
            search: true,
            paging: true,
            pageSize: 10,
            pageSizeOptions: [5, 10, 15, 20],
            paginationType: "stepped",
            showFirstLastPageButtons: true,
            paginationPosition: "bottom",
            exportAllData: true,
            addRowPosition: "last",
            actionsColumnIndex: -1,
            showSelectAllCheckbox: true,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({ color: "primary" }),
            columnsButton: true,
            rowStyle: (data, index) => (data.caution === true ? { background: "Pink" } : null),
            headerStyle: { background: "#d6d6d6", fontSize: "16px", fontWeight: "bold" },
            maxBodyHeight: type === "scanningsum" ? "250px" : type === "main" ? "150px" : "650px",
            exportButton: type === "monitoring" || type === "scanningper" || type === "scanningconfig" || type === "notification" ? true : false,
            selection: false,
            filtering: type === "monitoring" || type === "scanningper" || type === "scanningconfig" || type === "notification" ? true : false,
            grouping: type === "monitoring" || type === "scanningper" || type === "scanningconfig" || type === "notification" ? true : false,
          }}
        />
      )}
      {modalOpen && type === "scanningper" && <ModalPer type={type} modalOpen={modalOpen} setmodalOpen={setmodalOpen} Id={Id} />}
      {modalOpen && type === "scanningconfig" && <ModalConfig type={type} modalOpen={modalOpen} setmodalOpen={setmodalOpen} Id={Id} />}
      {modalOpen && type === "monitoring" && <ModalInfo type={type} modalOpen={modalOpen} setmodalOpen={setmodalOpen} logId={Id} />}
    </div>
  );
};

export default TableMaterial;
