import React, { useContext } from "react"
import { ThemeContext } from "../../../providers/ThemeProvider"
import styled from "styled-components"
import { HeaderChildProps, booleanWrapper } from "../HeaderTypes"

const Wrapper = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }: booleanWrapper) =>
    sidebar &&
    `
			right: 18%;
			top: 1.4rem;
		
			@media (max-width: 960px) {
				right: 35%;
				position: fixed;
			}
		
			@media (max-width: 600px) {
				right: 66%;
			}
	`}
`
type BarProps = {
  top?: boolean
  mid?: boolean
  bottom?: boolean
  sidebar: boolean
  theme: string
}

const Bar = styled.div`
  width: 1.6rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: #212121;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms, box-shadow 250ms,
    background-color 500ms;

  @media (max-width: 600px) {
    width: 1.6rem;
  }

  ${({ top, sidebar, theme }: BarProps) =>
    top &&
    sidebar &&
    `
    background-color: ${theme === `light` ? `#212121` : `#fff`};
    transform: translateY(8px) rotate(-135deg);
    
`}

  ${({ mid, sidebar }: BarProps) =>
    mid &&
    sidebar &&
    `
    transform: scale(0);
    `}

${({ bottom, sidebar, theme }: BarProps) =>
    bottom &&
    sidebar &&
    `
        background-color: ${theme === `light` ? `#212121` : `#fff`};
        transform: translateY(-6px) rotate(-45deg);
`}
`

const Hamburger: React.FunctionComponent<HeaderChildProps> = ({ sidebar, toggle }: HeaderChildProps) => {
  const context = useContext(ThemeContext)
  const theme = context.theme

  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar sidebar={sidebar} theme={theme} top={true} />
      <Bar sidebar={sidebar} theme={theme} mid={true} />
      <Bar sidebar={sidebar} theme={theme} bottom={true} />
    </Wrapper>
  )
}

export default Hamburger
