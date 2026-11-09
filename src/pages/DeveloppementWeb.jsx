import { Link } from "react-router-dom";
import "./DeveloppementWeb.css";
import logo from "../assets/logo.png";

export default function DeveloppementWeb() {
  return (
    <div className="devweb-page">

      {/* HERO */}
 <section className="devweb-hero">
  <div className="devweb-hero-overlay"></div>
  <div className="devweb-hero-text">
    <h1>Votre site web, votre meilleur <span>commercial</span> qui ne dort jamais</h1>
<p>Vous perdez des clients parce que vous n'êtes pas visible en ligne ? Nous créons des sites web rapides, beaux sur téléphone et pensés pour transformer vos visiteurs en clients. 
  Site vitrine, boutique en ligne ou application sur mesure, livré en 7 jours.</p>
    
    <div className="devweb-stats">
      <div><strong>24h</strong><span>Devis gratuit</span></div>
      <div><strong>100%</strong><span>Adapté mobile</span></div>
      <div><strong>7j</strong><span>Livraison express</span></div>
    </div>

    <div className="devweb-hero-btns">
      <Link to="/devis" className="btn-primary">Demander un devis gratuit</Link>
      <Link to="/services" className="btn-secondary">Voir tous les services</Link>
    </div>
  </div>
</section>

      {/* CE QU'ON FAIT */}
      <section className="devweb-services">
        <h2>Ce que nous construisons</h2>
        <div className="devweb-grid">
          <div className="devweb-card">
            <h3>🌐 Site Vitrine</h3>
            <p>Présentez votre entreprise, vos services, vos contacts. Idéal pour attirer des clients.</p>
            <p className="devweb-price">À partir de 150 000 FBU</p>
          </div>
          <div className="devweb-card">
            <h3>🛒 E-commerce</h3>
            <p>Vendez en ligne avec paiement, panier, livraison. Vos clients commandent depuis leur téléphone.</p>
            <p className="devweb-price">À partir de 350 000 FBU</p>
          </div>
          <div className="devweb-card">
            <h3>⚙️ Application Web</h3>
            <p>Gestion de clients, de stocks, de devis, de rendez-vous. Sur mesure pour votre organisation.</p>
            <p className="devweb-price">Devis sur mesure</p>
          </div>
          <div className="devweb-card">
            <h3>🚀 Refonte / Optimisation</h3>
            <p>Votre site est lent ou moche sur téléphone ? On le refait rapide et moderne.</p>
            <p className="devweb-price">À partir de 100 000 FBU</p>
          </div>
        </div>
      </section>

      {/* COMMENT ON TRAVAILLE */}
      <section className="devweb-process">
        <h2>Comment ça se passe ?</h2>
        <div className="devweb-steps">
          <div><span>1</span><h4>Devis gratuit</h4><p>Vous nous expliquez votre projet, on vous envoie un devis en moins de 24h.</p></div>
          <div><span>2</span><h4>Design</h4><p>On vous montre la maquette. Vous validez avant qu'on code.</p></div>
          <div><span>3</span><h4>Développement</h4><p>On construit votre site. Vous suivez l'avancement.</p></div>
          <div><span>4</span><h4>Livraison</h4><p>Site en ligne, formation, et support après livraison.</p></div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="devweb-cta">
        <h2>Prêt à avoir votre site web ?</h2>
        <p>Parlons de votre projet. Devis gratuit en moins de 24h.</p>
        <Link to="/devis" className="btn-primary">Demander un devis</Link>
      </section>

      {/* =====================================================
                      SECTION 3 : FOOTER
                  ====================================================== */}
                  <footer className="contact-footer">
      
                      <div className="footer-container">
      
                          {/* Logo / présentation */}
                          <div className="footer-column footer-about">
      
        <Link to="/" className="navbar-logo">
                <img src={logo} alt="Logo InfoServices" />
                <span>InfoServices</span>
              </Link>
                              {/* <h2>
                                  Info<span>Services</span>
                              </h2> */}
      
                                    <div className="social-links">
      
                                      <a
                                          href="https://www.facebook.com/profile.php?id=100081083984402&sk=reels_tab"
                                          className="social facebook"
                                      >
                                          f
                                      </a>
      
                                      <a
                                          href="https://x.com/i/jf/onboarding/web#/s/face_liveness/r-qm8vsl"
                                          className="twitter"
                                      >
                                          X
                                      </a>
      
                                      <a
                                          href="https://www.linkedin.com/checkpoint/challengesV3/AQF-gMPvquMaoQAAAaGMHbISLtsFnDyP2yUvs6zV8c3IICtgFlyIzkS4IyAADqq8pjhzkL5yh3y_xM5pR_bm-Xjo_PNROQ"
                                          className="social linkedin"
                                      >
                                          in
                                      </a>
      
                                  </div>
      
                          </div>
      
      
                          {/* Navigation */}
                         <div className="footer-column">
          <h3>Navigation</h3>
          <Link to="/">Accueil</Link>
          <Link to="/services/DeveloppementWeb">Développement web</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/contact">Contact</Link>
      </div>
                        
      
      
                          {/* Services */}
                          <div className="footer-column">
      
                              <h3>
                                  Nos services
                              </h3>
      
                              <a href="/services">
                                  Développement web
                              </a>
      
                              <a href="/services">
                                  Solutions informatiques
                              </a>
      
                              <a href="/services">
                                  Maintenance
                              </a>
      
                              <a href="/services">
                                  Conseil informatique
                              </a>
      
                          </div>
      
      
                          {/* Contact */}
                          <div className="footer-column">
      
                              <h3>
                                  Contact
                              </h3>
      
                              <p>
                                   Bujumbura, Burundi
                              </p>
      
                              <p>
                                   alineniyomwungere99@gmail.com
                              </p>
      
                              <p>
                                   +257 62573421
                              </p>
      
                          </div>
      
                      </div>
      
      
                      {/* Bas du footer */}
                      <div className="footer-bottom">
      
                          <p>
                              © {new Date().getFullYear()} InfoServices.
                              Tous droits réservés.
                          </p>
      
                      
      
                      </div>
      
                  </footer>
                
    </div>
  );
}