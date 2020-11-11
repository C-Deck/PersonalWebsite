import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { Container, Card, TitleWrap } from "../../common/index"
import Star from "../../common/Icons/Star"
import Fork from "../../common/Icons/Fork"

import styled from "styled-components"

const Wrapper = styled.div`
  padding: 2rem 0;
`

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === `light` ? `#212121` : `#fff`)};
  }

  p {
    color: ${({ theme }) => (theme === `light` ? `#707070` : `#c7c7c7`)};
  }
`

const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`

const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === `light` ? `#000` : `#fff`)};
    }

    span {
      color: ${({ theme }) => (theme === `light` ? `#000` : `#fff`)};
      margin-left: 0.5rem;
    }
  }
`
const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`

type Key = {
  id: string
  name: string
}

export const Projects: React.FunctionComponent = () => {
  const context = useContext(ThemeContext)
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
              privacy: PUBLIC
              ownerAffiliations: [OWNER]
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }: any) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={context.theme}>
            <Card theme={context.theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={context.theme}>
                  <div>
                    <Star fillColor={context.theme === `light` ? `#000` : `#fff`} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork fillColor={context.theme === `light` ? `#000` : `#fff`} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={context.theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }: Key) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
