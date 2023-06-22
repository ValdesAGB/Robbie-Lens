import React, { useEffect } from 'react'
import '../../styles/a-propos.css'
import '../../styles/style.css'
import { Link } from 'react-router-dom'

function About() {
  useEffect(() => {
    const pageTitle = 'À propos - Robbie Lens Photographie'
    document.title = pageTitle

    return () => {
      document.title = 'Robbie Lens Photographie'
    }
  }, [window.location.pathname])

  return (
    <React.Fragment>
      <main className="a-propos-main">
        <section>
          <h1>À propos</h1>
          <div className="carre-contenu">
            <p>
              Photographe depuis plus de 5 ans, je réalise des reportages aux
              photos dynamiques et pertinentes pour vos projets de
              communication. Créativité, qualité, et sérénité pour vous! Je gère
              tout, depuis la direction artistique, la réalisation du reportage
              jusqu’à la livraison de vos photos retouchées, prêtes à l’emploi.
            </p>
            <h2>Services</h2>
            <ul>
              <li>Portrait seul ou à plusieurs</li>
              <li>Shooting mode</li>
              <li>Retouches sur mesure</li>
              <li>Développement</li>
            </ul>
          </div>
          <div>
            <Link to="/portfolio" className="cta">
              VOIR MON PORTFOLIO
            </Link>
          </div>
        </section>
        <section className="section-tarifs">
          <h2>Tarifs</h2>
          <table>
            <thead>
              <tr>
                <th>Désignation</th>
                <th>Quantité</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retouches photo studio professionnel</td>
                <td>x 800 photos</td>
                <td>3 200€/800 photos</td>
              </tr>
              <tr>
                <td>Assistant photo lumière professionnel</td>
                <td>x 2 sets studio</td>
                <td>1 500€/journée</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </React.Fragment>
  )
}

export default About
