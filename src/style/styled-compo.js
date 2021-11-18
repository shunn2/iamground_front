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

export const Gdiv = styled.div`
  position: fixed;
  right: 0;
  top: 15%;
  height: 40%;
  width: 85%;
  background-color: #fbdddd;
`;

export const Tdiv = styled.div`
  position: fixed;
  right: 0;
  top: 55%;
  height: 45%;
  width: 85%;
  background-color: #fbdddd;
`;

export const Ctable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 200px;
  border: 3px solid black;
  text-align: center;
`;

// 순서대로 1,2,3,4분면 배치용 div
export const Div1 = styled.div`
  position: fixed;
  right: 0;
  top: 15%;
  height: 42.5%;
  width: 42.5%;
  background-color: #fbdddd;
`;

export const Div2 = styled.div`
  position: fixed;
  left: 15%;
  top: 15%;
  height: 42.5%;
  width: 42.5%;
  background-color: #fbdddd;
`;

export const Div3 = styled.div`
  position: fixed;
  left: 15%;
  top: 57.5%;
  height: 42.5%;
  width: 42.5%;
  background-color: #fbdddd;
`;

export const Div4 = styled.div`
  position: fixed;
  right: 0;
  top: 57.5%;
  height: 42.5%;
  width: 42.5%;
  background-color: #fbdddd;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin: 0;
`;
