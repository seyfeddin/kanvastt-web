import Layout from '../components/layout'
import SocialLinks from '../components/social-links'
import React from 'react'
import Event from '../components/event'
import { isPast } from 'date-fns'
import fetch from 'isomorphic-unfetch'

function HomePage({ events }) {
  const featureEvents = events.filter(
    event => !event.datetime || !isPast(new Date(event.datetime))
  )

  const pastEvents = events.filter(
    event => event.datetime && isPast(new Date(event.datetime))
  )

  return (
    <Layout>
      <section className="py-128">
        <div className="container">
          <h1 className="c-light">
            Yepyeni bir tasarım topluluğu{' '}
            <a href="#events">etkinliklere başladı.</a>
          </h1>

          <p className="h3 mt-32">
            Kanvas; dijital tasarımı sadece estetik olarak değil, bir amaç
            doğrultusunda yapılan hareketler bütünü olarak gören herkesi, bir
            araya getirmeyi hedefleyen bir topluluktur.
          </p>

          <h3>Tasarımcı değil misin?</h3>

          <p>
            Merak duyman yeterli. Hedeflerimizden biri de topluma yeni
            tasarımcılar kazandırmak. Planladığımız etkinlikler arasında sana
            uygun etkinlikler de olacak.
          </p>

          <h3>Nasıl Katılabilirim?</h3>

          <p>
            Bizi{' '}
            <a
              className="c-light"
              href="https://twitter.com/kanvastt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{' '}
            üzerinden takip edebilir,{' '}
            <a
              href="https://kommunity.com/kanvas-tasarim-toplulugu"
              className="c-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kommunity’deki sayfamıza
            </a>{' '}
            kaydolabilirsin. Tüm gelişmeler ve bazı özel buluşmalardan ilk
            haberdar olmak için ise{' '}
            <a href="#newsletter" className="c-light">
              mail listemize
            </a>{' '}
            kayıt olman gerek.
          </p>

          <h3>Size nasıl ulaşabilirim?</h3>

          <p>
            Tavsiyelerini, aklına gelen soruları veya topluluğumuzun
            düzenlemesini istediğin etkinlik isteklerini{' '}
            <a
              className="c-light"
              href="mailto:merhaba@kanvas.istanbul"
              target="_blank"
              rel="noopener noreferrer"
            >
              merhaba@kanvas.istanbul
            </a>{' '}
            e-posta adresinden bize gönderebilirsin.
          </p>

          <SocialLinks />
        </div>
      </section>

      <section id="events" className="py-128 bg-light c-primary">
        <div className="container">
          <h2 className="h1 my-0">Gelecek Etkinlikler</h2>

          {featureEvents.length ? (
            featureEvents.map(event => <Event key={event.id} {...event} />)
          ) : (
            <p>Etkinlik bulunamadı</p>
          )}

          <h2 className="h1 mt-128 mb-0">Geçmiş Etkinlikler</h2>

          {pastEvents.length ? (
            pastEvents.map(event => <Event key={event.id} {...event} />)
          ) : (
            <p>Etkinlik bulunamadı</p>
          )}
        </div>
      </section>
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/events`)
  const events = await res.json()
  return { events }
}

export default HomePage
