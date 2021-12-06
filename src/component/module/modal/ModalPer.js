import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Clear } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ModalPer = ({ modalOpen, setmodalOpen, Id }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    height: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    overflowX: "auto",
    display: "flex",
    flexDirection: "row",
  };
  const Nav = styled.nav`
    top: 100px;
    height: 100%;
    width: 15%;
    background-color: #efefef;
    overflow: auto;
  `;

  const NavListWrapper = styled.ul`
    padding: 0px 0px;
    margin: 0px;
    overflow: hidden;
  `;
  const NavList = styled.span`
    display: flex;
    align-item: center;
    font-size: 25px;
    color: #fbdddd;
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
    &:visited {
      text-decoration: none;
      color: #ffffff;
    }
  `;
  const PolicyRecommend = styled.div`
    width: 50%;
    font-size: 30px;
    text-align: center;
    border: 1px solid black;
  `;
  const [recommend, setRecommend] = useState(Id.recommand);
  const index = Id.reasonCategory.substring(0, 3);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const MainText = () => {
    if (index === "과도한" || index === "조직도") {
      const policyName = Object.keys(recommend);
      return (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PolicyRecommend>{policyName[value]}</PolicyRecommend>
            <PolicyRecommend>추천</PolicyRecommend>
          </div>
          {recommend[policyName[value]].hasOwnProperty("action_method") ? (
            recommend[policyName[value]].action_method.map((v, i) => {
              return (
                <div>
                  <div>{recommend[policyName[value]].relation}</div>
                  <div>
                    <a target="_blank" href={v.url}>
                      삭제 방법 보기
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "50%", height: "100%" }}>
                <div style={{ border: "1px solid black", height: "50%" }}>
                  <pre style={{ fontWeight: "bold" }}>{JSON.stringify(recommend[policyName[value]].origin, null, 2)}</pre>
                </div>
                <div style={{ border: "1px solid black", height: "50%" }}></div>
              </div>
              <div style={{ width: "50%", height: "100%", border: "1px solid black" }}>
                <div style={{ border: "1px solid black", height: "50%" }}>
                  <pre style={{ fontWeight: "bold" }}>{JSON.stringify(recommend[policyName[value]].new, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}
        </>
      );
    } else {
      // recommend.action_method((v, i) => {
      //   return (
      //     <div>
      //       <div>
      //         <a target="_blank" href={v.url}>
      //           삭제 방법 보기
      //         </a>
      //       </div>
      //     </div>
      //   );
      // });
      return <div>하는 중입니다</div>;
    }
  };
  const menu = [];
  for (let i = 0; i < Object.keys(recommend).length; i++) {
    menu.push(i + 1);
  }
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  function ModalSidebar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const onMenuClick = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "30px", paddingLeft: "60px" }}>목록</div>
            <div style={{ float: "right" }}>{menuOpen ? <ArrowBackIosNewIcon onClick={onMenuClick} /> : <ArrowForwardIosIcon onClick={onMenuClick} />}</div>
          </div>
          <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: "100%" }}>
            <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderColor: "divider", width: "100%" }}>
              {menu.map((v, i) => {
                return <Tab label={"권고사항" + v} {...a11yProps(i)} />;
              })}
            </Tabs>
          </Box>
        </div>
      </>
    );
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ width: "15%" }}>
            <ModalSidebar menulist={menu} />
          </div>
          <div style={{ width: "85%", height: "100%" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <MainText />
            </Typography>
            <Clear
              style={{ fontSize: "26px", cursor: "pointer" }}
              onClick={() => {
                setmodalOpen(false);
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalPer;
