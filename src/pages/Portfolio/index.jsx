import React, { useEffect } from 'react'
import '../../styles/portfolio.css'
import '../../styles/style.css'
import paysage1 from '../../assets/portfolio/paysage1.jpg'
import paysage2 from '../../assets/portfolio/paysage2.jpg'
import paysage3 from '../../assets/portfolio/paysage3.jpg'
import paysage4 from '../../assets/portfolio/paysage4.jpg'
import paysage5 from '../../assets/portfolio/paysage5.jpg'
import paysage6 from '../../assets/portfolio/paysage6.jpg'
import paysage7 from '../../assets/portfolio/paysage7.jpg'
import paysage8 from '../../assets/portfolio/paysage8.jpg'
import paysage9 from '../../assets/portfolio/paysage9.jpg'
import portrait1 from '../../assets/portfolio/portrait1.jpg'
import portrait2 from '../../assets/portfolio/portrait2.jpg'
import portrait3 from '../../assets/portfolio/portrait3.jpg'
import portrait4 from '../../assets/portfolio/portrait4.jpg'
import portrait5 from '../../assets/portfolio/portrait5.jpg'
import portrait6 from '../../assets/portfolio/portrait6.jpg'

function Portfolio() {
  useEffect(() => {
    const pageTitle = 'Portfolio - Robbie Lens Photographie'
    document.title = pageTitle

    return () => {
      document.title = 'Robbie Lens Photographie'
    }
  }, [window.location.pathname])
  return (
    <React.Fragment>
      <main>
        <section>
          <h1>Portfolio</h1>
        </section>
        <section className="portfolio-section-photos">
          <h2>Paysages</h2>
          <div className="grid-paysages">
            <a href={paysage1} className="lien-conteneur-photo">
              <img src={paysage1} alt="Mont Aoraki - Nouvelle-Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage2} className="lien-conteneur-photo">
              <img
                src={paysage2}
                alt="Parc National d’Abel Tasman - Nouvelle-Zélande"
              />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage3} className="lien-conteneur-photo">
              <img src={paysage3} alt="Lac Rotorua - Nouvelle-Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage4} className="lien-conteneur-photo">
              <img src={paysage4} alt="Lac Wanaka - Nouvelle-Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage5} className="lien-conteneur-photo">
              <img src={paysage5} alt="Mont Taranaki - Nouvelle-Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage6} className="lien-conteneur-photo">
              <img src={paysage6} alt="Milford Sound - Nouvelle-Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage7} className="lien-conteneur-photo">
              <img src={paysage7} alt="Twelve Apostle - Australie" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage8} className="lien-conteneur-photo">
              <img src={paysage8} alt="Wai-O-Tapu - Nouvelle-Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={paysage9} className="lien-conteneur-photo">
              <img src={paysage9} alt="Mont Cook - Nouvelle Zélande" />
              <div className="photo-hover">Voir la photo</div>
            </a>
          </div>
          <h2>Portraits</h2>
          <div className="grid-portraits">
            <a href={portrait1} className="lien-conteneur-photo">
              <img src={portrait1} alt="Portrait jeune femme 1" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={portrait2} className="lien-conteneur-photo">
              <img src={portrait2} alt="Portrait jeune femme 2" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={portrait3} className="lien-conteneur-photo">
              <img src={portrait3} alt="Portrait jeune homme 3" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={portrait4} className="lien-conteneur-photo">
              <img src={portrait4} alt="Portrait jeune femme 4" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={portrait5} className="lien-conteneur-photo">
              <img src={portrait5} alt="Portrait jeune femme 5" />
              <div className="photo-hover">Voir la photo</div>
            </a>
            <a href={portrait6} className="lien-conteneur-photo">
              <img src={portrait6} alt="Portrait jeune femme 6" />
              <div className="photo-hover">Voir la photo</div>
            </a>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Portfolio
