import React, { useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import Modal from "../Modal";
import ScanModal from "../ScanningModal";
import Search from "../SearchTable";
import { Ctable } from "../../style/styled-compo";

function Table({ columns, data, type }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const [modalOpen, setmodalOpen] = useState(false);
  const openModal = () => {
    setmodalOpen(true);
  };
  return (
    <>
      <Search onSubmit={setGlobalFilter} />
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
            let check = true;
            row.cells.map((cell) => {
              if (cell.value === "-") check = false;
            });
            return (
              <tr style={{ backgroundColor: check ? "#ffffff" : "#F8ABA1" }} onClick={openModal} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Ctable>
      {type === "scan" && modalOpen && <ScanModal type={type} modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}
      {type !== "scan" && modalOpen && <Modal type={type} modalOpen={modalOpen} setmodalOpen={setmodalOpen} />}
    </>
  );
}

export default Table;
