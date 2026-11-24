import { Link } from "react-router-dom";
import "./Conseil.css";
import logo from "../assets/logo.png";


export default function Conseil() {
  return (
    <div className="sol-page">

      {/* SECTION 1 - HERO */}
      <section className="sol-hero">
        <div className="sol-hero-overlay"></div>
        <div className="sol-hero-text">
          <span className="sol-badge">✦ Conseil Informatique • Décision claire, sans jargon</span>
          <h1>Vous ne savez pas<br />quoi <span>acheter ?</span></h1>
          <p>Quel ordinateur choisir ? Quel logiciel ? Comment éviter de gaspiller votre argent ? On vous conseille comme un ami expert, avant que vous dépensiez.</p>
          <div className="sol-hero-btns">
            <Link to="/devis" className="btn-primary">Demander un conseil gratuit →</Link>
            <Link to="/services" className="btn-secondary">Voir tous les services</Link>
          </div>
          <div className="sol-stats">
            <div><strong>24h</strong><span>Premier conseil</span></div>
            <div><strong>+50</strong><span>Projets conseillés</span></div>
            <div><strong>100%</strong><span>Indépendant, sans vente forcée</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - NOS 4 SERVICES */}
      <section className="sol-services">
        <span className="sol-label">NOS CONSEILS</span>
        <h2>4 conseils pour ne plus<br />vous tromper</h2>
        <p className="sol-subtitle">On analyse votre besoin, on vous dit exactement quoi faire. Vous décidez, en toute confiance.</p>
        <div className="sol-grid">
          <div className="sol-card">
            <div className="sol-icon">💻</div>
            <h3>Achat de Matériel</h3>
            <p>Ordinateur, imprimante, téléphone, serveur... On vous dit quel modèle acheter selon votre budget et votre vrai besoin.</p>
            <ul><li>✓ Comparaison des modèles</li><li>✓ Évitez les arnaques</li><li>✓ Le meilleur rapport qualité / prix</li></ul>
            <p className="sol-price">À partir de <b>50 000 FBU</b></p>
            <Link to="/devis" className="sol-link">Demander ce conseil →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">📱</div>
            <h3>Choix de Logiciel</h3>
            <p>Logiciel de gestion, de comptabilité, de stock ? On vous aide à choisir le bon, pas le plus cher.</p>
            <ul><li>✓ Analyse de votre travail</li><li>✓ Démo des meilleures options</li><li>✓ Plan de mise en place</li></ul>
            <p className="sol-price">À partir de <b>80 000 FBU</b></p>
            <Link to="/devis" className="sol-link">Demander ce conseil →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">🏢</div>
            <h3>Digitalisation d'Entreprise</h3>
            <p>Vous voulez passer du papier au digital ? On fait un plan complet : par où commencer, combien ça coûte, en combien de temps.</p>
            <ul><li>✓ Audit complet de votre activité</li><li>✓ Feuille de route claire</li><li>✓ Budget réaliste</li></ul>
            <p className="sol-price"><b>Devis sur mesure</b></p>
            <Link to="/devis" className="sol-link">Demander ce conseil →</Link>
          </div>
          <div className="sol-card">
            <div className="sol-icon">🎓</div>
            <h3>Formation & Coaching</h3>
            <p>Vous ou votre équipe ne savez pas utiliser un outil ? On vous forme en langage simple, avec des exemples de votre métier.</p>
            <ul><li>✓ Formation en Kirundi / Français</li><li>✓ Exercices pratiques</li><li>✓ Support après formation</li></ul>
            <p className="sol-price">À partir de <b>40 000 FBU / séance</b></p>
            <Link to="/devis" className="sol-link">Demander ce conseil →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROCESS */}
      <section className="sol-process">
        <span className="sol-label">COMMENT ÇA MARCHE</span>
        <h2>Un conseil clair, en 4 étapes</h2>
        <div className="sol-steps">
          <div><span>1</span><h4>Écoute gratuite</h4><p>Vous nous racontez votre problème ou votre projet. On pose les bonnes questions, sans jargon.</p></div>
          <div><span>2</span><h4>Analyse en 24h</h4><p>On compare les options pour vous et on vous prépare une recommandation simple.</p></div>
          <div><span>3</span><h4>Recommandation claire</h4><p>Vous recevez un document simple : quoi acheter, pourquoi, combien ça coûte, où l'acheter.</p></div>
          <div><span>4</span><h4>Accompagnement</h4><p>Si vous voulez, on vous aide à acheter et à installer. Vous n'êtes pas seul.</p></div>
        </div>
      </section>

      {/* SECTION 4 - CTA + FOOTER */}
      <section className="sol-cta">
        <h2>Vous avez une question informatique ?</h2>
        <p>Posez-la nous. On vous répond avec un conseil honnête en moins de 24h, gratuitement.</p>
        <div className="sol-cta-btns">
          <Link to="/devis" className="btn-primary">Demander un conseil gratuit</Link>
          <Link to="/contact" className="btn-white-outline">Nous contacter</Link>
        </div>
        <p className="sol-cta-small">Sans engagement • Réponse en moins de 24h</p>
      </section>

    </div>
  );
}