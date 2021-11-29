import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DvrIcon from "@mui/icons-material/Dvr";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

export const Homeicon = () => {
  return <HomeIcon style={{ marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }} />;
};
export const ScanIcon = () => {
  return <DocumentScannerIcon style={{ marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }} />;
};
export const MonIcon = () => {
  return <DvrIcon style={{ marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }} />;
};
export const VisIcon = () => {
  return <VisibilityIcon style={{ marginRight: "6px", fontSize: "24px", color: "#d6d6d6" }} />;
};
export const Personbutton = () => {
  return <AccountCircleOutlinedIcon sx={{ fontSize: 80 }} style={{ marginRight: "6px", fontSize: "80px", color: "#2C2E31" }} />;
};
export const Groupbutton = () => {
  return <PeopleOutlineIcon sx={{ fontSize: 80 }} style={{ marginRight: "6px", fontSize: "70px", color: "#2C2E31" }} />;
};
export const PowerPbutton = () => {
  return <AccountCircleOutlinedIcon sx={{ fontSize: 80 }} style={{ marginRight: "6px", fontSize: "80px", color: "#FA255D" }} />;
};
export const VisGroup = () => {
  return <PeopleOutlineIcon style={{ color: "#2C2E31", fontSize: "26px" }} />;
};
export const VisUser = () => {
  return <AccountCircleOutlinedIcon style={{ color: "#2C2E31" }} />;
};
export const VisPUser = () => {
  return <AccountCircleOutlinedIcon style={{ color: "#2C2E31" }} />;
};
export const VisKey = () => {
  return <VpnKeyOutlinedIcon style={{ color: "#2C2E31" }} />;
};
