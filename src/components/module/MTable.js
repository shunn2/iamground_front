import React, { useState, forwardRef, useMemo } from "react";
import MaterialTable from "material-table";
import XLSX from "xlsx";
import Modal from "../Modal/Modal";
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

const TableMaterial = ({ columns, cdata, title, type }) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const openModal = () => {
    setmodalOpen(true);
  };
  const [tableData, setTableData] = useState(cdata);
  // const [colDef, setColDef] = useState();
  // const [data, setData] = useState();
  // const Extentions = ["xlsx", "xls", "csv"];
  // const getExtention = (file) => {
  //   const parts = file.name.split(".");
  //   const extention = parts[parts.length - 1];
  //   return Extentions.includes(extention);
  // };
  // const convertToJson = (headers, data) => {
  //   const rows = [];
  //   data.forEach((row) => {
  //     let rowData = {};
  //     row.forEach((element, index) => {
  //       rowData[headers[index]] = element;
  //     });
  //     rows.push(rowData);
  //   });
  //   return rows;
  // };
  // const importCSV = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     const bstr = event.target.result;
  //     const workBook = XLSX.read(bstr, { type: "binary" });
  //     const workSheetName = workBook.SheetNames[0];
  //     const workSheet = workBook.Sheets[workSheetName];
  //     const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
  //     const headers = fileData[0];
  //     const heads = headers.map((head) => ({ title: head, field: head }));
  //     setColDef(heads);
  //     fileData.splice(0, 1);
  //     setData(convertToJson(headers, fileData));
  //   };
  //   if (file) {
  //     if (getExtention(file)) {
  //       reader.readAsBinaryString(file);
  //     } else {
  //       alert("Invalid file input");
  //     }
  //   } else {
  //     setData([]);
  //     setColDef([]);
  //   }
  // };

  return (
    <div>
      {/* <input type="file" onChange={importCSV} /> */}
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
            exportButton: false,
            selection: false,
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
            rowStyle: (data, index) => (data.result === "fail" ? { background: "Pink" } : null),
            headerStyle: { background: "#d6d6d6", fontStyle: "italic" },
            maxBodyHeight: type === "monitoring" || type === "scanning2" ? "650px" : type === "main" ? "150px" : "300px",
            exportButton: type === "monitoring" || type === "scanning2" ? true : false,
            selection: false,
            filtering: type === "monitoring" || type === "scanning2" ? true : false,
            grouping: type === "monitoring" || type === "scanning2" ? true : false,
          }}
        />
      )}
      {modalOpen && <Modal type="monitoring" modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}
    </div>
  );
};

export default TableMaterial;
