import Newsletter from './newsletter'

function Footer() {
  return (
    <footer className="footer bg-white c-primary">
      <div className="container">
        <h2 className="h2 mt-0">Sen de bizim gibi heyecanlı mısın?</h2>
        <p>
          O halde topluluğun şekillenmesinde söz sahibi olmak ve tüm
          gelişmelerden ilk haberdar olmak istiyorsan, e-posta listesine kayıt
          ol
        </p>
        <Newsletter />
      </div>
    </footer>
  )
}

export default Footer
