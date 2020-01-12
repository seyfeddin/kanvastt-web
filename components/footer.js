import Newsletter from './newsletter'
import React from 'react'

function Footer() {
  return (
    <footer id="newsletter" className="footer bg-white c-primary">
      <div className="container">
        <h2 className="h1 my-0">Sen de bizim gibi heyecanlı mısın?</h2>
        <p className="mt-16">
          O halde topluluğun şekillenmesinde söz sahibi olmak ve tüm
          gelişmelerden ilk haberdar olmak istiyorsan, eposta listesine kayıt ol
          🥰
        </p>
        <Newsletter />
      </div>
    </footer>
  )
}

export default Footer
