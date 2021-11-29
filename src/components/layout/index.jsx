import styled from 'styled-components'
import React from 'react'
import Topbar from './topbar'
import Sidebar from './sidebar'

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const LayoutContent = styled.div`
  flex: 1;
  height: 100%;
  background-color: #efefef;
`

const ChildrenWrapper = styled.div`
  padding: 30px;
  height: calc(100% - 110px);
`

function Layout(props) {
  const { children } = props
  return (
    <LayoutWrapper>
      <Sidebar />
      <LayoutContent>
        <Topbar />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LayoutContent>
    </LayoutWrapper>
  )
}

export default Layout
