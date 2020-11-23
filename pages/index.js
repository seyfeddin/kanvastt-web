import Layout from '../components/layout'
import SocialLinks from '../components/social-links'
import React from 'react'
import Event from '../components/event'
import { isPast } from 'date-fns'
import fetch from 'isomorphic-unfetch'

function HomePage({ events }) {
  const featureEvents = events
    .filter(event => !event.datetime || !isPast(new Date(event.datetime)))
    .sort(function(a, b) {
      if (a.datetime != null && b.datetime != null) {
        return a.datetime > b.datetime
      }
      if (a.datetime != null && b.datetime == null) {
        return -1
      }
      return 0
    })

  const pastEvents = events.filter(
    event => event.datetime && isPast(new Date(event.datetime))
  )

  return (
    <Layout>
      <section className="py-64">
        <div className="container">
          <h1 className="c-light text-hero-title">
            dijital ürün tasarımı <br/>topluluğu.
          </h1>
        </div>
      </section>
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/events?_sort=datetime:desc`)
  const events = await res.json()
  return { events }
}

export default HomePage
