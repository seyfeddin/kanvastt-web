import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import IndexHero from '../views/IndexHero'
import IndexEvents from '../views/IndexEvents'

function Index() {
  return (
    <Layout>
      <Header />
      <IndexHero />
      <IndexEvents />
    </Layout>
  )
}

export default Index
