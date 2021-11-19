import styled from "styled-components";
//#18b7be
export const Iamground = styled.h3``;

export const Header = styled.header`
  position: fixed;
  height: 64px;
  left: 250px;
  width: calc(100% - 250px);
  background-color: #efefef;
`;

export const Nav = styled.nav`
  position: fixed;
  height: 100%;
  width: 250px;
  background-color: #b7d6da;
`;

export const LayoutContent = styled.div`
  position: fixed;
  top: 64px;
  left: 250px;
  width: calc(100% - 310px);
  height: calc(100% - 124px);
  padding: 30px;
  background-color: #efefef;
`;

export const Div = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const NavListWrapper = styled.ul`
  padding: 20px 20px;
  margin: 0px;
`;

export const NavList = styled.li`
  list-style: none;
  display: flex;
  align-item: center;
  font-size: 25px;
  font-weight: 700;
  padding: 30px 0px 30px 0px;
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

export const Gdiv = styled.div`
  height: 45%;
  width: 100%;
`;

export const Tdiv = styled.div`
  height: 55%;
  width: 100%;
`;
// `
//   margin-left: auto;
//   margin-right: auto;
//   width: 100%;
//   height: 250px;
//   border: 3px solid black;
//   text-align: center;
//   const StyledTable = styled.table`
export const SideSpan = styled.span`
  &:hover {
    font-size: 1.2em;
    padding: 3px;
    font-weight: bold;
  }
  color: #606062;
`;
export const Ctable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  width: 100%;
  height: 250px;
  text-align: center;
  tbody {
    vertical-align: top;
    background-color: white;
  }
  td,
  th {
    border: none;
  }
  td,
  th {
    border: 1px solid;
  }
  td {
    padding: 5px 10px;
  }
  tbody tr {
    :hover {
      background-color: #b7d6da;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

// 순서대로 1,2,3,4분면 배치용 div
export const Div1 = styled.div`
  height: 100%;
  width: 50%;
`;

export const Div2 = styled.div`
  height: 100%;
  width: 50%;
`;

export const Div3 = styled.div`
  height: 100%;
  width: 50%;
`;

export const Div4 = styled.div`
  height: 100%;
  width: 50%;
`;

export const Title = styled.h2`
  padding-top: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  height: 20px;
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

export const MonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30%;
`;
export const MonPower = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30%;
`;
export const MonUser = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30%;
`;

export const UserName = styled.h2`
  text-align: center;
  margin: 0px;
`;
