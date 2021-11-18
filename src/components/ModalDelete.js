import React from "react";
import faker from "faker/locale/ko";

function ModalDelete() {
  const data = ["rec1", "rec2", "rec3", "rec4", "rec5"];
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
      <div>
        Policy1을 삭제하세요.
        <br />
        <a href="/">삭제 방법 보기</a>{" "}
      </div>
    </>
  );
}

export default ModalDelete;
