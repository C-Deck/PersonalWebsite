import React, { useState } from "react"
import Navbar from "./Navbar/index"
import Hamburger from "./Hamburger/index"
import Sidebar from "./Sidebar/index"
import styled from "styled-components"
import { booleanWrapper } from "./HeaderTypes"

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }: booleanWrapper) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`

export const Header = () => {
  const [sidebar, toggle] = useState(false)

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
