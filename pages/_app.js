import Router from 'next/router'
import * as gtag from '../lib/gtag'
import Seo from '../components/seo'

import '../styles/app.css'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
