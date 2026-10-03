import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../assets/logo.png"; // Vérifiez que le chemin de votre logo est correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo InfoServices" />
          <span>InfoServices</span>
        </Link>

        {/* Menu de navigation */}
        <div className="navbar-menu">
          <NavLink to="/" className="navbar-link">
            Accueil
          </NavLink>

          <NavLink to="/services" className="navbar-link">
            Services
          </NavLink>

          <NavLink to="/apropos" className="navbar-link">
            À propos
          </NavLink>

          <NavLink to="/contact" className="navbar-link">
            contact
          </NavLink>

          {/* <NavLink to="/blog" className="navbar-link">
            Blog
          </NavLink> */}

          {/* Bouton de contact encadré */}
          <Link to="/devis" className="navbar-devis">
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  );
}

// L'export doit TOUJOURS être la dernière ligne du fichier :
export default Navbar;