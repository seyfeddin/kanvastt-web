import React from 'react'
import Layout from '../components/Layout'
import { Box } from '../components/Styles'
import Header from '../components/Header'
import IndexHero from '../views/IndexHero'

function Index() {
  return (
    <Layout>
      <Box width={1} maxWidth="780px" mx="auto" px={4}>
        <Header />
        <IndexHero />
      </Box>
    </Layout>
  )
}

export default Index
