import Head from 'next/head'
import React from 'react'

function Seo() {
  const site = {
    title: 'Kanvas Tasarım Topluluğu',
    description: 'Kanvas Tasarım Topluluğu Web Sitesi',
    url: 'https://kanvas.istanbul',
    twitter: '@KanvasTT',
    instagram: '@kanvas_tt'
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{site.title}</title>
      <meta name="description" content={site.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:creator" content={site.twitter} />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:image" content={`${site.url}/static/og-image.jpg`} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={site.title} />
      <meta property="og:url" content={site.url} />
      <meta property="og:image" content={`${site.url}/static/og-image.jpg`} />

      <meta name="theme-color" content="#085147" />

      <link
        rel="preload"
        href="/static/fonts/garnett_regular-webfont.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/garnett_medium-webfont.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/static/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`/static/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/static/favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href={`/static/safari-pinned-tab-fill.svg`}
        color="#086054"
      />
    </Head>
  )
}

export default Seo
