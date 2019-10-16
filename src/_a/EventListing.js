import React from 'react'
import { graphql } from 'gatsby'

export default props => {
  const { site } = useStaticQuery(graphql`
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

  return (
    <div class="home-event">
      <div class="home-event-date">
        <span>YAKINDA</span>
      </div>
      <div class="home-event-info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
