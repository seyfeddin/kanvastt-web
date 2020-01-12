import Logo from './logo'
import Link from 'next/link'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <a className="logo">
            <Logo />
            <b>
              KANVAS
              <br />
              TASARIM
              <br />
              TOPLULUĞU
            </b>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
