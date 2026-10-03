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

const colors = ["#3b82f6","#10b981","#f59e0b","#ef4444","#4e0ee5","#ec4899","#030303"];

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/services")
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
            <section className="home-services">
                <p className="services-intro">Découvrez les services informatiques que nous proposons.</p>

                {loading ? <p className="loading-message">Chargement des services...</p> : 
                 error ? <p className="error-message">{error}</p> :
                <div className="home-services-container">
                    {services.length === 0 ? <p style={{color:"#9ca3af"}}>Aucun service disponible.</p> :
                    services.map((service, index) => (
                        <div className="home-service-card" key={service.id || service.nom} style={{ borderTopColor: colors[index % colors.length] }}>
                            <h3>{service.nom}</h3>
                            <p>{service.description}</p>
                            <p className="home-service-price">Prix : {service.prix}</p>
                        </div>
                    ))}
                </div>
                }
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
                    <a href="/contact" className="cta-btn">Demander un devis</a>
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
    <h3>Navigation</h3>

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

        </div>
    );
}
export default Services;