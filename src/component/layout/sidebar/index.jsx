import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import sidebarData from './data'
import Row from './row'

const Nav = styled.nav`
  height: 100%;
  width: 250px;
  background-color: #3b434d;
`

const NavListWrapper = styled.ul`
  padding: 0px 20px;
  margin: 0px;
  transition: all 0.5s ease-in;
  overflow: hidden;
`

const ChildrenWrapper = styled.ul`
  margin: 0px;
  transition: all 0.3s ease-in;
  overflow: hidden;
  height: 0px;
  margin: 0px -20px;
  padding: 0px 20px;
`

const Sidebar = () => {
  return (
    <Nav>
      <Logo />
      <NavListWrapper>
        {sidebarData.map((v, i) => {
          if (v.children === undefined) {
            return <Row key={`row-${i}`} {...v} />
          }

          return (
            <React.Fragment key={`row-${i}`}>
              <Row {...v} />
              <ChildrenWrapper id={v.text}>
                {v.children.map((child, index) => (
                  <Row key={`child-${i}-${index}`} {...child} isChild={true} />
                ))}
              </ChildrenWrapper>
            </React.Fragment>
          )
        })}
      </NavListWrapper>
    </Nav>
  )
}

export default Sidebar
