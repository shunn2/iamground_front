import React from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { Ctable } from "../../style/styled-compo";
import WarningIcon from "@mui/icons-material/Warning";
import GppGoodIcon from "@mui/icons-material/GppGood";

function Table({ columns, data, type }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  return (
    <>
      <Ctable style={{marginTop:'10px'}} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if(cell.column.id === "last" || cell.column.id === "cur") {
                    if(cell.value === 0) {
                      return <td  {...cell.getCellProps()}>{<GppGoodIcon style={{fontSize:"24px", color:"gray", marginTop:"12px"}}/>}</td>
                    }
                    else if(cell.value === 1) {
                      return <td {...cell.getCellProps()}>{<WarningIcon style={{fontSize:"24px", color:"gray", marginTop:"12px"}}/>}</td>
                    }
                  }

                  return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                )})}
              </tr>
            );
          })}
        </tbody>
      </Ctable>
    </>
  );
}

export default Table;
