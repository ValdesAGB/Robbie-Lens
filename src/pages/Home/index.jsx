import React, { useEffect } from 'react'
import '../../styles/index.css'
import '../../styles/style.css'
import lens from '../../assets/robbie-lens.png'
import ele1 from '../../assets/accueil/element-1.png'
import ele2 from '../../assets/accueil/element-2.png'
import ele3 from '../../assets/accueil/element-3.png'
import ele4 from '../../assets/accueil/element-4.png'
import ele5 from '../../assets/accueil/element-5.png'
import ele6 from '../../assets/accueil/element-6.png'

function Home() {
  useEffect(() => {
    const pageTitle = 'Accueil - Robbie Lens Photographie'
    document.title = pageTitle

    return () => {
      document.title = 'Robbie Lens Photographie'
    }
  }, [window.location.pathname])
  return (
    <React.Fragment>
      <main>
        <section className="accueil-introduction">
          <div>
            <h1>Robbie Lens Photographie</h1>
            <p>
              Où <em>professionalisme</em> s’allie avec <em>passion</em>. Depuis
              plus de 5 ans maintenant, j’exerce mon métier avec la passion qui
              m’anime : capturer l’essence de chaque instant.
            </p>
            <a href="#contact" className="cta">
              UN PROJET ? ÉCRIVEZ-MOI
            </a>
          </div>
          <img
            src={lens}
            alt="Portrait avec effet de la photographe Robbie Lens"
          />
        </section>
        <section className="accueil-photos">
          <h2>Mon dernier projet</h2>
          <div>
            <img src={ele1} alt="Twelve apostles - Australie" />
            <img src={ele2} alt="Wai-O-Tapu - Nouvelle-Zélande" />
            <img
              src={ele3}
              alt="Parc National d’Abel Tasman - Nouvelle-Zélande"
            />
          </div>
          <div>
            <img src={ele4} alt="Lac Rotorua - Nouvelle-Zélande" />
            <img src={ele5} alt="Milford Sound - Nouvelle-Zélande" />
            <img src={ele6} alt="Lac Wanaka - Nouvelle-Zélande" />
          </div>
        </section>
        <section id="contact" className="section-contact">
          <h2>Parlons de votre projet</h2>
          <form method="post" action="">
            <div className="form-nom-email">
              <div className="form-column">
                <label htmlFor="nom">nom</label>
                <input type="text" name="nom" id="nom" />
              </div>
              <div className="form-column">
                <label htmlFor="email">email</label>
                <input type="e-mail" name="email" id="email" />
              </div>
            </div>
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" rows="10"></textarea>
            <input type="submit" value="ENVOYER" className="cta" disabled />
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Home
