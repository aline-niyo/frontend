
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Accueil.css";
import logogoogle from "../assets/google.webp";
import logomicro from "../assets/microsoft_cutout.png";
import logoslack from "../assets/slack_cutout.png";
import logodro from "../assets/dropbox_cutout.png";
import logoba from "../assets/apropo.jpg";

 //nos clients
import logo1 from "../assets/logos/coped.png";
import logo2 from "../assets/logos/plateforme.png";
import logo3 from "../assets/logos/conamus.png";
import logo4 from "../assets/logos/abrema.png";
import logo5 from "../assets/logos/abddm.png";
import logo6 from "../assets/logos/pamac.png";



function Accueil() {
  const [activeService, setActiveService] = useState(2);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

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

      </section>


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

      <section className="solutions-section">

        <div className="section-heading">

          <h2>NOS SOLUTIONS</h2>
      
          <h2>
            Des solutions adaptées à
            vos besoins
          </h2>
          <p class="text-4xl font-bold leading-tight">
Découvrez nos principales solutions digitales pour développer votre activité.\
 De la création de sites web et d'applications performantes au 
 référencement et au marketing digital, nous mettons la technologie au service de 
 votre croissance.
</p>
        </div>


        <div className="solutions-grid">

          <div className="solution-card">

            <div className="solution-icon">
              💻
            </div>

            <h3>
              Développement Web
            </h3>

            <p>
              Création de sites web modernes,
              rapides, sécurisés et adaptés
              aux besoins de votre entreprise.
            </p>

            <Link to="/services" className="solution-btn1">
              Découvrir →
            </Link>

          </div>


          <div className="solution-card">

            <div className="solution-icon">
              📱
            </div>

            <h3>
              Solutions digitales
            </h3>

            <p>
              Conception de solutions numériques
              permettant d'améliorer votre organisation
              et vos activités.
            </p>

            <Link to="/services" className="solution-btn2">
              Découvrir →
            </Link>

          </div>


          <div className="solution-card">

            <div className="solution-icon" >
              🛡️
            </div>

            <h3>
              Sécurité informatique
            </h3>

            <p>
              Protection de vos données, systèmes
              et infrastructures informatiques.
            </p>

            <Link to="/services" className="solution-btn">
              Découvrir →
            </Link>

          </div>


          <div className="solution-card">

            <div className="solution-icon">
              ⚙️
            </div>

            <h3>
              Maintenance
            </h3>

            <p>
              Assistance et maintenance pour assurer
              le bon fonctionnement de vos équipements
              et systèmes.
            </p>

            <Link to="/services" className="solution-btn4">
  Découvrir →
</Link>

          </div>

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

  <div className="happy-clients-marquee-wrapper">
    <div className="fade-left"></div>
    <div className="fade-right"></div>

    <div className="happy-clients-track">
      {[...Array(3)].flatMap(() => [logo1, logo2, logo3, logo4, logo5, logo6]).map((logo, i) => (
        <div key={i} className="client-card">
          <img src={logo} alt="client" />
        </div>
      ))}
    </div>
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

          <p>
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

      <footer className="contact-footer">

                <div className="footer-container">

                    {/* Logo / présentation */}
                    <div className="footer-column footer-about">

                        <h2>
                            Info<span>Services</span>
                        </h2>

                        <p>
                            Votre partenaire informatique pour des
                            solutions modernes, fiables et adaptées
                            à vos besoins.
                        </p>

                    </div>


                    {/* Navigation */}
                    <div className="footer-column">

                        <h3>
                            Navigation
                        </h3>

                       <div className="footer-column">
    <Link to="/">Accueil</Link>
    <Link to="/services">Services</Link>
    <Link to="/apropos">À propos</Link>
    <Link to="/contact">Contact</Link>
</div>

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
                             <i className="fa-solid fa-location-dot"></i> Bujumbura, Burundi
                        </p>

                        <p>
                            ✉ alineniyomwungere99@gmail.com
                        </p>

                        <p>
                            ☎ +257 62573421
                        </p>

                    </div>

                </div>


                {/* Bas du footer */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} InfoServices.
                        Tous droits réservés.
                    </p>

                    <div className="footer-social">

                        <a href="https://www.facebook.com/p/Setic-Burundi-100067322347665/">Facebook</a>
                        <a href="#">X</a>
                        <a href="#">LinkedIn</a>

                    </div>

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
