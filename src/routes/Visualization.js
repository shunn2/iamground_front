import React from "react";
import { Div } from "../style/styled-compo";
import ReactFlow from "react-flow-renderer";

const Visualization = ({ user, group, poweruser, accesskey }) => {
  // const elements = [
  //   { id: "1", type: "input", data: { label: "Node 1" }, position: { x: 250, y: 5 } },
  //   { id: "2", data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  //   { id: "3", data: { label: <div>Node 3</div> }, position: { x: 300, y: 100 } },
  //   { id: "e1-2", source: "1", target: "2", type: "straight" },
  // ];
  // const test = [1, 2, 3, 4, 5]

  const elementUser = user.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "white", width: 50 },
      data: {
        label: <div>{v}</div>,
      },
      position: {
        x: i * 200 + 100,
        y: 330 + Math.random() * 80,
      },
    };
  });
  const elementGroup = group.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "white", width: 50 },
      data: {
        label: <div>{v}</div>,
      },
      position: {
        x: i * 250 + 200,
        y: 100,
      },
    };
  });
  const elementPower = poweruser.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "white", width: 50 },
      data: {
        label: <div>{v}</div>,
      },
      position: {
        x: i * 200 + 350 - Math.random() * 50,
        y: 260 + Math.random() * 30,
      },
    };
  });
  const elementKey = accesskey.map((v, i) => {
    return {
      id: v,
      type: "default",
      style: { background: "white", width: 50 },
      data: {
        label: <div>{v}</div>,
      },
      position: {
        x: i * 200 + 100,
        y: 500,
      },
    };
  });
  const elementConnect = [
    { id: "1", source: "group1", target: "user1", type: "straight" },
    { id: "2", source: "group1", target: "user2", type: "straight" },
    { id: "3", source: "group2", target: "user3", type: "straight" },
    { id: "4", source: "group2", target: "p-user1", type: "straight" },
    { id: "5", source: "group2", target: "p-user2", type: "straight" },
    { id: "6", source: "group3", target: "user4", type: "straight" },
    { id: "7", source: "group3", target: "p-user3", type: "straight" },
    { id: "8", source: "group4", target: "user5", type: "straight" },
    { id: "9", source: "group4", target: "user6", type: "straight" },
  ];
  const elements = [...elementUser, ...elementGroup, ...elementPower, ...elementKey, ...elementConnect];
  const flowStyles = { height: 2000 };
  return (
    <>
      {/* //<ToggleSide /> */}
      <Div>
        <h3>visualization</h3>
        <ReactFlow elements={elements} />
      </Div>
    </>
  );
};

export default Visualization;
//https://webkid.io/blog/react-flow-node-based-graph-library/
