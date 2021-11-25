import React, { useState } from "react";
import { Div } from "../style/styled-compo";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TableMaterial from "../components/module/MTable";
import XLSX from "xlsx";

function Organization() {
  const origincolumns = [
    { title: "Permission Group", field: "permission_group" },
    { title: "Root Account", field: "root_account" },
    { title: "user arn", field: "user_arn" },
    { title: "Name", field: "name" },
    { title: "email", field: "email" },
    { field: "phone_number", title: "Phone Number" },
  ];
  const origindata = [
    {
      permission_group: "Dev",
      root_account: "IAMGROUND",
      user_arn: "aws:iam::284264230655:user",
      name: "김민경",
      email: "5596molly@naver.com",
      phone_number: "010-7552-5596",
    },
    {
      permission_group: "Dev",
      root_account: "IAMGROUND",
      user_arn: "aws:iam::284264230655:user",
      name: "김민경",
      email: "5596molly@naver.com",
      phone_number: "010-7552-5596",
    },
    {
      permission_group: "Dev",
      root_account: "IAMGROUND",
      user_arn: "aws:iam::284264230655:user",
      name: "김민경",
      email: "5596molly@naver.com",
      phone_number: "010-7552-5596",
    },
  ];
  const [visible, setVisible] = useState(false);
  const OpenList = () => {
    return setVisible(!visible);
  };
  const [colDef, setColDef] = useState(origincolumns);
  const [data, setData] = useState(origindata);
  const Extentions = ["xlsx", "xls", "csv"];
  const getExtention = (file) => {
    const parts = file.name.split(".");
    const extention = parts[parts.length - 1];
    return Extentions.includes(extention);
  };
  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };
  const importCSV = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setColDef(heads);
      fileData.splice(0, 1);
      setData(convertToJson(headers, fileData));
    };
    if (file) {
      if (getExtention(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert("Invalid file input");
      }
    } else {
      setData([]);
      setColDef([]);
    }
  };
  const csvList = () => {
    return (
      <>
        <table style={{ borderCollapse: "collapse", border: "1px solid black", position: "absolute", top: "4px", right: "202px", textAlign: "center", backgroundColor: "white" }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#D6D6D6", border: "1px solid #A1B8D6", padding: "3px" }}>CSV File</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #D6D6D6" }}>
                <a href="/organization" style={{ color: "black", textDecoration: "none" }}>
                  Download
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #D6D6D6" }}>
                <a href="/organization" style={{ color: "black", textDecoration: "none" }}>
                  Upload - Overwrite
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Organization</h1>
      <Div>
        <div style={{ float: "right", paddingRight: "50px" }}>
          <button
            style={{
              height: "30px",
              width: "100px",
              backgroundColor: "#D6D6D6",
              borderColor: "#EFEFEF",
              borderRadius: "5px",
              fontSize: "10px",
            }}
            onClick={OpenList}
          >
            <FileDownloadIcon />
            <FileUploadIcon />
          </button>
        </div>
        {visible ? csvList() : ""}

        <div style={{ width: "calc(100%-30px)", padding: "40px" }}>
          <input type="file" onChange={importCSV} />
          <TableMaterial columns={colDef} cdata={data} title="Organization" type="organization" />
          {/* <TableMaterial
            columns={[
              { title: "Permission Group", field: "permission_group" },
              { title: "Root Account", field: "root_account" },
              { title: "user arn", field: "user_arn" },
              { title: "Name", field: "name" },
              { title: "email", field: "email" },
              { field: "phone_number", title: "Phone Number" },
            ]}
            cdata={[
              {
                permission_group: "Dev",
                root_account: "IAMGROUND",
                user_arn: "aws:iam::284264230655:user",
                name: "김민경",
                email: "5596molly@naver.com",
                phone_number: "010-7552-5596",
              },
              {
                permission_group: "Dev",
                root_account: "IAMGROUND",
                user_arn: "aws:iam::284264230655:user",
                name: "김민경",
                email: "5596molly@naver.com",
                phone_number: "010-7552-5596",
              },
              {
                permission_group: "Dev",
                root_account: "IAMGROUND",
                user_arn: "aws:iam::284264230655:user",
                name: "김민경",
                email: "5596molly@naver.com",
                phone_number: "010-7552-5596",
              },
            ]}
            columns={colDef}
            cdata={data}
            title="Organization"
            type="organization"
          /> */}
        </div>
      </Div>
    </>
  );
}

export default Organization;
