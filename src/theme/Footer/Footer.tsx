import React from "react"
import footerIllustration from "../../assets/illustrations/footer.svg"
import styled from "styled-components"
import { Container } from "../../components/common/index"
import social from "./social.json"

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`

const Details = styled.div`
  h2,
  a,
  span {
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`

export const Footer = () => {
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <h2>Clint Decker</h2>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | by{` `}
            <a href="https://clintjdecker.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
              C-Deck
            </a>
          </span>
        </Details>
        <Links>
          {social.map(({ id, name, link, icon }: any) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  )
}
