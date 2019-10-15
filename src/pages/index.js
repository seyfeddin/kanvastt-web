import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import TwitterLink from "../components/TwitterLink";
import RegisterForm from "../components/RegisterForm";
import EventListing from "../components/EventListing";
import KommunityLink from "../components/KommunityLink";

const Index = ({ data }) => (
  <Layout>
    <Logo />
    <div class="container">
      <div class="big-text">
        <h1>
          Yepyeni bir tasarım topluluğu <a href="#events">etkinliklere</a>{" "}
          başlıyor.
        </h1>
      </div>
      <div class="hello">
        <p>
          Kanvas, dijital tasarımı sadece estetik olarak değil bir amaç
          doğrultusunda yapılan hareketler bütünü olarak gören herkesi bir araya
          getirmeyi hedefleyen bir topluluktur.
        </p>
      </div>
      <div class="what-we-do">
        <h2>Tasarımcı değil misin?</h2>
        <p>
          Merak duyman yeterli. Hedeflerimizden biri de topluma yeni
          tasarımcılar kazandırmak. Planladığımız etkinlikler arasında sana
          uygun etkinlikler de olacak.
        </p>
      </div>
      <div class="how-to-join">
        <h2>Nasıl Katılabilirim?</h2>
        <p>
          Bizi{" "}
          <a
            href="https://twitter.com/kanvastt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          üzerinden takip edebilir,{" "}
          <a
            href="https://kommunity.com/kanvas-tasarim-toplulugu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kommunity’deki sayfamıza
          </a>{" "}
          kaydolabilirsin. Tüm gelişmelerden ve bazı özel buluşmalardan ilk
          haberdar olmak için ise <a href="#register-form">mail listemize</a>{" "}
          kayıt olman gerek.
        </p>
      </div>
      <div class="links">
        <TwitterLink />
        <KommunityLink />
      </div>
    </div>
    <div id="events">
      <div class="container">
        <h1>Planlanan Etkinlikler</h1>
        <div class="event-container">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <EventListing
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              link={node.frontmatter.link}
              date={node.frontmatter.event_date}
            />
          ))}
        </div>
      </div>
    </div>
    <RegisterForm />
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
            event_date(formatString: "DD MMMM YYYY", locale: "tr")
          }
        }
      }
    }
  }
`;

export default Index;
