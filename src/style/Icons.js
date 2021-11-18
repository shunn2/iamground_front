import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DvrIcon from "@mui/icons-material/Dvr";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@material-ui/core";
import { pink } from "@mui/material/colors";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { HiOutlineUserGroup } from "react-icons/hi";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

export const Homeicon = () => {
  return <HomeIcon />;
};
export const ScanIcon = () => {
  return <DocumentScannerIcon />;
};
export const MonIcon = () => {
  return <DvrIcon />;
};
export const VisIcon = () => {
  return <VisibilityIcon />;
};
export const Personbutton = () => {
  return <AccountCircleOutlinedIcon sx={{ fontSize: 80 }} />;
};
export const Groupbutton = () => {
  return <PeopleOutlineIcon sx={{ fontSize: 80 }} />;
};
export const PowerPbutton = () => {
  return <AssignmentIndIcon sx={({ color: pink[800] }, { fontSize: 80 })} />;
};
