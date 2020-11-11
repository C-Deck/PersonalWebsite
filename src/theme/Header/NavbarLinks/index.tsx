import React, { useContext } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { ToggleTheme } from "../ToggleTheme/index"
import styled from "styled-components"

type isDesktop = {
  desktop: boolean
}

export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === `light` ? `#000` : `#fff`)};
    }
  }

  ${({ desktop }: isDesktop) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

const NavbarLinks: React.FunctionComponent<isDesktop> = ({ desktop }: isDesktop) => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={context.theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
