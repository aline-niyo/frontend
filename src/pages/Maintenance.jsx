import { Link } from "react-router-dom";
import "./Maintenance.css";
import logo from "../assets/logo.png";

export default function Maintenance() {
  return (
    <div className="sol-page">

      {/* SECTION 1 - HERO */}
      <section className="sol-hero">
        <div className="sol-hero-overlay"></div>
        <div className="sol-hero-text">
          <span className="sol-badge">✦ Maintenance Informatique • 7j/7 à Bujumbura</span>
          <h1>Votre ordinateur est lent ?<br />On le <span>répare.</span></h1>
          <p>Ordinateur qui rame, virus, écran bleu, imprimante qui ne marche plus... On répare, on nettoie et on protège tout votre matériel, à votre bureau ou à domicile.</p>
          <div className="sol-hero-btns">
            <Link to="/devis" className="btn-primary">Demander un dépannage gratuit →</Link>
            <Link to="/services" className="btn-secondary">Voir tous les services</Link>
          </div>
          <div className="sol-stats">
            <div><strong>24h</strong><span>Diagnostic gratuit</span></div>
            <div><strong>+200</strong><span>Appareils réparés</span></div>
            <div><strong>7j/7</strong><span>Support rapide</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - NOS 4 SERVICES */}
      <section className="sol-services">
        <span className="sol-label">NOS SERVICES</span>
        <h2>4 services pour que<br />votre matériel marche toujours</h2>
        <p className="sol-subtitle">Panne, lenteur ou virus ? On s'occupe de tout, réparation + conseils inclus.</p>
        <div className="sol-grid">
          <div className="sol-card">
            <div className="sol-icon">🛠️</div>
            <h3>Réparation & Dépannage</h3>
            <p>Ordinateur, imprimante, téléphone qui ne s'allume plus ou qui bug. On diagnostique et on répare vite.</p>
            <ul><li>✓ Diagnostic gratuit en 24h</li><li>✓ Remplacement de pièces</li><li>✓ Récupération de données</li></ul>
            <p className="sol-price">À partir de <b>30 000 FBU</b></p>
            <Link to="/devis" className="sol-link">Demander ce service →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">⚡</div>
            <h3>Nettoyage & Optimisation</h3>
            <p>Votre PC est lent ? On le nettoie, on enlève les virus et les fichiers inutiles. Il redevient comme neuf.</p>
            <ul><li>✓ Suppression virus & pubs</li><li>✓ PC 2x plus rapide</li><li>✓ Mise à jour système</li></ul>
            <p className="sol-price">À partir de <b>25 000 FBU</b></p>
            <Link to="/devis" className="sol-link">Demander ce service →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">🖨️</div>
            <h3>Installation & Configuration</h3>
            <p>Nouvel ordinateur, imprimante, WiFi ou logiciel ? On installe tout pour vous, ça marche dès le premier jour.</p>
            <ul><li>✓ Installation Windows / Logiciels</li><li>✓ Configuration WiFi & imprimante</li><li>✓ Transfert de vos fichiers</li></ul>
            <p className="sol-price"><b>Devis sur mesure</b></p>
            <Link to="/devis" className="sol-link">Demander ce service →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">🛡️</div>
            <h3>Contrat de Maintenance</h3>
            <p>Pour les entreprises, écoles et boutiques. On surveille vos appareils chaque mois pour éviter les pannes.</p>
            <ul><li>✓ Visite mensuelle incluse</li><li>✓ Priorité dépannage 7j/7</li><li>✓ Sauvegarde vérifiée</li></ul>
            <p className="sol-price">À partir de <b>100 000 FBU / mois</b></p>
            <Link to="/devis" className="sol-link">Demander ce service →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROCESS */}
      <section className="sol-process">
        <span className="sol-label">COMMENT ÇA MARCHE</span>
        <h2>Réparé, en 4 étapes</h2>
        <div className="sol-steps">
          <div><span>1</span><h4>Diagnostic gratuit</h4><p>Vous nous décrivez la panne, on vous dit ce qui ne va pas et combien ça coûte. Sans engagement.</p></div>
          <div><span>2</span><h4>Devis en 24h</h4><p>Prix clair, délai précis. Vous validez avant qu'on touche à quoi que ce soit.</p></div>
          <div><span>3</span><h4>Réparation + Test</h4><p>On répare, on nettoie, on teste tout devant vous. Vous repartez avec un appareil qui marche.</p></div>
          <div><span>4</span><h4>Suivi 7j/7</h4><p>Après la réparation, on reste joignable si le problème revient.</p></div>
        </div>
      </section>

      {/* SECTION 4 - CTA + FOOTER */}
      <section className="sol-cta">
        <h2>Votre appareil est en panne ?</h2>
        <p>Décrivez-nous le problème. On vous donne un diagnostic gratuit en moins de 24h.</p>
        <div className="sol-cta-btns">
          <Link to="/devis" className="btn-primary">Demander un diagnostic gratuit</Link>
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