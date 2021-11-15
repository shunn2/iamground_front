import React, { useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import CreateModal from "./Modal";
import Search from "./SearchTable";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <>
      <Search onSubmit={setGlobalFilter} />
      <table {...getTableProps()}>
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
              <tr onClick={() => setmodalOpen(true)} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <CreateModal onOpen={modalOpen} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
