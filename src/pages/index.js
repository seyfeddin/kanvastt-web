import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import IndexHero from '../views/IndexHero'
import IndexEvents from '../views/IndexEvents'
import IndexNewsletter from '../views/IndexNewsletter'

function Index() {
  return (
    <Layout>
      <Header />
      <IndexHero />
      <IndexEvents />
      <IndexNewsletter />
    </Layout>
  )
}

export default Index
