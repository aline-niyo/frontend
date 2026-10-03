import { Link } from "react-router-dom";
import "./Apropos.css";

// IMPORT DU LOGO INNOVATION
import logoInov from "../assets/logo_inov.jpg";

function Apropos() {
    return (
        <div className="apropos-page">

            {/* =========================
                INTRODUCTION
            ========================= */}

            <section className="apropos-header">

                <h1>À propos d'InfoServices</h1>

                <p>
                    Une plateforme dédiée aux solutions et services
                    informatiques adaptés à vos besoins.
                </p>

            </section>


            {/* =========================
                PRÉSENTATION
            ========================= */}

            <section className="apropos-presentation">

                <div className="apropos-content">

                    <h2>Qui sommes-nous ?</h2>

                    <p>
                        InfoServices est une plateforme spécialisée dans les
                        services informatiques. Nous accompagnons les
                        particuliers, les entreprises et les organisations
                        dans la réalisation de leurs projets informatiques.
                    </p>

                    <p>
                        Notre objectif est de proposer des solutions simples,
                        efficaces et adaptées aux besoins de chaque client.
                        Vous pouvez nous soumettre n'importe quel besoin
                        informatique et notre équipe l'étudiera afin de vous
                        proposer une solution personnalisée.
                    </p>

                </div>

            </section>


            {/* =========================
                NOTRE MISSION
            ========================= */}

            <section className="mission">

                <h2>Notre mission</h2>

                <p>
                    Faciliter l'accès aux services informatiques en offrant
                    à chaque client une solution adaptée à son problème,
                    son projet et son budget.
                </p>

            </section>


            {/* =========================
                NOS VALEURS
            ========================= */}

            <section className="valeurs">

                <h2>Nos valeurs</h2>

                <div className="valeurs-container">

                    <div className="valeur-card">
                        <div className="card-header">
                            <img src={logoInov} alt="Innovation" className="valeur-icon" />
                            <h3>Innovation</h3>
                        </div>

                        <p>
                            Nous recherchons des solutions modernes et
                            adaptées aux évolutions technologiques.
                        </p>
                    </div>


                    <div className="valeur-card">
                        <h3>Qualité</h3>

                        <p>
                            Nous accordons une grande importance à la qualité
                            de nos services et de nos solutions.
                        </p>
                    </div>


                    <div className="valeur-card">
                        <h3> Confiance</h3>

                        <p>
                            Nous construisons une relation de confiance
                            avec nos clients à chaque étape du projet.
                        </p>
                    </div>


                    <div className="valeur-card">
                        <h3> Réactivité</h3>

                        <p>
                            Nous analysons rapidement les demandes afin
                            d'apporter des réponses adaptées.
                        </p>
                    </div>

                </div>

            </section>


            {/* =========================
                COMMENT ÇA FONCTIONNE ?
            ========================= */}

            <section className="fonctionnement">

                <h2>Comment ça fonctionne ?</h2>

                <div className="etapes-container">

                    <div className="etape">
                        <div className="numero">1</div>

                        <h3>Décrivez votre besoin</h3>

                        <p>
                            Expliquez-nous le service informatique dont
                            vous avez besoin.
                        </p>
                    </div>


                    <div className="etape">
                        <div className="numero">2</div>

                        <h3>Analyse de la demande</h3>

                        <p>
                            Notre équipe étudie votre demande et identifie
                            la meilleure solution.
                        </p>
                    </div>


                    <div className="etape">
                        <div className="numero">3</div>

                        <h3>Proposition personnalisée</h3>

                        <p>
                            Nous vous proposons un prix et un délai adaptés
                            à votre projet.
                        </p>
                    </div>

                </div>

            </section>


            {/* =========================
                APPEL À L'ACTION
            ========================= */}

            <section className="apropos-action">

                <h2>Vous avez un projet informatique ?</h2>

                <p>
                    N'hésitez pas à nous présenter votre besoin.
                </p>

                <Link
                    to="/devis"
                    className="apropos-button"
                >
                    Demander un devis
                </Link>

            </section>

        </div>
    );
}

export default Apropos;