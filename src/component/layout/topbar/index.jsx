import React, { useState, useEffect, useRef } from "react";
import { Menu, AccountCircle, Settings, Notifications } from "@mui/icons-material";
import styled from "styled-components";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: calc(100% - 1px);
  background-color: #3b434d;
  border-left: 1px solid #5e6c70;
`;

function Topbar() {
  const [toast, setToast] = useState("");
  const onClickToastPopup = (message) => {
    let type = Math.floor(Math.random() * 10);
    if (type < 5) {
      setToast(message);
      ToastsStore.success(toast);
    } else {
      setToast(message);
      ToastsStore.warning(toast);
    }
  };

  const onClickToastPopup = (message) => {
    let type = Math.floor(Math.random() * 10);
    if (type < 5) {
      setToast(message);
      ToastsStore.success(toast);
    } else {
      setToast(message);
      ToastsStore.warning(toast);
    }
  };
  // const [a, setA] = useState("User1에서 조직도 기반 과도한 권한 획득이 발생했습니다.");

  // useEffect(() => {
  //   // const interval =
  //   setInterval(async () => {
  //     const response = await axios.get("http://54.180.115.206:8000/api/monitoring/toast");

  //     // if (response.data.toastList.length === 0) {
  //     //   console.log("No Data");
  //     // }
  //     // else {
  //       console.log("Response", response);
  //       const message = response.data.toastList;
  //       if (Math.floor(Math.random() * 10)<5)
  //       ToastsStore.success(message);
  //       else
  //       ToastsStore.warning(message);
  //     // }

  //   }, 1000);
  //   // return () => clearInterval(interval);
  // },[]);

  const [notificationList, setNotificationList] = useState(["미확인 알림 없음"]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationListOpen, setNotificationListOpen] = useState(false);

  const AddNotification = () => {
    if (notificationCount === 0) {
      setNotificationCount(1);
      setNotificationList(["User1에서 미확인 IP로의 접근이 발생했습니다."]);
    } else {
      setNotificationCount(notificationCount + 1);
      notificationList.push("User1에서 미확인 IP로의 접근이 발생했습니다.");
      setNotificationList(notificationList);
    }
  };

  const ResetNotificationList = () => {
    if (notificationListOpen) {
      setNotificationList(["미확인 알림 없음"]);
      setNotificationCount(0);
    }
    setNotificationListOpen(!notificationListOpen);
  };

  const notiList = () => {
    return (
      <>
        <div
          style={{
            zIndex: "1000",
            border: "1px solid #3B434D",
            overflowY: "scroll",
            height: "249px",
            width: "500px",
            position: "absolute",
            top: "50px",
            right: "22px",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          {notificationList.map((v, i) => {
            return <div style={{ color: "#77788D", fontSize: "18px", padding: "5px", margin: "5px", backgroundColor: "#FBF8E3", borderRadius: "5px" }}>{v}</div>;
          })}
        </div>
      </>
    );
  };

  return (
    <Header>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <div style={{ height: "50px", display: "flex", alignItems: "center", width: "85%" }}></div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", width: "30px", justifyContent: "center", cursor: "pointer" }}>
          {/* <button style={{ width: "100px", height: "30px", color: "#d6d6d6" }} onClick={()=> {onClickToastPopup(Math.floor(Math.random() * 10))}}>Toast </button> */}
          <ToastsContainer position={ToastsContainerPosition.BOTTOM_RIGHT} store={ToastsStore} lightBackground />
        </div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", width: "30px", justifyContent: "center", cursor: "pointer" }}>
          <button
            style={{ width: "100px", height: "30px", color: "#d6d6d6" }}
            onClick={() => {
              AddNotification();
            }}
          >
            Noti{" "}
          </button>
        </div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", width: "40px", justifyContent: "center", cursor: "pointer" }}>
          <button style={{ backgroundColor: "#3B434D", border: "0" }} onClick={() => ResetNotificationList()}>
            {" "}
            <Notifications style={{ width: "30px", height: "30px", color: "#d6d6d6" }} />{" "}
          </button>
        </div>
        <div
          style={{
            color: "white",
            border: "1px solid red",
            borderRadius: "20px",
            width: "15px",
            height: "15px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            backgroundColor: "red",
            position: "relative",
            top: "-10px",
            left: "-25px",
          }}
        >
          {notificationCount}
        </div>
        {notificationListOpen ? notiList() : ""}
        <div style={{ height: "50px", display: "flex", alignItems: "center", width: "40px", justifyContent: "center", cursor: "pointer" }}>
          <Settings style={{ width: "30px", height: "30px", color: "#d6d6d6" }} />
        </div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", width: "40px", justifyContent: "center", cursor: "pointer" }}>
          <Link to="/login">
            <AccountCircle style={{ width: "30px", height: "30px", color: "#d6d6d6" }} />
          </Link>
        </div>
      </div>
    </Header>
  );
}

export default Topbar;
