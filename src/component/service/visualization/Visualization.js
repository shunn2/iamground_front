import React, { useCallback, useEffect, useState } from "react";
import { Div } from "../style/styled-compo";
import ReactFlow from "react-flow-renderer";
import { VisGroup, VisUser, VisKey, VisRoot } from "../style/Icons";
import Switch from "@mui/material/Switch";
import ModalVisual from "../../module/modal/ModalVisual";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import styled from "styled-components";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import axios from "axios";

const VisualizationNav = styled.nav`
  height: 30%;
  width: 250px;
  float: right;
  position: absoulute;
`;
function ElementHover({ icon, element }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography aria-owns={open ? "mouse-over-popover" : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <div>
          {icon}
          {element.source}
        </div>
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          <div>
            <div>user: {element.source}</div>
            <div>name: {element.name}</div>
            <div>access key: {element.target}</div>
            <div>email: {element.email}</div>
            <div>phone number: {element.phone}</div>
            <div>
              scanning result:{element.warningStatusInfo === "0001" && <span>잘못된 구성</span>}
              {element.warningStatusInfo === "0010" && <span>권한 분리 추천</span>}
              {element.warningStatusInfo === "0011" && <span>잘못된 구성 & 권한 분리 추천</span>}
              {element.warningStatusInfo === "0000" && <span>해당 없음</span>}
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}

const Visualization = () => {
  const [visualData, setVisualData] = useState([]);
  const fetchVisualData = async () => {
    const response = await axios.get("http://54.180.115.206:8000/api/visualization");
    setVisualData(response);
    console.log("visual", response);
    console.log("visualdata", visualData);
  };
  useEffect(() => {
    fetchVisualData();
  }, []);
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
        source: "user1",
        target: "accesskey6",
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
        source: "user3",
        target: "accesskey15",
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
      {
        source: "user6",
        target: "accesskey12",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0000", //권한 분리 추천
      },
      {
        source: "user7",
        target: "accesskey14",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0010", //권한 분리 추천
      },
      {
        source: "user8",
        target: "accesskey18",
        name: "suheon",
        email: "asdf@naver.com",
        phone: "010-1234-8756",
        warningStatusInfo: "0011", //권한 분리 추천
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
        source: "awsGroup3",
        target: "user4",
      },
      {
        source: "awsGroup4",
        target: "user5",
      },
      {
        source: "awsGroup5",
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
      {
        source: "root1",
        target: "awsGroup3",
      },
    ],
  };
  const targetGroup = data.awsGroup.map((v, i) => {
    return v.target;
  });
  const [noGroup, setNoGroup] = useState([]);
  const [yesGroup, setYesGroup] = useState([]);
  const reArrayUser = () => {
    for (let j = 0; j < data.user.length; j++) {
      if (targetGroup.includes(data.user[j].source)) {
        setYesGroup((prev) => [...prev, data.user[j]]);
      } else {
        setNoGroup((prev) => [...prev, data.user[j]]);
      }
    }
  };
  useEffect(() => {
    reArrayUser();
  }, []);
  const userElement = [...yesGroup, ...noGroup];

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
    event.preventDefault();
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
        width: 70,
        fontWeight: "bold",
        fontSize: "1.2em",
      },
      data: {
        label: (
          <div>
            <VisRoot />
            {v.source}
          </div>
        ),
      },
      position: { x: 700, y: 50 },
    };
  });
  const elementNogroup = [
    {
      id: "Nogroup",
      type: "default",
      style: { border: "2px solid black", width: 50, height: 50, fontWeight: "bold", fontSize: "1.1em" },
      data: { label: "No Group" },
      position: { x: (1100 / (data.awsGroup.length + 2)) * (data.awsGroup.length + 1) + 50, y: 200 },
    },
  ];
  //
  const elementOrgGroup = data.orgGroup.map((v, i) => {
    if (orgChecked === true) {
      return {
        id: v.source,
        type: "default",
        style: { border: "5px solid #94B693", width: 50 },
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
          y: 100,
        },
      };
    } else {
      return [];
    }
  });
  const elementAwsGroup = data.awsGroup.map((v, i) => {
    if (awsChecked === true) {
      if (v.source !== "") {
        return {
          id: v.source,
          type: "default",
          style: { border: "5px solid #91B3E1", width: 50 },
          data: {
            label: (
              <div>
                <VisGroup />
                {v.source}
              </div>
            ),
          },
          position: {
            x: (1100 / (data.awsGroup.length + 2)) * (i + 1) + 50,
            y: 200,
          },
        };
      } else return [];
    } else {
      return [];
    }
  });
  const elementUser = userElement.map((v, i) => {
    return {
      id: v.source,
      type: "default",
      style:
        scanChecked === true
          ? v.warningStatusInfo === "0001"
            ? { border: "5px solid #FA95EC", width: 50 }
            : v.warningStatusInfo === "0010"
            ? { border: "5px solid #FFFD91", width: 50 }
            : v.warningStatusInfo === "0011"
            ? { border: "5px solid #F4ABA1", width: 50 }
            : { border: "1px solid #3B434D", width: 50 }
          : { border: "1px solid #3B434D", width: 50 },
      data: {
        label: (
          <div>
            <ElementHover icon={<VisUser />} element={v} />
          </div>
        ),
      },
      position: {
        x: (1250 / (userElement.length + 1)) * (i + 1),
        y: 400,
      },
    };
  });
  const elementKey = userElement.map((v, i) => {
    return {
      id: v.target,
      type: "default",
      style: { width: 50 },
      data: {
        label: (
          <div>
            <VisKey />
            {v.target}
          </div>
        ),
      },
      position: {
        x: (1250 / (data.user.length + 1)) * (i + 1),
        y: 570,
      },
    };
  });
  const rootToGroup = data.root.map((v, i) => {
    return {
      id: v.source + "to" + "Nogroup",
      source: v.source,
      target: "Nogroup",
      type: "straight",
    };
  });
  const rootToNoGroup = data.root.map((v, i) => {
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

  const noGroupToUser = noGroup.map((v, i) => {
    return {
      id: "noGroupto" + v.source,
      source: "Nogroup",
      target: v.source,
      type: "straight",
    };
  });
  const userToKey = userElement.map((v, i) => {
    return {
      id: v.source + "to" + v.target,
      source: v.source,
      target: v.target,
      type: "straight",
    };
  });
  const elementConnect = [...rootToGroup, ...orgGroupToUser, ...awsGroupToUser, ...userToKey, ...noGroupToUser, ...rootToNoGroup];
  const elements = [...elementRoot, ...elementOrgGroup, ...elementAwsGroup, ...elementUser, ...elementKey, ...elementNogroup, ...elementConnect];
  const uniqueElements = _.uniqBy(elements, "id");
  const [tab, setTab] = useState(0);
  const handleTabClick = (event, tabNumber) => {
    setTab(tabNumber);
  };

  const Root1 = () => <ReactFlow elements={uniqueElements} onElementClick={onElementClick} />;

  const Root2 = () => <ReactFlow elements={uniqueElements} onElementClick={onElementClick} />;

  const Root3 = () => <ReactFlow elements={uniqueElements} onElementClick={onElementClick} />;
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
            <div style={{ paddingTop: "20px" }}>
              <div>
                <Switch checked={awsChecked} onChange={awsHandleChange} inputProps={{ "aria-label": "controlled" }} color="primary" />
                <strong style={{ fontSize: "20px" }}>AWS 그룹</strong>
              </div>
              <div>
                <Switch checked={orgChecked} onChange={orgHandleChange} inputProps={{ "aria-label": "controlled" }} color="success" />
                <strong style={{ fontSize: "20px" }}>권한 분리 그룹</strong>
              </div>
              <div>
                <Switch checked={scanChecked} onChange={scanHandleChange} inputProps={{ "aria-label": "controlled" }} color="error" />
                <strong style={{ fontSize: "20px" }}>스캐닝 결과 반영</strong>
              </div>
            </div>
            <div style={{ paddingLeft: "65px" }}>
              <div>
                <CircleIcon style={{ color: "#FA95EC" }} /> <strong style={{ verticalAlign: "super" }}>잘못된 구성</strong>
              </div>
              <div>
                <CircleIcon style={{ color: "#F4ABA1" }} /> <strong style={{ verticalAlign: "super" }}>권한 분리</strong>
              </div>
              <div>
                <CircleIcon style={{ color: "#FFFD91" }} /> <strong style={{ verticalAlign: "super" }}>둘 다 해당</strong>
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
