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
  const infoDetail = [
    "Cloud Name / IAMGROUND_CLOUD",
    "User / User1: arn:aws:iam::284264230655:user/User1",
    "Service / S3: arn:aws:s3:::Iamground",
    "Activity / CreateBucket",
    "Reason / dangerous Access",
  ];
  return (
    <div>
      {infoDetail.map((info, index) => (
        <>
          <span key={index} style={spanStyle}>
            {info}
          </span>
          <br />
          <br />
          <br />
        </>
      ))}
    </div>
  );
}

export default ModalInfo;
