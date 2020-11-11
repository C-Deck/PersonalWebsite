import { useContext } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { Container, Button } from "../../common/index"
import dev from "../../../assets/illustrations/skills.svg"

import styled from "styled-components"
import detailsIllustration from "../../../assets/illustrations/details.svg"
import React from "react"

const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`

const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === `dark` ? `#fff` : `#212121`)};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === `light` ? `unset` : `difference`)};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === `dark` ? `#c7c7c7` : `#707070`)};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === `light` ? `unset` : `difference`)};
    }
  }
`

const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`

export const Skills: React.FunctionComponent = () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Clint and I’m a fullstack Software Engineer" />
        </Thumbnail>
        <Details theme={context.theme}>
          <h1>More about me</h1>
          <p>
            I am a Software Engineer who is currently working for Boeing. I'm based out of San Luis Obispo which is
            where I went to school. I graduated from Cal Poly in 2020 with a degree in Computer Science. I have an
            interest in Software Design principals and cloud applications. I am also an avid golfer.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}
