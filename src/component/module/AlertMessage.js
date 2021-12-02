import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import styled from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const TransToast = styled.div`
  position: absolute;
  width: 30%;
  height: 100px;
`;

function AlertMessage() {
  const [isActive, setIsActive] = useState(false);
  function onClick() {
    setIsActive((prev) => !prev);
  }
  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }, [isActive]);
  return (
    <div>
      <button onClick={onClick}>click</button>
      <TransToast>
        {isActive && (
          <Alert icon={<ErrorOutlineIcon style={{ fontSize: "50px" }} />} severity="error" style={{ textAlign: "center", fontSize: "20px" }}>
            <div style={{ paddingTop: "12px" }}>User1 - 위험한 로그 발생</div>
          </Alert>
        )}
      </TransToast>
    </div>
  );
}

export default AlertMessage;
