import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Div } from "../style/styled-compo";
import ReactFlow, { ReactFlowProvider, isNode } from "react-flow-renderer";
import { VisGroup, VisUser, VisKey } from "../style/Icons";
import Switch from "@mui/material/Switch";
import qs from "qs";
import ModalVisual from "../../module/modal/ModalVisual";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import styled from "styled-components";

const VisualizationNav = styled.nav`
  height: 30%;
  width: 250px;
  float: right;
  position: absoulute;
`;

const Visualization = () => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const labelStyle = {
    position: "relative",
    top: "10px",
    left: "1000px",
  };
  // const [visualData, setVisualData] = useState(null);
  // const fetchVisualData = async () => {
  //   const response = await axios.get("http://54.180.115.206:8000/mock/visualization");
  //   setVisualData(response);
  //   console.log(response);
  //   console.log(visualData);
  // };
  // useEffect(() => {
  //   fetchVisualData();
  // }, []);
  const data = {
    user: [
      {
        source: "user1",
        target: "accesskey1",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0001", //잘못된 구성 <<< 변환해서 String으로 주는 걸로
      },
      {
        source: "user2",
        target: "accesskey5",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0000", //권한 분리 추천
      },
      {
        source: "user3",
        target: "accesskey2",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0011", //둘 다
      },
      {
        source: "user4",
        target: "accesskey8",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0010", //권한 분리 추천
      },
      {
        source: "user5",
        target: "accesskey10",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0000", //권한 분리 추천
      },
    ],
    orgGroup: [
      {
        source: "group1",
        target: "user1",
      },
      {
        source: "group2",
        target: "user2",
      },
    ],
    awsGroup: [
      {
        source: "awsGroup1",
        target: "user1",
      },
      {
        source: "awsGroup2",
        target: "user2",
      },
      {
        source: "",
        target: "user5",
      },
    ],
    root: [
      {
        source: "root1",
        target: "awsGroup1",
      },
      {
        source: "root1",
        target: "awsGroup2",
      },
    ],
  };
  const [awsChecked, setAwsChecked] = useState(true);
  const awsHandleChange = (event) => {
    setAwsChecked(event.target.checked);
  };
  const [orgChecked, setOrgChecked] = useState(false);
  const orgHandleChange = (event) => {
    setOrgChecked(event.target.checked);
  };
  const [scanChecked, setScanChecked] = useState(false);
  const scanHandleChange = (event) => {
    setScanChecked(event.target.checked);
  };
  const [modalOpen, setmodalOpen] = useState(false);
  const [resource, setResource] = useState(null);
  const openModal = () => {
    setmodalOpen(true);
  };
  const onElementClick = async (event, element) => {
    console.log("click", element);
    await setResource(element.id);
    setmodalOpen(true);
  };
  const elementRoot = data.root.map((v, i) => {
    return {
      id: v.source,
      type: "default",
      style: {
        background: "#e0e0e0",
        width: 50,
        fontWeight: "bold",
        fontSize: "1.2em",
      },
      data: { label: <div>{v.source}</div> },
      position: { x: 700, y: 50 },
    };
  });
  const elementNogroup = [
    {
      id: "Nogroup",
      type: "default",
      style: { background: "transparent", width: 30 },
      data: { label: "No group" },
      position: { x: 1200, y: 200 },
    },
  ];

  const elementUser = data.user.map((v, i) => {
    return {
      id: v.source,
      type: "default",
      style:
        scanChecked === true
          ? v.warningStatusInfo === "0001"
            ? { border: "3px solid #FA95EC", width: 30 }
            : v.warningStatusInfo === "0010"
            ? { border: "3px solid #FFFD91", width: 30 }
            : v.warningStatusInfo === "0011"
            ? { border: "3px solid #F4ABA1", width: 30 }
            : { background: "transparent", width: 30 }
          : { background: "transparent", width: 30 },
      data: {
        label: (
          <div>
            <VisUser />
            {v.source}
          </div>
        ),
      },
      position: {
        x: (1500 / (data.user.length + 1)) * (i + 1),
        y: 400 + Math.random() * 30,
      },
    };
  });

  const elementAwsGroup = data.awsGroup.map((v, i) => {
    if (awsChecked === true) {
      if (v.source !== "") {
        return {
          id: v.source,
          type: "default",
          style: { background: "transparent", border: "3px solid #91B3E1", width: 30 },
          data: {
            label: (
              <div>
                <VisGroup />
                {v.source}
              </div>
            ),
          },
          position: {
            x: (1500 / (data.awsGroup.length + 1)) * (i + 1),
            y: 200 + Math.random() * 20,
          },
        };
      } else return [];
    } else {
      return [];
    }
  });
  const elementOrgGroup = data.orgGroup.map((v, i) => {
    if (orgChecked === true) {
      return {
        id: v.source,
        type: "default",
        style: { background: "transparent", border: "3px solid #94B693", width: 30 },
        data: {
          label: (
            <div>
              <VisGroup />
              {v.source}
            </div>
          ),
        },
        position: {
          x: (1300 / (data.orgGroup.length + 1)) * (i + 1),
          y: 100 + Math.random() * 20,
        },
      };
    } else {
      return [];
    }
  });

  const elementKey = data.user.map((v, i) => {
    return {
      id: v.target,
      type: "default",
      style: { background: "transparent", width: 30 },
      data: {
        label: (
          <div>
            <VisKey />
            {v.target}
          </div>
        ),
      },
      position: {
        x: (1500 / (data.user.length + 1)) * (i + 1) + Math.random() * 50 * (-1 ^ i % 2),
        y: 570,
      },
    };
  });
  const rootToGroup = data.root.map((v, i) => {
    return {
      id: v.source + "to" + v.target,
      source: v.source,
      target: v.target,
      type: "straight",
    };
  });
  const awsGroupToUser = data.awsGroup.map((v, i) => {
    return {
      id: v.source + "to" + v.target,
      source: v.source,
      target: v.target,
      type: "straight",
    };
  });
  const orgGroupToUser = data.orgGroup.map((v, i) => {
    return {
      id: v.source + "to" + v.target,
      source: v.source,
      target: v.target,
      type: "straight",
    };
  });
  const noGroupToUser = data.awsGroup.map((v, i) => {
    if (v.source === "") {
      return {
        id: "noGroupto" + v.target,
        source: "Nogroup",
        target: v.target,
        type: "straight",
      };
    } else return [];
  });
  const userToKey = data.user.map((v, i) => {
    return {
      id: v.source + "to" + v.target,
      source: v.source,
      target: v.target,
      type: "straight",
    };
  });
  const elementConnect = [...rootToGroup, ...orgGroupToUser, ...awsGroupToUser, ...userToKey, ...noGroupToUser];
  const elements = [...elementRoot, ...elementOrgGroup, ...elementAwsGroup, ...elementUser, ...elementKey, ...elementNogroup, ...elementConnect];
  const [tab, setTab] = useState(0);
  const handleTabClick = (event, tabNumber) => {
    setTab(tabNumber);
  };

  const Root1 = () => <ReactFlow elements={elements} onElementClick={onElementClick} />;

  const Root2 = () => <ReactFlow elements={elements} onElementClick={onElementClick} />;

  const Root3 = () => <ReactFlow elements={elements} onElementClick={onElementClick} />;
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <h1
        style={{
          color: "#787878",
          margin: "0px 0px 10px 0px",
          fontSize: "26px",
          height: "35px",
        }}
      >
        Visualization
      </h1>
      <Div style={{ position: "relative" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tab} onChange={handleTabClick} aria-label="basic tabs example">
              <Tab label="root1" {...a11yProps(0)} />
              <Tab label="root2" {...a11yProps(1)} />
              <Tab label="root3" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        <div style={{ display: "flex", flexDirection: "row-reverse", height: "100%" }}>
          <VisualizationNav>
            <div>
              <div>
                <Switch checked={awsChecked} onChange={awsHandleChange} inputProps={{ "aria-label": "controlled" }} color="primary" />
                <strong>AWS 그룹</strong>
              </div>
              <div>
                <Switch checked={orgChecked} onChange={orgHandleChange} inputProps={{ "aria-label": "controlled" }} color="success" />
                <strong>권한 분리 그룹</strong>
              </div>
              <div>
                <Switch checked={scanChecked} onChange={scanHandleChange} inputProps={{ "aria-label": "controlled" }} color="error" />
                <strong>스캐닝 결과 반영</strong>
              </div>
            </div>
            <div>
              <div>
                <CircleIcon style={{ color: "#FA95EC" }} /> <span style={{ verticalAlign: "super" }}>잘못된 구성</span>
              </div>
              <div>
                <CircleIcon style={{ color: "#F4ABA1" }} /> <span style={{ verticalAlign: "super" }}>권한 분리</span>
              </div>
              <div>
                <CircleIcon style={{ color: "#FFFD91" }} /> <span style={{ verticalAlign: "super" }}>둘 다 해당</span>
              </div>
            </div>
          </VisualizationNav>
          <div style={{ width: "calc(100% - 250px)" }}>
            {tab === 0 && <Root1 />}
            {tab === 1 && <Root2 />}
            {tab === 2 && <Root3 />}
          </div>
        </div>
      </Div>
      {modalOpen && <ModalVisual modalOpen={modalOpen} setmodalOpen={setmodalOpen} resource={resource} />}
    </>
  );
};

export default Visualization;
//https://webkid.io/blog/react-flow-node-based-graph-library/
