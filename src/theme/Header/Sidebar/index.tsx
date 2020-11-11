import React, { useContext } from "react"
import { ThemeContext } from "../../../providers/ThemeProvider"
import NavbarLinks from "../NavbarLinks/index"

import styled from "styled-components"
import { HeaderChildProps, booleanWrapper } from "../HeaderTypes"

export const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: ${({ theme }) => (theme === `light` ? `#fff` : `#212121`)};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ sidebar }: booleanWrapper) =>
    sidebar &&
    `
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`

const Sidebar: React.FunctionComponent<HeaderChildProps> = ({ sidebar, toggle }: HeaderChildProps) => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)} theme={context.theme}>
      <NavbarLinks desktop={true} />
    </Wrapper>
  )
}

export default Sidebar
