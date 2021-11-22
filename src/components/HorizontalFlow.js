import React, { useState } from "react";

import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";

import CustomEdge from "./CustomEdge";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const onNodeMouseEnter = (event, node) => console.log("mouse enter:", node);
const onNodeMouseMove = (event, node) => console.log("mouse move:", node);
const onNodeMouseLeave = (event, node) => console.log("mouse leave:", node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log("context menu:", node);
};

const initialElements = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "input",
    className: "dark-node",
    data: { label: <span style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>User</span> },
    position: { x: -60, y: 270 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-2",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Policy 1</span> },
    position: { x: 190, y: 190 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-3",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Group</span> },
    position: { x: 190, y: 350 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-4",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Permission 1</span> },
    position: { x: 440, y: 190 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-5",
    sourcePosition: "top",
    targetPosition: "bottom",
    data: { label: <span style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Policy2</span> },
    position: { x: 440, y: 290 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-6",
    sourcePosition: "bottom",
    targetPosition: "top",
    data: { label: <span style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Policy3</span> },
    position: { x: 440, y: 420 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-7",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Permission 2</span> },
    position: { x: 690, y: 240 },
    style: { width: 120, height: 30, border: "1px solid #FF4A6F" },
  },
  {
    id: "horizontal-8",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Permission4</span> },
    position: { x: 690, y: 410 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-9",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Permission3</span> },
    position: { x: 690, y: 340 },
    style: { width: 120, height: 30 },
  },
  {
    id: "horizontal-10",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Permission5</span> },
    position: { x: 690, y: 490 },
    style: { width: 120, height: 30 },
  },

  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "default",
    target: "horizontal-2",
  },
  {
    id: "horizontal-e1-3",
    source: "horizontal-1",
    type: "default",
    target: "horizontal-3",
  },
  {
    id: "horizontal-e1-4",
    source: "horizontal-2",
    type: "default",
    target: "horizontal-4",
  },
  {
    id: "horizontal-e3-5",
    source: "horizontal-3",
    type: "default",
    target: "horizontal-5",
  },
  {
    id: "horizontal-e3-6",
    source: "horizontal-3",
    type: "default",
    target: "horizontal-6",
    style: { stroke: "#FF4A6F" },
  },
  {
    id: "horizontal-e5-7",
    source: "horizontal-5",
    type: "default",
    target: "horizontal-7",
    style: { stroke: "#FF4A6F" },
  },
  {
    id: "horizontal-e6-8",
    source: "horizontal-6",
    type: "default",
    target: "horizontal-8",
  },
  {
    id: "horizontal-e6-9",
    source: "horizontal-6",
    type: "default",
    target: "horizontal-9",
  },
  {
    id: "horizontal-e6-10",
    source: "horizontal-6",
    type: "default",
    target: "horizontal-10",
    style: { stroke: "#FF4A6F" },
  },
];
const edgeTypes = {
  custom: CustomEdge,
};
const HorizontalFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const changeClassName = () => {
    setElements((elms) =>
      elms.map((el) => {
        if (el.type === "input") {
          el.className = el.className ? "" : "dark-node";
        }

        return { ...el };
      })
    );
  };

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={false}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseMove={onNodeMouseMove}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodeContextMenu={onNodeContextMenu}
      edgeTypes={edgeTypes}
    >
      {/* <button onClick={changeClassName} style={{ position: "absolute", right: 10, top: 30, zIndex: 4 }}>
        change class name
      </button> */}
    </ReactFlow>
  );
};

export default HorizontalFlow;
