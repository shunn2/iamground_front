import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  height: 15%;
  width: 100%;
  background-color: #fbdddd;
`;

export const Div = styled.div`
  position: fixed;
  right: 0;
  height: 85%;
  bottom: 0;
  width: 85%;
  background-color: #fbdddd;
  overflow: scroll;
`;

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  height: 85%;
  bottom: 0;
  width: 15%;
  background-color: #fbdddd;
`;

export const Hidemenu = styled.nav`
  width: 15%;
  height: 500px;
  position: absolute;
  left: 15%;
  transition: 3s;
  z-index: 40;
`;

export const Showmenu = styled.nav`
  width: 15%;
  height: 500px;
  position: absolute;
  left: 15%;
  transition: 3s;
  z-index: 40;
`;

export const Spanstyle = styled.span`
  font-size: 20px;
`;

export const Transtable = styled.table`
  transform: rotate(90deg);
`;
export const Transth = styled.th`
  transform: rotate(-90deg);
`;
export const Transtd = styled.td`
  transform: rotate(-90deg);
`;
