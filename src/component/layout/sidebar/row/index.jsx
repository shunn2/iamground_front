import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import IconWrapper from "../../../module/iconWrapper";

const NavList = styled.li`
  list-style: none;
  display: flex;
  align-item: center;
  font-weight: 700;
  padding: 10px 20px;
  cursor: pointer;
  border-top: 1px solid #5e6c70;
  margin: 0px -20px;

  a {
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
  }

  &: last-child {
    border-bottom: 1px solid #5e6c70;
  }
`;

const ChildList = styled.li`
  list-style: none;
  display: flex;
  align-item: center;
  font-weight: 700;
  padding: 10px 40px;
  cursor: pointer;
  border-top: 1px solid #5e6c70;
  margin: 0px -20px;
  background-color: #2c3239;

  a {
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
  }
`;

const SideSpan = styled.span`
  &:hover {
    color: #ffffff;
  }
  fontsize: 18px;
  color: #d6d6d6;
  display: flex;
  align-item: center;
`;

function Row(props) {
  const { link, text, icon, isChild } = props;

  const handleArcodian = (id) => () => {
    const target = document.getElementById(id);

    if (target === null) return;

    if (target.style.height === "90px") {
      target.style.height = "0px";
    } else {
      target.style.height = "90px";
    }
  };

  if (isChild === true) {
    return (
      <ChildList>
        <Link to={link}>
          <IconWrapper>{icon}</IconWrapper>
          <SideSpan>{text}</SideSpan>
        </Link>
      </ChildList>
    );
  }

  return (
    <NavList onClick={handleArcodian(text)}>
      {link !== null ? (
        <Link to={link}>
          <IconWrapper>{icon}</IconWrapper>
          <SideSpan>{text}</SideSpan>
        </Link>
      ) : (
        <React.Fragment>
          <IconWrapper>{icon}</IconWrapper>
          <SideSpan>{text}</SideSpan>
        </React.Fragment>
      )}
    </NavList>
  );
}

export default Row;
