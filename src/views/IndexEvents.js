import React from 'react'
import { Title, Section, Container, Box } from '../components/Styles'
import Event from '../components/Event'
import { useStaticQuery, graphql } from 'gatsby'

function Hero() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___event_date }
        filter: { fileAbsolutePath: { regex: "/data/events/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tags
              link
              description
              event_date(locale: "tr")
              thumbnail
              location
            }
          }
        }
      }
    }
  `)

  return (
    <Section id="events" bg="light" color="primary">
      <Container>
        <Title>Gelecek Etkinlikler</Title>

        <Box mt={4}>
          {allMarkdownRemark.edges.map(event => (
            <Event key={event.node.id} {...event.node.frontmatter} />
          ))}
        </Box>
      </Container>
    </Section>
  )
}

export default Hero
