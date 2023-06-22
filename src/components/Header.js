import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Link to="/" className="lien-icone">
            <img src={logo} alt="Logo Robbie Lens" />
          </Link>

          <div>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header
