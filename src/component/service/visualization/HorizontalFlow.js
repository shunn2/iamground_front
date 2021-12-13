import React, { useEffect, useState } from "react";

import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import CustomEdge from "./CustomEdge";
import _, { keyBy } from "lodash";
import { Link } from "react-router-dom";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

// const onNodeMouseEnter = (event, node) => console.log("mouse enter:", node);
// const onNodeMouseMove = (event, node) => console.log("mouse move:", node);
// const onNodeMouseLeave = (event, node) => console.log("mouse leave:", node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log("context menu:", node);
};

const edgeTypes = {
  custom: CustomEdge,
};
//resource==relation // subject==resourceName
//lineColor
// 1 검정 안정
// 2 파랑 마킹
// 3 빨강 위험
// policyType
// 1 고객관리형
// 2 aws관리형
// 3 인라인
// (0은 user-group 관계일 때 고정값으로)

//subject는 user or group
const HorizontalFlow = ({ resource, subject, resourceName }) => {
  const [group, setGroup] = useState([]);
  const [user, setUser] = useState([]);
  const [policy, setPolicy] = useState([]);
  const [policyConnect, setPolicyConnect] = useState([]);
  const [userConnect, setUserConnect] = useState([]);
  const [groupConnect, setGroupConnect] = useState([]);
  const subjectElement = [
    {
      id: resourceName,
      sourcePosition: "right",
      targetPosition: "left",
      type: "default",
      className: "dark-node",
      data: { label: <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>{resourceName}</div> },
      position: { x: subject === "user" ? 200 : 600, y: 200 },
      style: { width: String(resourceName).length * 11, height: 30, border: "5px solid #FED658" },
    },
  ];
  useEffect(() => {
    if (subject === "user") {
      setPolicy(
        resource.policy.map((v, i) => {
          return {
            id: v.targetArn,
            sourcePosition: "right",
            targetPosition: "left",
            data: {
              label: (
                <div>
                  <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>{v.target}</div>
                  {v.policyType === 1 ? (
                    <div style={{ fontSize: "15px", fontWeight: "600" }}>[MANAGED]</div>
                  ) : v.policyType === 2 ? (
                    <div style={{ fontSize: "15px", fontWeight: "600" }}>[AWS MANAGED]</div>
                  ) : (
                    <div style={{ fontSize: "15px", fontWeight: "600" }}>[INLINE]</div>
                  )}
                </div>
              ),
            },
            position: { x: 1000, y: (500 / (resource.policy.length + 1)) * (i + 1) },
            style: { width: String(v.target).length * 11, height: 40, border: "3px solid #5265B3" },
          };
        })
      );
      setGroup(
        resource.group.map((v, i) => {
          return {
            id: v.targetArn,
            sourcePosition: "left",
            targetPosition: "right",
            data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>{v.target}</span> },
            position: { x: 600, y: (500 / (resource.group.length + 1)) * (i + 1) },
            style: { width: String(v.target).length * 11, height: 30, border: "3px solid #C098CE" },
          };
        })
      );
      setPolicyConnect(
        resource.policy.map((v, i) => {
          return {
            id: v.source + "to" + v.targetArn,
            source: v.sourceArn,
            type: "default",
            target: v.targetArn,
            style: { stroke: v.lineColor === 1 ? "#000000" : v.lineColor === 2 ? "#0001F7" : "#F7003E" },
          };
        })
      );
      setGroupConnect(
        resource.group.map((v, i) => {
          return {
            id: v.source + "to" + v.targetArn,
            source: v.source,
            type: "default",
            target: v.targetArn,
            style: { stroke: v.lineColor === 1 ? "#000000" : v.lineColor === 2 ? "#0001F7" : "#F7003E" },
          };
        })
      );
    } else if (subject === "group") {
      setUser(
        resource.user.map((v, i) => {
          return {
            id: v.targetArn,
            sourcePosition: "left",
            targetPosition: "right",
            data: { label: <span style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>{v.target}</span> },
            position: { x: 200, y: (500 / (resource.user.length + 1)) * (i + 1) },
            style: { width: String(v.target).length * 11, height: 30, border: "3px solid #E9B7C3" },
          };
        })
      );
      setPolicy(
        resource.policy.map((v, i) => {
          return {
            id: v.targetArn,
            sourcePosition: "right",
            targetPosition: "left",
            data: {
              label: (
                <div>
                  <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>{v.target}</div>
                  {v.policyType === 1 ? (
                    <div style={{ fontSize: "15px", fontWeight: "600" }}>[MANAGED]</div>
                  ) : v.policyType === 2 ? (
                    <div style={{ fontSize: "15px", fontWeight: "600" }}>[AWS MANAGED]</div>
                  ) : (
                    <div style={{ fontSize: "15px", fontWeight: "600" }}>[INLINE]</div>
                  )}
                </div>
              ),
            },
            position: { x: 1000, y: (500 / (resource.policy.length + 1)) * (i + 1) },
            style: { width: String(v.target).length * 11, height: 40, border: "3px solid #5265B3" },
          };
        })
      );
      setUserConnect(
        resource.user.map((v, i) => {
          return {
            id: v.source + "to" + v.targetArn,
            source: v.source,
            type: "default",
            target: v.targetArn,
            style: { stroke: v.lineColor === 1 ? "#000000" : v.lineColor === 2 ? "#0001F7" : "#F7003E" },
          };
        })
      );
      setPolicyConnect(
        resource.policy.map((v, i) => {
          return {
            id: v.source + "to" + v.targetArn,
            source: v.source,
            type: "default",
            target: v.targetArn,
            style: { stroke: v.lineColor === 1 ? "#000000" : v.lineColor === 2 ? "#0001F7" : "#F7003E" },
          };
        })
      );
    } else return [];
  }, []);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (subject === "user") {
      setElements([...policy, ...group, ...policyConnect, ...groupConnect, ...subjectElement]);
    } else if (subject === "group") {
      setElements([...policy, ...user, ...userConnect, ...policyConnect, ...subjectElement]);
    }
  }, [user, policy, group]);
  const [uniqueElements, setUniqueElements] = useState([]);
  useEffect(() => {
    setUniqueElements(_.uniqBy(elements, "id"));
  }, [elements]);
  // const abcdElements = [...Elements1, ...Elements2];
  // const [elements, setElements] = useState(abcdElements);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = async (event, element) => {
    <a target="_blank" href="/scan" />;
  };
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
      elements={uniqueElements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={false}
      // onNodeMouseEnter={onNodeMouseEnter}
      // onNodeMouseMove={onNodeMouseMove}
      // onNodeMouseLeave={onNodeMouseLeave}
      onNodeContextMenu={onNodeContextMenu}
      edgeTypes={edgeTypes}
      onElementClick={onElementClick}
      zoomOnScroll={false}
    >
      {/* <button onClick={changeClassName} style={{ position: "absolute", right: 10, top: 30, zIndex: 4 }}>
        change class name
      </button> */}
    </ReactFlow>
  );
};

export default HorizontalFlow;
