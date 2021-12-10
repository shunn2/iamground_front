import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import AlertMessage from "../module/AlertMessage";
import ModalInfo from "../module/modal/ModalInfo";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts";
import axios from "axios";

function Test() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const responseAddGroup = await axios.get("http://54.180.115.206:8000/api/monitoring/log");
    setUsers(responseAddGroup.data.users);
    console.log("responseAddGroup", responseAddGroup.data.users);
    console.log("users", users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((v, i) => {
        return <div>{v.userName}</div>;
      })}
    </div>
  );
}

export default Test;
