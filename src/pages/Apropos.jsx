import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Apropos.css";

import equipeImg from "../assets/img.jpg";
import philoImg from "../assets/philo.webp";
import logo from "../assets/logo.png"; 

function Apropos() {
    const [openIndex, setOpenIndex] = useState(null);
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.apropos-hero-section, .histoire-section, .philosophie-section, .tech-stack-grid, .cta-wrapper')
            .forEach(el => observer.observe(el));
    }, []);

    const philosophies = [
        { 
            title: "Centré sur l'utilisateur et évolutif :", 
            text: "Nous plaçons l'utilisateur final au centre de chaque décision pour créer des solutions intuitives qui grandissent avec votre entreprise." 
        },
        { 
            title: "Prêt pour l'intégration système", 
            text: "Nos solutions sont conçues pour s'intégrer facilement à vos outils existants." 
        },
        { 
            title: "Conception contextuelle", 
            text: "Nous analysons votre contexte local pour livrer une solution 100% adaptée au marché burundais." 
        },
        { 
            title: "Fort de sa formation", 
            text: "Nous formons vos équipes pour qu'elles soient autonomes et efficaces." 
        },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="apropos-page">

            {/* =========================
                HEADER + 3 CARTES
            ========================= */}
            <section className="apropos-hero-section">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <h1>À propos de nous</h1>
                    <p>
                       InfoService Burundi, notre objectif est de donner aux 
                        entreprises  <br />les moyens de réussir grâce à la créativité, l'expertise et <br /> un
                        engagement envers l'excellence.
                    </p>
                </div>

                <div className="hero-cards-container">
                    <div className="hero-card">
                        <span className="card-bar"></span>
                        <h2>Notre Mission</h2>
                        <p>
                            Donner aux entreprises locales les moyens d'optimiser leurs opérations et
                            d'atteindre leurs objectifs stratégiques grâce à des solutions technologiques de pointe.
                        </p>
                    </div>
                    <div className="hero-card">
                        <span className="card-bar"></span>
                        <h2>Notre Engagement</h2>
                        <p>
                            Nous nous efforçons de fournir des solutions qui non seulement répondent à leurs besoins actuels,
                            mais anticipent également les défis futurs, garantissant ainsi un succès et une croissance à long terme.
                        </p>
                    </div>
                    <div className="hero-card">
                        <span className="card-bar"></span>
                        <h2>Ce que nous faisons</h2>
                        <ul className="card-list">
                            <li>Développement logiciel</li>
                            <li>Conception de sites web</li>
                            <li>Développement d'applications mobiles</li>
                            <li>Conception graphique</li>
                            <li>Marketing numérique</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* =========================
                NOTRE HISTOIRE
            ========================= */}
            <section className="histoire-section">
                <div className="histoire-container">
                    <div className="histoire-content">
                        <h2>Notre Histoire</h2>
                        <p>
                            <strong>InfoServices Burundi</strong> est née d'une conviction simple : 
                            chaque entreprise locale mérite d'avoir accès aux mêmes outils technologiques 
                            que les grandes entreprises internationales.
                        </p>
                        <p>
                            Depuis nos débuts, nous avons accompagné des dizaines d'entreprises à Bujumbura 
                            et dans tout le Burundi dans leur transformation digitale.
                        </p>
                        <p>
                            Notre équipe passionnée combine créativité, expertise technique et une compréhension 
                            profonde du marché local.
                        </p>
                        <Link to="/contact" className="histoire-button">
                            Rejoignez notre histoire →
                        </Link>
                    </div>

                    <div className="histoire-image-wrapper">
                        <div className="histoire-image-bg"></div>
                        <img 
                            src={equipeImg} 
                            alt="Notre équipe" 
                            className="histoire-image" 
                        />
                    </div>
                </div>
            </section>

            {/* =========================
                NOTRE PHILOSOPHIE
            ========================= */}
            <section className="philosophie-section">
                <div className="philosophie-container">
                    <div className="philosophie-image-wrapper">
                        <img src={philoImg} alt="philosophie" className="philo-image" />
                    </div>

                    <div className="philosophie-content">
                        <h2>Notre Philosophie</h2>
                        <p className="philosophie-intro">
                            Nous croyons au pouvoir de l'innovation et nous nous engageons à fournir des 
                            solutions technologiques de pointe qui répondent aux défis uniques auxquels 
                            sont confrontées les entreprises locales.
                        </p>

                        <div className="philosophie-accordion">
                            {philosophies.map((item, index) => (
                                <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
                                    <button className="accordion-header" onClick={() => toggle(index)}>
                                        <span>{item.title}</span>
                                        <span className="accordion-icon">
                                            {openIndex === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div className="accordion-body">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4eme section */}
            <div className="pile">
                <h3>Notre pile technologique</h3>
    <p>Nous intégrons les technologies et les outils les plus récents 
        pour fournir des solutions innovantes.</p>
            </div>
   <div className="tech-stack-grid">
    
  {/* On double la liste pour un défilement infini */}
  {[...Array(2)].map((_, dup) => (
    <>
      {/* <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/angular.svg" alt="Angular" /></div> */}
      {/* <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/apache-feather.svg" alt="Apache" /></div> */}
      <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="Bootstrap" /></div>
      <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="Django" /></div>
      <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="Firebase" /></div>
      <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" alt="Flutter" /></div>
      <div className="tech-card"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel" /></div>
       <div className="tech-card"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" /></div>
       <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg" alt="Office" /></div>
       <div className="tech-card"><img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML5" /></div>
       <div className="tech-card"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL" /></div>
      
    </>
  ))}
</div>
<div className="cta-wrapper">
  <div className="cta-card">
    <div className="cta-text">
      <h2>Commençons votre projet dès aujourd'hui</h2>
      <p>
        Nous sommes là pour vous aider à transformer vos idées en solutions concrètes.
        Contactez-nous pour découvrir comment nous pouvons collaborer.
      </p>
    </div>
    <button className="cta-btn">
      Contactez-Nous <span>›</span>
    </button>
  </div>
</div>
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
                                       className="social twitter"
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

export default Apropos;