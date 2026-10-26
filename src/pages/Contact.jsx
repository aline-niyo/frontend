import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Contact.css";

function Contact() {
     useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.contact-hero, .contact-section')
            .forEach(el => observer.observe(el));
    }, []);
    
    const [formData, setFormData] = useState({
        nom: "", email: "", telephone: "", sujet: "", message: ""
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");
        setLoading(true);

        const sendContact = async (retry = 0) => {
            try {
                const response = await fetch(
                    "https://infoservices-backend-2-8fuq.onrender.com/api/contact",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData)
                    }
                );
                const responseText = await response.text();
                if (!response.ok) throw new Error(`Erreur ${response.status} : ${responseText}`);
                setSuccess("Votre message a été envoyé avec succès !");
                setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
                setLoading(false);
            } catch (err) {
                if (retry < 2) {
                    setError(`Serveur se réveille... tentative ${retry+1}/3, on réessaie dans 15s`);
                    setTimeout(() => sendContact(retry+1), 15000);
                } else {
                    setError("Le serveur met du temps: " + err.message);
                    setLoading(false);
                }
            }
        };
        await sendContact();
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Contactez-nous</h1>
                    <p>Une question, un projet ou un besoin informatique ? Notre équipe est à votre disposition.</p>
                    <a href="#contact-section" className="hero-button">Nous contacter</a>
                </div>
            </section>
            <section className="contact-section" id="contact-section">
                <div className="contact-wrapper">
                    <div className="contact-form-container">
                        <span className="section-label">ÉCRIVEZ-NOUS</span>
                        <p className="form-description">Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.</p>
                        {success && <div className="success-message">{success}</div>}
                        {error && <div className="error-message">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group"><label>Nom :</label><input type="text" name="nom" value={formData.nom} onChange={handleChange} required /></div>
                                <div className="form-group"><label>Email :</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
                            </div>
                            <div className="form-row">
                                <div className="form-group"><label>Téléphone :</label><input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} /></div>
                                <div className="form-group"><label>Sujet :</label><input type="text" name="sujet" value={formData.sujet} onChange={handleChange} required /></div>
                            </div>
                            <div className="form-group full"><label>Message :</label><textarea name="message" value={formData.message} onChange={handleChange} rows="6" required></textarea></div>
                            <button type="submit" className="contact-button" disabled={loading}>{loading ? "Envoi en cours..." : "Envoyer le message"}</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <span className="section-label">NOS COORDONNÉES</span>
                        <h2>Contactez-nous</h2>
                        <div className="contact-info-item"><p>Excellence House<br/>3ème étage</p></div>
                        <div className="contact-info-item"><p>alineniyomwungere99@gmail.com</p></div>
                        <div className="contact-info-item"><p>+257 62573421</p></div>
                    </div>
                </div>
            </section>
            <footer className="contact-footer">
                <div className="footer-container">
                    <div className="footer-column footer-about">
                        <Link to="/" className="navbar-logo"><img src={logo} alt="Logo InfoServices" /><span>InfoServices</span></Link>
                    </div>
                    <div className="footer-column"><h3>Navigation</h3><Link to="/">Accueil</Link><Link to="/services">Services</Link><Link to="/apropos">À propos</Link><Link to="/contact">Contact</Link></div>
                    <div className="footer-column"><h3>Nos services</h3><a href="/services">Développement web</a><a href="/services">Solutions informatiques</a><a href="/services">Maintenance</a><a href="/services">Conseil informatique</a></div>
                    <div className="footer-column"><h3>Contact</h3><p>Bujumbura, Burundi</p><p>alineniyomwungere99@gmail.com</p><p>+257 62573421</p></div>
                </div>
                <div className="footer-bottom"><p>© {new Date().getFullYear()} InfoServices. Tous droits réservés.</p></div>
            </footer>
        </div>
    );
}
export default Contact;