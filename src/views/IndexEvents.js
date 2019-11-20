import React from 'react'
import { Title, Section, Container, Box } from '../components/Styles'
import Event from '../components/Event'
import { useStaticQuery, graphql } from 'gatsby'

function Hero() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___event_date }
      ) {
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
