
// import React, { useState } from "react";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Accueil.css";
import logogoogle from "../assets/google.webp";
import logomicro from "../assets/microsoft_cutout.png";
import logoslack from "../assets/slack_cutout.png";
import logodro from "../assets/dropbox_cutout.png";
import logoba from "../assets/apropo.jpg";

 //nos clients

import logo from "../assets/logo.png";




function Accueil() {
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const elements = document.querySelectorAll('.hero-section, .stats-section, .hebergement-section, .happy-clients, .process-section, .about-home-section, .contact-footer');
  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
  
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const logosClients = [
  "https://via.placeholder.com/150x80/1e2a5a/ffffff?text=ABREMA",
  "https://via.placeholder.com/150x80/149e8e/ffffff?text=COOPEC",
  "https://via.placeholder.com/150x80/003366/ffffff?text=BRB",
  "https://via.placeholder.com/150x80/f58220/ffffff?text=BCB",
  "https://via.placeholder.com/150x80/7c3aed/ffffff?text=LUMITEL",
  "https://via.placeholder.com/150x80/0047AB/FFCC00?text=LEO",
  "https://via.placeholder.com/150x80/222222/ffffff?text=ONAMOB",
  "https://via.placeholder.com/150x80/e11d48/ffffff?text=INTERBANK",
  "https://via.placeholder.com/150x80/FFCC00/000000?text=WESTERN"
];

  // =====================================================
  // LISTE DES SERVICES
  // =====================================================

  const services = [
    {
      id: 1,
      nom: "Création de Sites Web",
      icon: (
        <svg
          className="service-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },

    {
      id: 2,
      nom: "SEO & Référencement",
      icon: (
        <svg
          className="service-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },

    {
      id: 3,
      nom: "E-Commerce",
      icon: (
        <svg
          className="service-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707-1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
      ),
    },

    {
      id: 4,
      nom: "Support 24/7",
      icon: (
        <svg
          className="service-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const plans = [
    {
      nom: "Basique",
      prix: "100 000",
      couleur: "#1e2a5a",
      features: ["1 Go de stockage (SSD)", "1 Site", "1 Base de données", "1 Domaine", "3 courriels"]
    },
    {
      nom: "Standard",
      prix: "150 000",
      couleur: "#149e8e",
      features: ["2 Go de stockage (SSD)", "1 Site", "1 Base de données", "1 Domaine", "5 e-mails"]
    },
    {
      nom: "Intermédiaire",
      prix: "250 000",
      couleur: "#f58220",
      features: ["5 Go de stockage (SSD)", "2 sites", "2 bases de données", "2 Domaines", "10 courriels"]
    },
    {
      nom: "Avancé",
      prix: "350 000",
      couleur: "#7c3aed",
      features: ["10 Go de stockage (SSD)", "2 sites", "2 bases de données", "2 Domaines", "20 courriels"]
    },
    {
      nom: "Professionnel",
      prix: "450 000",
      couleur: "#e11d48",
      features: ["20 Go de stockage (SSD)", "3 sites", "3 bases de données", "5 domaines", "50 courriels"]
    },
    {
      nom: "VIP",
      prix: "600 000",
      couleur: "#22c55e",
      features: ["50 Go de stockage (SSD)", "5 sites", "5 bases de données", "5 domaines", "Courriels illimités"]
    }
  ];

  return (
    <div className="accueil-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        <div className="hero-grid">

          <div className="hero-text">

            <h1 className="hero-title">
              Développez Votre <br />
                Business en Ligne
              
            </h1>

            <p className="hero-subtitle">
              Nous fournissons des solutions digitales innovantes
              et efficaces.
            </p>

            <div className="hero-actions">

              <Link to="/devis" className="btn-devis">
                Demander un devis
              </Link>

              <button
                className="btn-video"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <span className="play-icon">▶</span>
                Voir la vidéo
              </button>

            </div>

          </div>


          {/* Graphique */}

          <div className="growth-card-container">

            <div className="growth-card">

              <div className="growth-header">

                <span className="growth-badge">
                  + 68% Croissance
                </span>

              </div>

              <div className="chart-visual">

                <svg
                  className="chart-svg"
                  viewBox="0 0 300 120"
                >

                  <defs>

                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="0%"
                        stopColor="#00d2ff"
                        stopOpacity="0.4"
                      />

                      <stop
                        offset="100%"
                        stopColor="#00d2ff"
                        stopOpacity="0"
                      />

                    </linearGradient>

                  </defs>


                  <path
                    d="M 10 100 Q 50 80, 90 85 T 170 50 T 250 30 T 290 10 L 290 120 L 10 120 Z"
                    fill="url(#chartGradient)"
                  />

                  <path
                    d="M 10 100 Q 50 80, 90 85 T 170 50 T 250 30 T 290 10"
                    fill="none"
                    stroke="#00d2ff"
                    strokeWidth="3"
                  />

                  <circle
                    cx="290"
                    cy="10"
                    r="5"
                    fill="#00d2ff"
                  />

                </svg>

              </div>


              <div className="growth-icons">

                <div className="growth-icon-box">
                  📊
                </div>

                <div className="growth-icon-box">
                  🛡️
                </div>

                <div className="growth-icon-box">
                  📱
                </div>

                <div className="growth-icon-box">
                  🌐
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Confiance */}

        <div className="trust-bar">

          <span className="trust-label">
            Ils nous font confiance
          </span>

          <div className="trust-logos">

            <span className="trust-logo">
              <img src={logogoogle} alt="Google" className="valeur-icon" style={{ height: '40px', width: 'auto' }} />
               </span>

            <span className="trust-logo">
              <img src={logomicro} alt="microsoft" className="valeur-icon" style={{ height: '70px', width: 'auto' }} />
            </span>

            <span className="trust-logo">
               <img src={logoslack} alt="slack" className="valeur-icon" style={{ height: '50px', width: 'auto' }}/>
            </span>

            <span className="trust-logo">
               <img src={logodro} alt="slack" className="valeur-icon" style={{ height: '60px', width: 'auto' }}/>
            </span>

          </div>

          {/* stack */}
  {/* <div className="api-logos">
    <div className="api-logos-row">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="NGINX" className="api-logo" style={{transform:'rotate(-8deg)'}} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="api-logo" style={{transform:'rotate(6deg)'}} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="api-logo" style={{transform:'rotate(-5deg)'}} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="api-logo" style={{transform:'rotate(7deg)'}} />
    </div>
    <div className="api-logos-row">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="api-logo" style={{transform:'rotate(-6deg)'}} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="api-logo" style={{transform:'rotate(5deg)'}} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" className="api-logo" style={{transform:'rotate(-7deg)'}} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="api-logo" style={{transform:'rotate(8deg)'}} />
    </div>
  </div> */}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      {/* <section className="services-section">

        <div className="services-grid">

          {services.map((service) => (

            <div
              key={service.id}
              className={`service-card ${
                activeService === service.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveService(service.id)
              }
            >

              <div className="service-icon-wrapper">
                {service.icon}
              </div>

              <h3 className="service-title">
                {service.nom}
              </h3>

            </div>

          ))}

        </div>

      </section> */}





      {/* =====================================================
          STATISTIQUES
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-card">

          <div className="stat-item">

            <div className="stat-value">
              500+
            </div>

            <div className="stat-label">
              Projets réalisés
            </div>

          </div>


          <div className="stat-item">

            <div className="stat-value">
              98%
            </div>

            <div className="stat-label">
              Clients satisfaits
            </div>

          </div>


          <div className="stat-item">

            <div className="stat-value">
              24/7
            </div>

            <div className="stat-label">
              Support disponible
            </div>

          </div>


          <div className="stat-cta">

            <Link
              to="/devis"
              className="btn-devis-arrow"
            >
              Demander un devis →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          1. À PROPOS DE NOUS
      ===================================================== */}

  <section className="about-home-section">
  <div className="about-home-container">

    {/* 1. ICI - L'IMAGE A GAUCHE */}
    <div className="about-home-image">
      <img 
        src={logoba} 
        alt="InfoServices" 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '25px' }} 
      />
    </div>

    {/* 2. LE TEXTE A DROITE */}
    <div className="about-home-content">
  <span className="section-subtitle">À PROPOS DE NOUS</span>
  <h2>Transformons vos idées en solutions digitales</h2>
  
  <p>
    Chez InfoServices, nous concevons des solutions informatiques 
    professionnelles pour aider les entreprises à développer leur 
    présence et leurs activités en ligne.
  </p>
  
  <p>
    Notre objectif est de proposer des solutions simples, modernes, 
    performantes et adaptées aux besoins réels de chaque client.
  </p>
  <Link to="/apropos" className="section-button">
    En savoir plus →
  </Link>
</div>

  </div>
</section>
      {/* =====================================================
          2. NOS SOLUTIONS
      ===================================================== */}

      <section className="hebergement-section">
      <h2>Plans D'hébergement</h2>
      <p className="hebergement-subtitle">Des solutions d'hébergement abordables pour tous types de projets.</p>
      <div className="hebergement-grid">
        {plans.map((plan, index) => (
          <div key={index} className="hebergement-card">
            <div className="hebergement-header">
              <h3>{plan.nom}</h3>
            </div>
            <div className="hebergement-prix" style={{ backgroundColor: plan.couleur }}>
              <span className="prix-nombre">{plan.prix}</span>
              <span className="prix-unite">Fbu /an</span>
            </div>
            <div className="hebergement-features">
              {plan.features.map((f, i) => (
                <p key={i}><span className="check">✔</span> {f}</p>
              ))}
            </div>
            <div className="hebergement-footer">
              <a href="/devis" className="hebergement-btn" style={{ backgroundColor: plan.couleur }}>
                Commandez maintenant 🛒
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* =====================================================
          3. nos clients
      ===================================================== */}

      {/* 5 - NOS CLIENTS */}
<section className="happy-clients">
  <div className="happy-clients-header">
   <h2>Nos clients satisfaits</h2>
<p>
  Nous avons eu le privilège de collaborer avec des clients variés issus de
  secteurs divers. Leur confiance nous pousse à viser l'excellence dans 
  chaque projet.
</p>
  </div>

 <div className="happy-clients-track">
  {[...Array(3)].flatMap(() => logosClients).map((logo, i) => (
    <div key={i} className="client-card">
      <img src={logo} alt="client" style={{maxWidth:"130px", height:"60px", objectFit:"contain"}} />
    </div>
  ))}
</div>
</section>
      {/* =====================================================
          4. NOTRE PROCESSUS
      ===================================================== */}

      <section className="process-section">

        <div className="section-heading">

          <span className="section-subtitle">
            NOTRE PROCESSUS
          </span>

          <h2>
            Comment nous travaillons
          </h2>

          <p className="centrer">
            Une méthode simple et transparente pour
            transformer votre idée en solution concrète.
          </p>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <div className="process-number">
              01
            </div>

            <div className="process-icon">
              💬
            </div>

            <h3>
              Écoute
            </h3>

            <p>
              Nous échangeons avec vous afin de
              comprendre vos besoins, vos objectifs
              et vos attentes.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              02
            </div>

            <div className="process-icon">
              📋
            </div>

            <h3>
              Analyse
            </h3>

            <p>
              Nous analysons votre projet afin de
              définir la solution la plus adaptée.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              03
            </div>

            <div className="process-icon">
              💻
            </div>

            <h3>
              Réalisation
            </h3>

            <p>
              Notre équipe développe et met en place
              votre solution conformément aux besoins.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              04
            </div>

            <div className="process-icon">
              🚀
            </div>

            <h3>
              Livraison
            </h3>

            <p>
              Nous vous accompagnons lors de la mise
              en ligne et assurons le suivi de votre solution.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BARRE DE CONTACT
      ===================================================== */}
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
    <Link to="/services">Services</Link>
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
      {/* =====================================================
          MODAL VIDÉO
      ===================================================== */}

      {isVideoModalOpen && (

        <div
          className="modal-backdrop"
          onClick={() =>
            setIsVideoModalOpen(false)
          }
        >

          <div
            className="modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setIsVideoModalOpen(false)
              }
            >
              ×
            </button>

            <h3>
              Présentation InfoServices
            </h3>

            <p>
              La démonstration vidéo sera disponible
              sous peu.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default Accueil;
