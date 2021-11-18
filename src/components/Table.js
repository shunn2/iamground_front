import React, { useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import CreateModal from "./Modal";
import Search from "./SearchTable";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const [modalOpen, setmodalOpen] = useState(false);
  const modalClose = () => {
    setmodalOpen(!modalOpen);
  };
  const tableStyle = {
    position: "relative",
    top: "20px",
    left: "30px",
    width: "1000px",
    height: "500px",
    border: "1px solid black",
  };
  return (
    <>
      <Search onSubmit={setGlobalFilter} />
      <br />
      <br />
      <table {...getTableProps()} style={tableStyle}>
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
              <tr onClick={modalClose} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                {modalOpen && <CreateModal onOpen={modalOpen} modalClose={modalClose} />}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
