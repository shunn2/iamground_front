import React from "react";
import faker from "faker/locale/ko";
import "../style/style.css";

faker.seed(100);

const spanStyle = {
  position: "relative",
  top: "100px",
};

function ModalInfo() {
  const infoArr = ["Cloud Name", "User", "Service", "Resource", "Activity", "Reason", "Raw Event"];

  return (
    <div>
      {infoArr.map((info, index) => (
        <span key={index} style={spanStyle}>
          {info}
          {" / "}
          <br />
          <br />
          <br />
        </span>
      ))}
    </div>
  );
}

export default ModalInfo;
