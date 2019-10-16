import React from 'react'
import {
  Title,
  SubTitle,
  Text,
  Section,
  Container,
  Box
} from '../components/Styles'
import { useStaticQuery, graphql } from 'gatsby'

function Hero() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              tags
              link
              description
              event_date(formatString: "DD MMMM YYYY", locale: "tr")
            }
          }
        }
      }
    }
  `)

  console.log(allMarkdownRemark)

  return (
    <Section bg="light" color="primary">
      <Container>
        <Title>Planlanan Etkinlikler</Title>

        {allMarkdownRemark.edges.map(event => (
          <Box key={event.node.id}>
            <SubTitle mt={5}>{event.node.frontmatter.title}</SubTitle>
            <Text mt={2}>{event.node.frontmatter.description}</Text>
          </Box>
        ))}
      </Container>
    </Section>
  )
}

export default Hero
