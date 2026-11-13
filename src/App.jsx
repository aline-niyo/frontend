import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

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



function App() {

    return (

        <BrowserRouter>

        

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