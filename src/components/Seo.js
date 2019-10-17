import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const { title, description, social } = site.siteMetadata

  return (
    <Helmet>
      <html lang="tr" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:creator" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:image"
        content="https://kanvas.istanbul/img/og-image.jpg"
      />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content="https://kanvas.istanbul/img/og-image.jpg"
      />

      <link
        rel="preload"
        href="/fonts/manrope-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/manrope-medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`/img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/img/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`/img/safari-pinned-tab-fill.svg`}
        color="#086054"
      />
      <meta name="theme-color" content="#fff" />
      <meta name="yandex-verification" content="a200a0818557301d" />
    </Helmet>
  )
}

export default Seo
