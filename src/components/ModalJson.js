import React from "react";
import faker from "faker/locale/ko";

function ModalJson() {
  const data = ["rec1", "rec2", "rec3", "rec4", "rec5"];
  const RecTable = () => {
    return (
      <table
        border="1"
        borderColor="#F08080"
        cellPadding="5"
        style={{
          textAlign: "center",
          borderCollapse: "collapse",
          cellpadding: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Policy1</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{faker.lorem.sentence()}</td>
            <td>{faker.lorem.sentence()}</td>
          </tr>
          <tr>
            <td>{faker.lorem.sentence()}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  return (
    <>
      <div>
        <div>
          <span>권고 사항 | </span>
          <span>{faker.lorem.words()}</span>
        </div>
        <div>
          <span>추천 이유 | </span>
          <span>{faker.lorem.words()}</span>
        </div>
        <span>현재 상태 | </span>
        <span>{faker.lorem.words()}</span>
      </div>
      <ul>
        {data.map((rec) => (
          <div>
            <button>{rec}</button>
          </div>
        ))}
      </ul>
      <RecTable />
    </>
  );
}

export default ModalJson;
