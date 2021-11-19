// import React, { useState } from "react";

// import ReactFlow, { removeElements, addEdge, MiniMap, Controls, Background } from "react-flow-renderer";

// import CustomEdge from "./CustomEdge";

// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
// const onNodeDragStop = (event, node) => console.log("drag stop", node);
// const onElementClick = (event, element) => console.log("click", element);

// const initialElements = [
//   {
//     id: "edges-1",
//     type: "input",
//     data: { label: "Input 1" },
//     position: { x: 250, y: 0 },
//   },
//   { id: "edges-2", data: { label: "Node 2" }, position: { x: 150, y: 100 } },
//   { id: "edges-2a", data: { label: "Node 2a" }, position: { x: 0, y: 180 } },
//   { id: "edges-3", data: { label: "Node 3" }, position: { x: 250, y: 200 } },
//   { id: "edges-4", data: { label: "Node 4" }, position: { x: 400, y: 300 } },
//   { id: "edges-3a", data: { label: "Node 3a" }, position: { x: 150, y: 300 } },
//   { id: "edges-5", data: { label: "Node 5" }, position: { x: 250, y: 400 } },
//   {
//     id: "edges-6",
//     type: "output",
//     data: { label: "Output 6" },
//     position: { x: 50, y: 550 },
//   },
//   {
//     id: "edges-7",
//     type: "output",
//     data: { label: "Output 7" },
//     position: { x: 250, y: 550 },
//   },
//   {
//     id: "edges-8",
//     type: "output",
//     data: { label: "Output 8" },
//     position: { x: 525, y: 600 },
//   },
//   {
//     id: "edges-e1-2",
//     source: "edges-1",
//     target: "edges-2",
//     label: "bezier edge (default)",
//     className: "normal-edge",
//   },
//   {
//     id: "edges-e2-2a",
//     source: "edges-2",
//     target: "edges-2a",
//     type: "smoothstep",
//     label: "smoothstep edge",
//   },
//   {
//     id: "edges-e2-3",
//     source: "edges-2",
//     target: "edges-3",
//     type: "step",
//     label: "step edge",
//   },
//   {
//     id: "edges-e3-4",
//     source: "edges-3",
//     target: "edges-4",
//     type: "straight",
//     label: "straight edge",
//   },
//   {
//     id: "edges-e3-3a",
//     source: "edges-3",
//     target: "edges-3a",
//     type: "straight",
//     label: "label only edge",
//     style: { stroke: "none" },
//   },
//   {
//     id: "edges-e3-5",
//     source: "edges-4",
//     target: "edges-5",
//     animated: true,
//     label: "animated styled edge",
//     style: { stroke: "red" },
//   },
//   {
//     id: "edges-e5-6",
//     source: "edges-5",
//     target: "edges-6",
//     label: "styled label",
//     labelStyle: { fill: "red", fontWeight: 700 },
//     arrowHeadType: "arrow",
//   },
//   {
//     id: "edges-e5-7",
//     source: "edges-5",
//     target: "edges-7",
//     label: "label with styled bg",
//     labelBgPadding: [8, 4],
//     labelBgBorderRadius: 4,
//     labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
//     arrowHeadType: "arrowclosed",
//   },
//   {
//     id: "edges-e5-8",
//     source: "edges-5",
//     target: "edges-8",
//     type: "custom",
//     data: { text: "custom edge" },
//     arrowHeadType: "arrowclosed",
//   },
// ];

// const edgeTypes = {
//   custom: CustomEdge,
// };

// const EdgesFlow = () => {
//   const [elements, setElements] = useState(initialElements);

//   const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));

//   return (
//     <ReactFlow
//       elements={elements}
//       onElementClick={onElementClick}
//       onElementsRemove={onElementsRemove}
//       onConnect={onConnect}
//       onNodeDragStop={onNodeDragStop}
//       onLoad={onLoad}
//       snapToGrid={true}
//       edgeTypes={edgeTypes}
//       key="edges"
//     >
//       <MiniMap />
//       <Controls />
//       <Background />
//     </ReactFlow>
//   );
// };

// export default EdgesFlow;

import React, { useState } from "react";

import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";

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
    data: { label: "Input" },
    position: { x: 0, y: 80 },
  },
  {
    id: "horizontal-2",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "A Node" },
    position: { x: 250, y: 0 },
  },
  {
    id: "horizontal-3",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Node 3" },
    position: { x: 250, y: 160 },
  },
  {
    id: "horizontal-4",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Node 4" },
    position: { x: 500, y: 0 },
  },
  {
    id: "horizontal-5",
    sourcePosition: "top",
    targetPosition: "bottom",
    data: { label: "Node 5" },
    position: { x: 500, y: 100 },
  },
  {
    id: "horizontal-6",
    sourcePosition: "bottom",
    targetPosition: "top",
    data: { label: "Node 6" },
    position: { x: 500, y: 230 },
  },
  {
    id: "horizontal-7",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Node 7" },
    position: { x: 750, y: 50 },
  },
  {
    id: "horizontal-8",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Node 8" },
    position: { x: 750, y: 300 },
  },

  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-2",
    animated: true,
  },
  {
    id: "horizontal-e1-3",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-3",
    animated: true,
  },
  {
    id: "horizontal-e1-4",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-4",
    label: "edge label",
  },
  {
    id: "horizontal-e3-5",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-5",
    animated: true,
  },
  {
    id: "horizontal-e3-6",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
  {
    id: "horizontal-e5-7",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-7",
    animated: true,
  },
  {
    id: "horizontal-e6-8",
    source: "horizontal-6",
    type: "smoothstep",
    target: "horizontal-8",
    animated: true,
  },
];

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
    >
      <button onClick={changeClassName} style={{ position: "absolute", right: 10, top: 30, zIndex: 4 }}>
        change class name
      </button>
    </ReactFlow>
  );
};

export default HorizontalFlow;
