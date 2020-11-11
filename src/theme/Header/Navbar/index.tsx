import styled from "styled-components"
import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { Container } from "../../../components/common/index"
import NavbarLinks from "../NavbarLinks/index"

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.a`
  color: ${({ theme }) => (theme === `light` ? `#000` : `#fff`)};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === `light` ? `unset` : `difference`)};
  }
`

const Navbar = () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={context.theme}>
        Clint Decker
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}

export default Navbar
