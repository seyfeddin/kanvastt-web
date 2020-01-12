import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import SocialLinks from '../components/social-links'
import React from 'react'
import Event from '../components/event'

function HomePage({ events }) {
  return (
    <Layout>
      <section className="py-128">
        <div className="container">
          <h1 className="c-light">
            Yepyeni bir tasarım topluluğu{' '}
            <a href="#events">etkinliklere başladı.</a>
          </h1>

          <p className="mt-32">
            Kanvas; dijital tasarımı sadece estetik olarak değil, bir amaç
            doğrultusunda yapılan hareketler bütünü olarak gören herkesi, bir
            araya getirmeyi hedefleyen bir topluluktur.
          </p>

          <h3 className="mt-64 c-light">Tasarımcı değil misin?</h3>

          <p className="mt-8">
            Merak duyman yeterli. Hedeflerimizden biri de topluma yeni
            tasarımcılar kazandırmak. Planladığımız etkinlikler arasında sana
            uygun etkinlikler de olacak.
          </p>

          <h3 className="mt-64 c-light">Nasıl Katılabilirim?</h3>

          <p className="mt-8">
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

          <h3 className="c-light mt-64">Size nasıl ulaşabilirim?</h3>

          <p className="mt-8">
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
          {events.map(event => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const res = await fetch('http://localhost:1337/events')
  const events = await res.json()
  return { events }
}

export default HomePage
