import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// nos clients
import logo1 from "../assets/logo2/im7.jpg";
import logo2 from "../assets/logo2/im2.jpg";
import logo3 from "../assets/logo2/im3.jpg";
import logo4 from "../assets/logo2/im4.jpg";
import logo5 from "../assets/logo2/im5.jpg";
import logo6 from "../assets/logo2/im6.jpg";

import droite from "../assets/back.webp";

import logo from "../assets/logo.png"; 

const defaultImages = {
  "Développement Site Web Vitrine": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
  "Développement Application E-commerce": "https://images.unsplash.com/photo-1556740772-1a741367b93e?w=600&h=400&fit=crop",
  "Développement Application Mobile": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  "Installation Réseau Entreprise": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  "Maintenance Informatique Annuelle": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  "Cybersécurité & Protection Données": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  "Formation Informatique": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  "Conseil & Transformation Digitale": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
};

const colors = ["#3b82f6","#10b981","#f59e0b","#ef4444","#4e0ee5","#ec4899","#030303"];

function Services() {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.services-hero, .services-section, .happy-clients, .tech-stack-section, .services-cta')
        .forEach(el => observer.observe(el));
}, []);

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
       fetch("https://infoservices-backend-2-8fuq.onrender.com/api/services")
            .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
            .then((data) => { setServices(data); setLoading(false); })
            .catch(() => { setError("Impossible de récupérer les services."); setLoading(false); });
    }, []);

    return (
        <div className="services-page">
            
            {/* SECTION 1 - HERO */}
            <section className="services-hero">
                <h1>Nos services</h1>
                <p>Nous proposons des solutions numériques innovantes adaptées à vos objectifs d'affaires. Du développement au design et bien plus encore, 
                    nous sommes votre partenaire de confiance pour réussir dans le monde numérique.</p>
            </section>

            {/* SECTION 2 - TES SERVICES */}
            <section className="services-section">
  <h2>Nos Services Informatiques</h2>
  <div className="services-grid">
    {services.length > 0 ? services.map((s) => {
      const imgSrc = s.image ? `/uploads/${s.image}` : (defaultImages[s.nom] || defaultImages["Développement web"]);
      return (
        <div key={s.id} className="service-card">
          <div className="card-img">
            <img src={imgSrc} alt={s.nom} />
          </div>
          <h3>{s.nom}</h3>
          <p>{s.description}</p>
          <span className="prix">{Number(s.prix).toLocaleString()} FBU</span>
        </div>
      )
    }) : <p className="loading">Chargement...</p>}
  </div>
</section>

            {/* SECTION 3 - STACK TECHNOLOGIQUE */}
           <section className="happy-clients">
             <div className="happy-clients-header">
              <h2>Notre stack technologique</h2>
              <p>Nous intégrons les dernières technologies et outils pour fournir des solutions innovantes.</p>
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

             <div className="tech-stack-section">
                <div className="cta-card">
                    <div className="cta-text">
                        <h3>Démarrons votre projet dès aujourd'hui</h3>
                        <p>Nous sommes là pour vous aider à transformer vos idées en solutions à fort impact. Contactez-nous et découvrez comment nous pouvons collaborer.</p>
                    </div>
                    <a href="/contact" className="cta-button">contactons-nous</a>
                </div>
             </div>
           </section>

            {/* SECTION 4 - CTA FINALE 2 COLONNES */}
            <section className="services-cta">
                <div className="cta-left">
                    <h2>Prêt à digitaliser votre organisation ?</h2>
                    <p>Parlons de votre projet. Devis gratuit en moins de 24h.</p>
                    <a href="/devis" className="cta-btn">Demander un devis</a>
                </div>
                <div className="cta-right">
                    <img src={droite} alt="Logo" />
                </div>
            </section>

            {/* FOOTER */}
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
export default Services;