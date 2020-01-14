import Header from './header'
import Footer from './footer'
import React from 'react'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div id="newsletter" />
      <Footer />
    </>
  )
}

export default Layout
