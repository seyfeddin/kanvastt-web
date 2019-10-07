import React from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import TwitterLink from "../components/TwitterLink";
import RegisterForm from "../components/RegisterForm";
import EventListing from "../components/EventListing";

const Index = ({ data }) => (
  <Layout>
    <Logo />
    <div class="container">
      <div class="hello">
        <p>
          Merhaba,
          <br />
          Tasarımı sadece estetik olarak görmeyen, tasarımın bir amaç
          doğrultusunda yapılan hareketler bütünü olduğunu bilen herkesi bir
          araya getirmeyi ve topluma yeni tasarımcılar kazandırmayı hedefleyen
          bir topluluğuz.
        </p>
      </div>
      <div class="what-we-do">
        <h2>Ne Yapar?</h2>
        <p>
          Tasarımı sadece estetik olarak görmeyen, tasarımın bir amaç
          doğrultusunda yapılan hareketler bütünü olduğunu bilen herkesi bir
          araya getirmeyi ve topluma yeni tasarımcılar kazandırmayı hedefleyen
          bir topluluktur.
        </p>
      </div>
      <div class="how-to-join">
        <h2>Nasıl Katılırım?</h2>
        <p>
          Tasarımı sadece estetik olarak görmeyen, tasarımın bir amaç
          doğrultusunda yapılan hareketler bütünü olduğunu bilen herkesi bir
          araya getirmeyi ve topluma yeni tasarımcılar kazandırmayı hedefleyen
          bir topluluktur.
        </p>
      </div>
      <TwitterLink />
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <EventListing
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          link={node.frontmatter.link}
          date={node.frontmatter.date}
        />
      ))}
      <RegisterForm />
    </div>
  </Layout>
);

export const query = graphql`
  query EventsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            link
            description
            date(formatString: "DD MMMM YYYY", locale: "tr")
          }
        }
      }
    }
  }
`;

export default Index;
