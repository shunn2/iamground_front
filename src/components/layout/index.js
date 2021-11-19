import React from "react";
import { LayoutContent } from "../../style/styled-compo";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout(props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Topbar />
      <Sidebar />
      <LayoutContent>{children}</LayoutContent>
    </React.Fragment>
  );
}

export default Layout;
