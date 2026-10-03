import { useEffect, useState } from "react";
import "./Devis.css";

function Devis() {

    // ==============================
    // Liste des services
    // ==============================
    const [services, setServices] = useState([]);

    // ==============================
    // États du formulaire
    // ==============================
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        service_id: "",
        description: "",
        urgence: "Normale",
        budget: "",
        dateSouhaitee: ""
    });

    // ==============================
    // Message de succès
    // ==============================
    const [success, setSuccess] = useState("");

    // ==============================
    // Message d'erreur
    // ==============================
    const [error, setError] = useState("");

    // ==============================
    // État d'envoi
    // ==============================
    const [loading, setLoading] = useState(false);


    // ==============================
    // Récupérer les services
    // depuis Spring Boot
    // ==============================
    useEffect(() => {

        fetch("http://localhost:8080/api/services")

            .then((response) => {

                if (!response.ok) {
                    throw new Error(
                        "Erreur lors de la récupération des services"
                    );
                }

                return response.json();
            })

            .then((data) => {

                setServices(data);

            })

            .catch((error) => {

                console.error("Erreur :", error);

                setError(
                    "Impossible de récupérer les services."
                );

            });

    }, []);


    // ==============================
    // Modifier les champs
    // ==============================
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    // ==============================
    // Envoyer le formulaire
    // vers Spring Boot
    // ==============================
    const handleSubmit = async (e) => {

        e.preventDefault();

        // Supprimer les anciens messages
        setSuccess("");
        setError("");

        // Activer le chargement
        setLoading(true);

        try {

            // ==============================
            // Préparer les données
            // ==============================
            const dataToSend = {

                nom: formData.nom,

                prenom: formData.prenom,

                email: formData.email,

                telephone: formData.telephone,

                description: formData.description,

                urgence: formData.urgence,

                budget: formData.budget
                    ? Number(formData.budget)
                    : null,

                dateSouhaitee: formData.dateSouhaitee
                    ? formData.dateSouhaitee
                    : null,

                // Relation avec Service
                service: {
                    id: Number(formData.service_id)
                }
            };


            // ==============================
            // Envoyer vers Spring Boot
            // ==============================
            const response = await fetch(
                "http://localhost:8080/api/devis",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(dataToSend)
                }
            );


            // ==============================
            // Vérifier la réponse
            // ==============================
            if (!response.ok) {

                throw new Error(
                    "Erreur lors de l'envoi de la demande."
                );

            }


            // Récupérer la réponse de Spring Boot
            const data = await response.json();

            console.log(
                "Demande enregistrée :",
                data
            );


            // ==============================
            // Message de succès
            // ==============================
            setSuccess(
                "Votre demande de devis a été envoyée avec succès !"
            );


            // ==============================
            // Vider le formulaire
            // ==============================
            setFormData({

                nom: "",
                prenom: "",
                email: "",
                telephone: "",
                service_id: "",
                description: "",
                urgence: "Normale",
                budget: "",
                dateSouhaitee: ""

            });

        } catch (error) {

            console.error("Erreur :", error);

            setError(
                "Une erreur est survenue lors de l'envoi de votre demande."
            );

        } finally {

            // Désactiver le chargement
            setLoading(false);

        }
    };


    return (

        <div className="devis-page">

            <div className="devis-container">

                <h1>Demander un devis</h1>

                <p className="devis-introduction">
                    Décrivez votre besoin informatique. Notre équipe <br />
                    analysera votre demande et vous proposera un prix adapté.
                </p>


                {/* ==============================
                    MESSAGE DE SUCCÈS
                ============================== */}

                {success && (

                    <div className="success-message">
                        {success}
                    </div>

                )}


                {/* ==============================
                    MESSAGE D'ERREUR
                ============================== */}

                {error && (

                    <div className="error-message">
                        {error}
                    </div>

                )}


                {/* ==============================
                    FORMULAIRE
                ============================== */}

                <form onSubmit={handleSubmit}>


                    {/* ==============================
                        NOM + PRÉNOM
                    ============================== */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="nom">
                                Nom
                            </label>

                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                placeholder="Votre nom"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="prenom">
                                Prénom
                            </label>

                            <input
                                type="text"
                                id="prenom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                placeholder="Votre prénom"
                                required
                            />

                        </div>

                    </div>


                    {/* ==============================
                        EMAIL + TÉLÉPHONE
                    ============================== */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="exemple@email.com"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="telephone">
                                Téléphone
                            </label>

                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                placeholder="Votre numéro de téléphone"
                                required
                            />

                        </div>

                    </div>


                    {/* ==============================
                        SERVICE
                    ============================== */}

                    <div className="form-group">

                        <label htmlFor="service_id">
                            Service informatique recherché
                        </label>

                        <select
                            id="service_id"
                            name="service_id"
                            value={formData.service_id}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                -- Sélectionnez un service --
                            </option>

                            {services.map((service) => (

                                <option
                                    key={service.id}
                                    value={service.id}
                                >
                                    {service.nom}
                                </option>

                            ))}

                        </select>

                        <small>
                            Sélectionnez le service correspondant à votre besoin.
                        </small>

                    </div>


                    {/* ==============================
                        DESCRIPTION
                    ============================== */}

                    <div className="form-group">

                        <label htmlFor="description">
                            Description de votre besoin
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Expliquez-nous en détail ce dont vous avez besoin..."
                            rows="6"
                            required
                        ></textarea>

                    </div>


                    {/* ==============================
                        URGENCE + BUDGET
                    ============================== */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="urgence">
                                Niveau d'urgence
                            </label>

                            <select
                                id="urgence"
                                name="urgence"
                                value={formData.urgence}
                                onChange={handleChange}
                            >

                                <option value="Faible">
                                    Faible
                                </option>

                                <option value="Normale">
                                    Normale
                                </option>

                                <option value="Urgente">
                                    Urgente
                                </option>

                            </select>

                        </div>


                        <div className="form-group">

                            <label htmlFor="budget">
                                Budget estimatif (facultatif)
                            </label>

                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="Ex : 200000"
                                min="0"
                            />

                        </div>

                    </div>


                    {/* ==============================
                        DATE SOUHAITÉE
                    ============================== */}

                    <div className="form-group">

                        <label htmlFor="dateSouhaitee">
                            Date souhaitée
                        </label>

                        <input
                            type="date"
                            id="dateSouhaitee"
                            name="dateSouhaitee"
                            value={formData.dateSouhaitee}
                            onChange={handleChange}
                        />

                    </div>


                    {/* ==============================
                        BOUTON
                    ============================== */}

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={loading}
                    >

                        {loading
                            ? "Envoi en cours..."
                            : "Envoyer la demande"
                        }

                    </button>

                </form>

            </div>

        </div>
    );
}

export default Devis;
