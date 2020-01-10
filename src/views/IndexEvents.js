import React from 'react'
import { Title, Section, Container, Box } from '../components/Styles'
import Event from '../components/Event'
import { useStaticQuery, graphql } from 'gatsby'

function Hero() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___event_date }
        filter: { id: { ne: "69ae2a23-afe9-5818-a563-81b520e7cf3c" } }
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
