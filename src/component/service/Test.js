import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import AlertMessage from "../module/AlertMessage";
import ModalInfo from "../module/modal/ModalInfo";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts";

function Test() {
  const [toast, setToast] = useState("Toast PopUp Test");

  const onClickToastPopup = (type) => {
    if (type < 5) {
      setToast("User1에서 조직도 기반 과도한 권한 획득이 발생했습니다.");
      ToastsStore.success(toast);
    } else {
      setToast("User1에서 미확인 IP로의 접근이 발생했습니다.");
      ToastsStore.warning(toast);
    }
  };
  return (
    <>
      <div>
        <button
          style={{ width: "100px", height: "30px", color: "#d6d6d6" }}
          onClick={() => {
            onClickToastPopup(Math.floor(Math.random() * 10));
          }}
        >
          Toast
        </button>
        <ToastsContainer position={ToastsContainerPosition.BOTTOM_RIGHT} store={ToastsStore} lightBackground />
      </div>
    </>
  );
}

export default Test;
