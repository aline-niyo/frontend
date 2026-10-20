import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "./Devis.css";

const defaultImages = {
  "Développement web": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
  "Développement d applications": "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
  "Maintenance informatique": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "Installation de logiciels": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  "Réseaux informatiques": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  "Bases de données": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
  "Sécurité informatique": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
};

function Devis() {
useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.hero-section, .services-section, .devis-form-section, .process-section')
        .forEach(el => observer.observe(el));
}, []);

    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        nom: "", prenom: "", email: "", telephone: "",
        service_id: "", description: "", urgence: "Normale",
        budget: "", dateSouhaitee: ""
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = "https://infoservices-backend-production.up.railway.app";

    useEffect(() => {
        fetch(`${API_URL}/api/services`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur services");
                return res.json();
            })
            .then((data) => {
                setServices(data);
            })
            .catch(() => {
                setServices([
                    { id: 1, nom: "Dépannage Informatique", description: "Réparation PC, virus, lenteur." },
                    { id: 2, nom: "Création Site Web", description: "Site vitrine, e-commerce." },
                    { id: 3, nom: "Réseau & Wifi", description: "Installation réseau, routeur." },
                    { id: 4, nom: "Maintenance", description: "Contrat de maintenance." }
                ]);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(""); setError(""); setLoading(true);
        try {
            // TON BACKEND VEUT service: {id} et pas service_id
            const dataToSend = {
                nom: formData.nom,
                prenom: formData.prenom,
                email: formData.email,
                telephone: formData.telephone,
                description: formData.description,
                urgence: formData.urgence,
                budget: formData.budget ? Number(formData.budget) : null,
                dateSouhaitee: formData.dateSouhaitee || null,
                service: { id: Number(formData.service_id) }
            };

            console.log("Envoi vers /api/devis:", dataToSend);

            const response = await fetch(`${API_URL}/api/devis`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend)
            });

            const text = await response.text();
            console.log("Réponse backend:", response.status, text);

            if (!response.ok) {
                throw new Error(text || `Erreur ${response.status}`);
            }

            setSuccess("Votre demande de devis a été envoyée avec succès !");
            setFormData({ nom: "", prenom: "", email: "", telephone: "", service_id: "", description: "", urgence: "Normale", budget: "", dateSouhaitee: "" });
        } catch (err) {
            console.error(err);
            setError("Erreur: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="devis-page">
            <section className="section hero-section">
                <h1>Nos services</h1>
                <p>Nous fournissons des solutions numériques innovantes adaptées aux objectifs de votre entreprise.</p>
                <a href="#devis-form" className="hero-btn">Demander un devis</a>
            </section>
<section className="services-section">
  <div className="services-grid">
    {services.length > 0 ? services.map((s) => {
      const imgSrc = s.image ? `/uploads/${s.image}` : (defaultImages[s.nom] || defaultImages["Développement web"]);
      return (
        <div key={s.id} className="service-card">
          <div className="card-img"><img src={imgSrc} alt={s.nom} /></div>
          <h3>{s.nom}</h3>
          <p>{s.description}</p>
          <span className="prix">{Number(s.prix).toLocaleString()} FBU</span>
        </div>
      )
    }) : <p className="loading">Chargement...</p>}
  </div>
</section>
<section id="devis-form" className="devis-form-section">
  <div className="devis-wrapper">
    <div className="devis-container">
      <h2>Demander un devis</h2>
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Nom</label><input type="text" name="nom" value={formData.nom} onChange={handleChange} required /></div>
          <div className="form-group"><label>Prénom</label><input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
          <div className="form-group"><label>Téléphone</label><input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required /></div>
        </div>
        <div className="form-group">
          <label>Service recherché</label>
          <select name="service_id" value={formData.service_id} onChange={handleChange} required>
            <option value="">-- Sélectionnez un service --</option>
            {services.map((service) => (<option key={service.id} value={service.id}>{service.nom}</option>))}
          </select>
        </div>
        <div className="form-group"><label>Description</label><textarea name="description" value={formData.description} onChange={handleChange} rows="5" required></textarea></div>
        <div className="form-row">
          <div className="form-group"><label>Urgence</label><select name="urgence" value={formData.urgence} onChange={handleChange}><option>Faible</option><option>Normale</option><option>Urgente</option></select></div>
          <div className="form-group"><label>Budget (FBU)</label><input type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder="Ex: 200000" /></div>
        </div>
        <div className="form-group"><label>Date souhaitée</label><input type="date" name="dateSouhaitee" value={formData.dateSouhaitee} onChange={handleChange} /></div>
        <button type="submit" className="submit-button small" disabled={loading}>{loading ? "Envoi..." : "Envoyer la demande"}</button>
      </form>
    </div>
    <div className="devis-info">
      <div className="devis-image"><img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" alt="Devis informatique" /></div>
      <h3>Votre projet, notre priorité</h3>
      <p>Nous vous répondons en moins de 24h avec un devis détaillé et transparent.</p>
      <p><strong>✓ Devis gratuit</strong><br/><strong>✓ Réponse rapide</strong><br/><strong>✓ Support local</strong> - Bujumbura</p>
    </div>
  </div>
</section>
            <section className="section process-section"><h2>Comment ça marche ?</h2><div className="process-steps"><div className="step"><span>1</span><h3>Vous demandez</h3><p>Vous remplissez le formulaire</p></div><div className="step"><span>2</span><h3>Nous analysons</h3><p>Devis en 24h</p></div><div className="step"><span>3</span><h3>On intervient</h3><p>Service rapide et garanti</p></div></div></section>
               <footer className="contact-footer"><div className="footer-container"><div className="footer-column footer-about"><Link to="/" className="navbar-logo"><img src={logo} alt="Logo InfoServices" /><span>InfoServices</span></Link><div className="social-links"><a href="https://www.facebook.com/profile.php?id=100081083984402&sk=reels_tab" className="social facebook">f</a><a href="#" className="social twitter">X</a><a href="#" className="social linkedin">in</a></div></div><div className="footer-column"><h3>Navigation</h3><div className="footer-column"><Link to="/">Accueil</Link><Link to="/services">Services</Link><Link to="/apropos">À propos</Link><Link to="/contact">Contact</Link></div></div><div className="footer-column"><h3>Nos services</h3><a href="/services">Développement web</a><a href="/services">Solutions informatiques</a><a href="/services">Maintenance</a><a href="/services">Conseil informatique</a></div><div className="footer-column"><h3>Contact</h3><p>Bujumbura, Burundi</p><p>alineniyomwungere99@gmail.com</p><p>+257 62573421</p></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} InfoServices. Tous droits réservés.</p></div></footer>
        </div>
    );
}
export default Devis;
