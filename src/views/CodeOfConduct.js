import React from 'react'
import { Title, Section, Container, HTMLText } from '../components/Styles'
import { useStaticQuery, graphql } from 'gatsby'

function CodeOfConductDetail() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/kanvas-topluluk-politikası.md/" }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  return (
    <Section id="code-of-conduct" bg="primary" color="white">
      <Container>
        {allMarkdownRemark.edges.length && (
          <Title>{allMarkdownRemark.edges[0].node.frontmatter.title}</Title>
        )}
        {allMarkdownRemark.edges.length && (
          <HTMLText
            mt={4}
            dangerouslySetInnerHTML={{
              __html: allMarkdownRemark.edges[0].node.html
            }}
          ></HTMLText>
        )}
      </Container>
    </Section>
  )
}

export default CodeOfConductDetail
