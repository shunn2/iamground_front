import { Switch } from "@material-ui/core";
import React, { useState } from "react";
import TableMaterial from "../components/module/MTable";
import faker from "faker/locale/ko";

function Test() {
  const [tab, setTab] = useState(0);

  const handleTabClick = (tabNumber) => () => {
    setTab(tabNumber);
  };

  const REC1 = () => {
    return <div>hihihi</div>;
  };

  const REC2 = () => {
    return <div>dfsdfsdf</div>;
  };

  const REC3 = () => {
    return <div>wfewfww</div>;
  };
  return (
    <>
      <div style={{ paddingLeft: "150px" }}>
        <div>
          <span>권고 사항 | {faker.lorem.words()} </span>
        </div>
        <div>
          <span>추천 이유 | {faker.lorem.words()}</span>
        </div>
        <span>현재 상태 | {faker.lorem.words()}</span>
      </div>
      <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "row", paddingTop: "30px" }}>
        <div style={{ height: "100%", width: "15%", display: "flex", flexDirection: "column" }}>
          <span
            style={{
              backgroundColor: tab === 0 ? "#efefef" : "#b7d6da",
              border: "2px solid black",
              borderRight: tab === 0 ? "none" : "1px solid black",
              width: "100%",
              textAlign: "center",
              fontWeight: tab === 0 ? "bold" : "normal",
              height: "40px",
            }}
            onClick={handleTabClick(0)}
          >
            권고사항1
          </span>
          <span
            style={{
              backgroundColor: tab === 1 ? "#efefef" : "#b7d6da",
              border: "2px solid black",
              borderRight: tab === 1 ? "none" : "1px solid black",
              width: "100%",
              textAlign: "center",
              fontWeight: tab === 1 ? "bold" : "normal",
              height: "40px",
            }}
            onClick={handleTabClick(1)}
          >
            권고사항2
          </span>
          <span
            style={{
              backgroundColor: tab === 2 ? "#efefef" : "#b7d6da",
              border: "2px solid black",
              borderRight: tab === 2 ? "none" : "1px solid black",
              width: "100%",
              textAlign: "center",
              fontWeight: tab === 2 ? "bold" : "normal",
              height: "40px",
            }}
            onClick={handleTabClick(2)}
          >
            권고사항3
          </span>
          <span
            style={{
              backgroundColor: "#ffffff",
              flex: 1,
              flexDirection: "column",
            }}
          ></span>
        </div>
        <div style={{ width: "80%", height: "100%", border: "1px solid black", borderLeft: "none", backgroundColor: "#efefef" }}>
          {tab === 0 && <REC1 />}
          {tab === 1 && <REC2 />}
          {tab === 2 && <REC3 />}
        </div>
      </div>
    </>
  );
}

export default Test;
