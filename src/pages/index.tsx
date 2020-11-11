import React from "react"
import { Layout, SEO } from "../components/common/index"
import { Intro, Skills, Contact, Projects } from "../components/landing/index"

type Props = {
  //
}

export default class IndexPage extends React.Component<Props> {
  public render() {
    return (
      <Layout>
        <SEO />
        <Intro name="Clint Decker" />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    )
  }
}
