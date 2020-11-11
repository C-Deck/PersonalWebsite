import React, { useContext } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { Header } from "../../../theme/index"
import { Container, Button } from "../../common/index"
import dev from "../../../assets/illustrations/dev.svg"
import styled from "styled-components"
import overlayIllustration from "../../../assets/illustrations/overlay.svg"

const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`

const IntroWrapper = styled.div`
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

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === `light` ? `#212121` : `#fff`)};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === `light` ? `unset` : `difference`)};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === `light` ? `#707070` : `#e6e6e6`)};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === `light` ? `unset` : `difference`)};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`

const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`

type IntroProps = {
  name: string
}

export const Intro: React.FunctionComponent<IntroProps> = ({ name = `Clint Decker` }) => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={context.theme}>
          <h1>Hi There!</h1>
          <h4>I’m {name} and I’m a Software Engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Clint and I’m a Software Engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
