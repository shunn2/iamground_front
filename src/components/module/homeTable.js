import Button from '@mui/material/Button';
import React from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { Ctable } from "../../style/styled-compo";

function Table({ columns, data, type }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  return (
    <>
      <Ctable {...getTableProps()}>
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
                    if(cell.column.id === "status") {
                        if(cell.value === "스캔중") {
                            return <td {...cell.getCellProps()}><span style={{width:'10px', height:'10px', borderRadius:'14px', backgroundColor:"#0370FF", display:'inline-block', marginRight:'6px'}}/> {cell.render("Cell")}</td>
                        }
                        else if(cell.value === "활성화") {
                            return <td {...cell.getCellProps()}><span style={{width:'10px', height:'10px', borderRadius:'14px', backgroundColor:"#60B941", display:'inline-block', marginRight:'6px'}}/>{cell.render("Cell")}</td>
                        }
                        else if(cell.value === "비활성화") {
                            return <td {...cell.getCellProps()}><span style={{width:'10px', height:'10px', borderRadius:'14px', backgroundColor:"#EA3524", display:'inline-block', marginRight:'6px'}}/>{cell.render("Cell")}</td>
                        }
                    }

                    if(cell.column.id === "result") {
                        return <td {...cell.getCellProps()}><Button variant="contained" color="info" style={{fontSize:'12px', padding:'4px 6px'}}>보기</Button></td>
                    }

                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </Ctable>
    </>
  );
}

export default Table;
