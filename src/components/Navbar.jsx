import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo InfoServices" />
          <span>InfoServices</span>
        </Link>

        {/* Bouton burger - visible que sur téléphone */}
        <button className="navbar-burger" onClick={() => setOpen(!open)}>
          <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>

        {/* Menu */}
        <div className={`navbar-menu ${open ? "active" : ""}`}>
          <NavLink to="/" className="navbar-link" onClick={() => setOpen(false)}>
            Accueil
          </NavLink>
          <NavLink to="/services" className="navbar-link" onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/apropos" className="navbar-link" onClick={() => setOpen(false)}>
            À propos
          </NavLink>
          <NavLink to="/contact" className="navbar-link" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <Link to="/devis" className="navbar-devis" onClick={() => setOpen(false)}>
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;