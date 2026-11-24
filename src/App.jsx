import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Devis from "./pages/demandes_devis";

import DeveloppementWeb from "./pages/DeveloppementWeb";
import Solution from "./pages/Solution";
import Maintenance from "./pages/Maintenance";
import Conseil from "./pages/Conseil";

// 👇 AJOUTÉ : pour remonter en haut à chaque clic
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 AJOUTÉ */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/services/developpement-web" element={<DeveloppementWeb />} />
        <Route path="/services/solutions-informatiques" element={<Solution />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/conseil-informatique" element={<Conseil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;