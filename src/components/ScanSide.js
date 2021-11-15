import React, { useState } from "react";
import { Hidemenu, Showmenu } from "../style/styled-compo";
import MenuIcon from "@mui/icons-material/Menu";

const ToggleSide = () => {
  const [openMenu, setopenMenu] = useState(false);
  const onClick = () => {
    setopenMenu(!openMenu);
  };
  const data = ["user1", "user2", "user3", "user4", "user5", "user6", "user7"];
  return (
    <div>
      {openMenu ? (
        <Showmenu>
          <MenuIcon onClick={onClick} />
          <ul>
            {data.map((user) => (
              <li>
                <button>{user}</button>
              </li>
            ))}
          </ul>
        </Showmenu>
      ) : (
        <Hidemenu>
          <MenuIcon onClick={onClick} />
        </Hidemenu>
      )}
    </div>
  );
};

export default ToggleSide;
