import { Link } from "react-router-dom";
import "./Solution.css";
import logo from "../assets/logo.png";

export default function Solution() {
  return (
    <div className="sol-page">

      {/* SECTION 1 - HERO */}
      <section className="sol-hero">
        <div className="sol-hero-overlay"></div>
        <div className="sol-hero-text">
          <span className="sol-badge">✦ Solutions Digitales • 100% Sur mesure</span>
          <h1>Arrêtez de perdre du temps.<br />Passez au <span>digital.</span></h1>
          <p>Papiers, Excel, WhatsApp, rendez-vous oubliés... On remplace tout ça par un seul outil simple, rapide et qui travaille pour vous, depuis votre téléphone.</p>
          <div className="sol-hero-btns">
            <Link to="/devis" className="btn-primary">Demander un devis gratuit →</Link>
            <Link to="/services" className="btn-secondary">Voir tous les services</Link>
          </div>
          <div className="sol-stats">
            <div><strong>24h</strong><span>Devis</span></div>
            <div><strong>+50</strong><span>Organisations aidées</span></div>
            <div><strong>7j</strong><span>Mise en place</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - NOS 4 SOLUTIONS */}
      <section className="sol-services">
        <span className="sol-label">NOS SOLUTIONS</span>
        <h2>4 solutions pour digitaliser<br />votre organisation</h2>
        <p className="sol-subtitle">Choisissez ce dont vous avez besoin. On s'occupe de tout, installation + formation incluse.</p>
        <div className="sol-grid">
          <div className="sol-card">
            <div className="sol-icon">📊</div>
            <h3>Logiciel de Gestion</h3>
            <p>Clients, stocks, ventes, factures, rendez-vous — tout dans une seule application, sur votre téléphone.</p>
            <ul><li>✓ Suivi des ventes en temps réel</li><li>✓ Factures automatiques</li><li>✓ Rappel rendez-vous</li></ul>
            <p className="sol-price">À partir de <b>250 000 FBU</b></p>
            <Link to="/devis" className="sol-link">Demander cette solution →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">☁️</div>
            <h3>Cloud & Stockage</h3>
            <p>Vos fichiers en sécurité, accessibles partout. Fini les clés USB perdues et les papiers qui s'envolent.</p>
            <ul><li>✓ Accès partout, tout le temps</li><li>✓ Sauvegarde automatique</li><li>✓ Partage facile avec l'équipe</li></ul>
            <p className="sol-price">À partir de <b>80 000 FBU / mois</b></p>
            <Link to="/devis" className="sol-link">Demander cette solution →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">🌐</div>
            <h3>Réseau & Installation</h3>
            <p>WiFi, imprimantes, ordinateurs pour votre bureau, école ou boutique. On installe, ça marche.</p>
            <ul><li>✓ WiFi rapide partout</li><li>✓ Installation complète</li><li>✓ Maintenance incluse</li></ul>
            <p className="sol-price"><b>Devis sur mesure</b></p>
            <Link to="/devis" className="sol-link">Demander cette solution →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">🔒</div>
            <h3>Sécurité & Sauvegarde</h3>
            <p>Protégez vos données contre les virus, les pannes et les vols. Sauvegarde chaque jour, sans y penser.</p>
            <ul><li>✓ Antivirus & protection</li><li>✓ Sauvegarde quotidienne</li><li>✓ Récupération rapide</li></ul>
            <p className="sol-price">À partir de <b>60 000 FBU / mois</b></p>
            <Link to="/devis" className="sol-link">Demander cette solution →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROCESS */}
      <section className="sol-process">
        <span className="sol-label">COMMENT ÇA MARCHE</span>
        <h2>Simple, en 4 étapes</h2>
        <div className="sol-steps">
          <div><span>1</span><h4>Analyse gratuite</h4><p>On regarde comment vous travaillez et ce qui vous fait perdre du temps.</p></div>
          <div><span>2</span><h4>Proposition en 24h</h4><p>Solution adaptée, prix clair, délai précis. Pas de surprise.</p></div>
          <div><span>3</span><h4>Installation + Formation</h4><p>On installe et on forme votre équipe. Vous savez tout utiliser.</p></div>
          <div><span>4</span><h4>Support 7j/7</h4><p>Après l'installation, on reste là pour vos questions et mises à jour.</p></div>
        </div>
      </section>

      {/* SECTION 4 - CTA + FOOTER */}
      <section className="sol-cta">
        <h2>Prêt à gagner du temps ?</h2>
        <p>Parlez-nous de votre problème. On vous propose la solution digitale en moins de 24h, gratuitement.</p>
        <div className="sol-cta-btns">
          <Link to="/devis" className="btn-primary">Demander un devis</Link>
          <Link to="/contact" className="btn-white-outline">Nous contacter</Link>
        </div>
        <p className="sol-cta-small">Sans engagement • Réponse en moins de 24h</p>
      </section>

      <footer className="contact-footer">
        <div className="footer-container">
          <div className="footer-column footer-about">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Logo InfoServices" />
              <span>InfoServices</span>
            </Link>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100081083984402&sk=reels_tab" className="social facebook">f</a>
              <a href="https://x.com/i/jf/onboarding/web#/s/face_liveness/r-qm8vsl" className="social twitter">X</a>
              <a href="https://www.linkedin.com/" className="social linkedin">in</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Navigation</h3>
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/apropos">À propos</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h3>Nos services</h3>
            <Link to="/services/developpement-web">Développement web</Link>
            <Link to="/services/solutions-informatiques">Solutions informatiques</Link>
            <Link to="/services/maintenance">Maintenance</Link>
            <Link to="/services/conseil-informatique">Conseil informatique</Link>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Bujumbura, Burundi</p>
            <p>alineniyomwungere99@gmail.com</p>
            <p>+257 62573421</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} InfoServices. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}