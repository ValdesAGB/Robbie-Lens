import React from 'react'
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <Link to="/" className="lien-icone">
          <img src={logo} alt="Logo Robbie Lens" />
        </Link>
        <div>
          <a target="_blank" href="https://twitter.com/" className="lien-icone">
            <img src={twitter} alt="Logo Twitter" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className="lien-icone"
          >
            <img src={instagram} alt="Logo Instagram" />
          </a>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
