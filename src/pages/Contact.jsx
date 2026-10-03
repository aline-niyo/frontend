import { Link } from "react-router-dom";
import { useState } from "react";

import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: ""
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:8080/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const responseText = await response.text();

            console.log("Statut HTTP :", response.status);
            console.log("Réponse du serveur :", responseText);

            if (!response.ok) {
                throw new Error(
                    `Erreur serveur ${response.status} : ${responseText}`
                );
            }

            const data = JSON.parse(responseText);

            console.log("Message enregistré :", data);

            setSuccess("Votre message a été envoyé avec succès !");

            setFormData({
                nom: "",
                email: "",
                telephone: "",
                sujet: "",
                message: ""
            });

        } catch (error) {
            console.error("Erreur complète :", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">

            {/* =====================================================
                SECTION 1 : HEADER
            ====================================================== */}
            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="contact-small-title">
                        CONTACTEZ-NOUS
                    </span>

                    <h1>
                        Parlons de votre
                        <span> projet</span>
                    </h1>

                    <p>
                        Une question, un projet ou un besoin informatique ?
                        Notre équipe est à votre disposition pour vous
                        accompagner.
                    </p>

                    <a href="#contact-section" className="hero-button">
                        Nous contacter
                    </a>

                </div>

            </section>


            {/* =====================================================
                SECTION 2 : FORMULAIRE + INFORMATIONS
            ====================================================== */}
            <section
                className="contact-section"
                id="contact-section"
            >

                <div className="contact-wrapper">

                    {/* ---------------- FORMULAIRE ---------------- */}
                    <div className="contact-form-container">

                        <span className="section-label">
                            ÉCRIVEZ-NOUS
                        </span>

                        

                        <p className="form-description">
                            Remplissez le formulaire ci-dessous et
                            nous vous répondrons dans les meilleurs délais.
                        </p>

                        {success && (
                            <div className="success-message">
                                {success}
                            </div>
                        )}

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="nom">
                                        Nom *
                                    </label>

                                    <input
                                        id="nom"
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email *
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="telephone">
                                        Téléphone
                                    </label>

                                    <input
                                        id="telephone"
                                        type="tel"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        placeholder="+257 XX XX XX XX"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sujet">
                                        Sujet *
                                    </label>

                                    <input
                                        id="sujet"
                                        type="text"
                                        name="sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        placeholder="Sujet de votre message"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="form-group">

                                <label htmlFor="message">
                                    Message *
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Écrivez votre message..."
                                    rows="6"
                                    required
                                ></textarea>

                            </div>


                            <button
                                type="submit"
                                className="contact-button"
                                disabled={loading}
                            >
                                {loading
                                    ? "Envoi en cours..."
                                    : "Envoyer le message"
                                }
                            </button>

                        </form>

                    </div>


                    {/* ---------------- INFORMATIONS ---------------- */}
                    <div className="contact-info">

                        <span className="section-label">
                            NOS COORDONNÉES
                        </span>

                        <h2>
                            Contactez-nous
                        </h2>

                        <p className="contact-info-description">
                            Vous pouvez également nous contacter
                            directement grâce aux informations
                            ci-dessous.
                        </p>


                        {/* Adresse */}
                        <div className="contact-info-item">

                            <div className="contact-icon">
    <i className="fa-solid fa-location-dot"></i>
</div>
                            <div>
                                {/* <h3>Notre adresse</h3> */}

                                <p>
                                    Excellence House<br />
                                    3em etage<br />
                                
                                </p>
                            </div>

                        </div>


                        {/* Email */}
                        <div className="contact-info-item">

                            <div className="contact-icon">
                                ✉
                            </div>

                            <div>
                                {/* <h3>Email</h3> */}

                                <p>
                                    alineniyomwungere99@gmail.com
                                </p>
                            </div>

                        </div>


                        {/* Téléphone */}
                        <div className="contact-info-item">

                            <div className="contact-icon">
                                ☎
                            </div>

                            <div>
                                {/* <h3>Téléphone</h3> */}

                                <p>
                                    +257 62573421
                                </p>
                            </div>

                        </div>


                        {/* Réseaux sociaux */}
                        <div className="social-section">

                            <h3>
                                Nos Reseaux sociaux
                            </h3>

                            <div className="social-links">

                                <a
                                    href="https://www.facebook.com/profile.php?id=100081083984402&sk=reels_tab"
                                    className="social facebook"
                                >
                                    f
                                </a>

                                <a
                                    href="#"
                                    className="social twitter"
                                >
                                    X
                                </a>

                                <a
                                    href="#"
                                    className="social linkedin"
                                >
                                    in
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SECTION 3 : FOOTER
            ====================================================== */}
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

export default Contact;
