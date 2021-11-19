import React, { useState } from "react";
import { Div } from "../style/styled-compo";
import ReactFlow from "react-flow-renderer";
import { VisGroup, VisUser, VisPUser, VisKey } from "../style/Icons";

const Visualization = ({ user, group, poweruser, access }) => {
  const elementRoot = [{ id: "root", type: "default", style: { background: "#e0e0e0", width: 50, fontWeight: "bold", fontSize: "1.2em" }, data: { label: "root" }, position: { x: 500, y: 50 } }];
  const elementNogroup = [{ id: "Nogroup", type: "default", style: { background: "transparent", width: 30 }, data: { label: "No group" }, position: { x: 1000, y: 160 } }];
  const elementUser = user.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "transparent", width: 30 },
      data: {
        label: (
          <div>
            <VisUser />
          </div>
        ),
      },
      position: {
        x: i * 180 + 80,
        y: 350 + Math.random() * 60,
      },
    };
  });
  const elementGroup = group.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "transparent", width: 30 },
      data: {
        label: (
          <div>
            <VisGroup />
          </div>
        ),
      },
      position: {
        x: i * 200 + 150,
        y: 150 + Math.random() * 40,
      },
    };
  });
  const elementPower = poweruser.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "transparent", width: 30 },
      data: {
        label: (
          <div>
            <VisPUser />
          </div>
        ),
      },
      position: {
        x: i * 200 + 250 - Math.random() * 50,
        y: 250 + Math.random() * 50,
      },
    };
  });
  const elementKey = access.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "transparent", width: 30 },
      data: {
        label: (
          <div>
            <VisKey />
          </div>
        ),
      },
      position: {
        x: i * 200 + 100,
        y: 500,
      },
    };
  });
  const elementConnect = [
    { id: "1", source: "Group1", target: "User1", type: "straight" },
    { id: "2", source: "Group1", target: "User3", type: "straight" },
    { id: "3", source: "Group2", target: "User2", type: "straight" },
    { id: "4", source: "Group2", target: "User6", type: "straight" },
    { id: "5", source: "Group3", target: "User4", type: "straight" },
    { id: "6", source: "Group3", target: "User5", type: "straight" },
    { id: "7", source: "Group3", target: "User8", type: "straight" },
    { id: "8", source: "Group4", target: "User7", type: "straight" },
    { id: "9", source: "Group4", target: "User9", type: "straight" },
    { id: "10", source: "root", target: "Group1", type: "straight" },
    { id: "11", source: "root", target: "Group2", type: "straight" },
    { id: "12", source: "root", target: "Group3", type: "straight" },
    { id: "13", source: "root", target: "Group4", type: "straight" },
    { id: "14", source: "User1", target: "accesskey1", type: "straight" },
    { id: "15", source: "User6", target: "accesskey2", type: "straight" },
    { id: "16", source: "User8", target: "accesskey3", type: "straight" },
    { id: "17", source: "User9", target: "accesskey4", type: "straight" },
    { id: "18", source: "User10", target: "accesskey5", type: "straight" },
    { id: "19", source: "Nogroup", target: "User10", type: "straight" },
  ];
  const elements = [...elementUser, ...elementGroup, ...elementPower, ...elementKey, ...elementRoot, ...elementNogroup, ...elementConnect];

  const [tab, setTab] = useState(0);

  const handleTabClick = (tabNumber) => () => {
    setTab(tabNumber);
  };

  const Root1 = () => <ReactFlow elements={elements} />;

  const Root2 = () => <ReactFlow elements={elements} />;

  const Root3 = () => <ReactFlow elements={elements} />;
  return (
    <>
      <h1 style={{ color: "#787878",margin:'0px 0px 10px 0px', fontSize:'26px', height:'35px' }}>Visualization</h1>
      <Div>
        <div style={{ height: "25px", width: "100%", display: "flex" }}>
          <span
            style={{
              backgroundColor: tab === 0 ? "#efefef" : "#e0e0e0",
              border: "2px solid black",
              borderRight:'none',
              borderBottom: tab === 0 ? "none" : "1px solid black",
              width: "150px",
              textAlign: "center",
              fontWeight: tab === 0 ? "bold" : "normal",
            }}
            onClick={handleTabClick(0)}
          >
            root1
          </span>
          <span
            style={{
              backgroundColor: tab === 1 ? "#efefef" : "#e0e0e0",
              border: "2px solid black",
              borderRight:'none',
              borderBottom: tab === 1 ? "none" : "1px solid black",
              width: "150px",
              textAlign: "center",
              fontWeight: tab === 1 ? "bold" : "normal",
            }}
            onClick={handleTabClick(1)}
          >
            root2
          </span>
          <span
            style={{
              backgroundColor: tab === 2 ? "#efefef" : "#e0e0e0",
              border: "2px solid black",
              borderBottom: tab === 2 ? "none" : "1px solid black",
              width: "150px",
              textAlign: "center",
              fontWeight: tab === 2 ? "bold" : "normal",
            }}
            onClick={handleTabClick(2)}
          >
            root3
          </span>
          <span
            style={{
              backgroundColor: "#efefef",
              borderBottom: "2px solid black",
              flex: 1,
            }}
          ></span>
        </div>
        <div style={{ width: "99.7%", height: "calc(100% - 30px)", border: "2px solid black", borderTop: "none" }}>
          {tab === 0 && <Root1 />}
          {tab === 1 && <Root2 />}
          {tab === 2 && <Root3 />}
        </div>
      </Div>
    </>
  );
};

export default Visualization;
//https://webkid.io/blog/react-flow-node-based-graph-library/
