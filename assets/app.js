import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // Importer framer-motion
import "/home/mehdi/Documents/projets/portfolio/assets/styles/app.css";
import Navbar from "/home/mehdi/Documents/projets/portfolio/assets/components/Navbar.js";
import "/home/mehdi/Documents/projets/portfolio/assets/styles/Navbar.css";

// Composants de tes pages
import Home from "/home/mehdi/Documents/projets/portfolio/assets/components/Home.js";
import About from "/home/mehdi/Documents/projets/portfolio/assets/components/About.js";
import Projets from "/home/mehdi/Documents/projets/portfolio/assets/components/Projets.js";
import Contact from "/home/mehdi/Documents/projets/portfolio/assets/components/Contact.js";

const pageAnimation = {
  initial: { opacity: 0, y: 50 }, // Commence avec une opacité de 0 et un déplacement vers le bas
  animate: { opacity: 1, y: 0 }, // Devient complètement visible et se déplace vers sa position d'origine
  exit: { opacity: 0, y: -50 }, // Lorsque la page quitte, elle disparaît et se déplace vers le haut
  transition: { duration: 0.8 }, // Durée de l'animation
};

const textAnimation = {
  initial: { opacity: 0, y: 30 }, // Texte commence invisible et légèrement décalé vers le bas
  animate: { opacity: 1, y: 0 }, // Texte devient visible et se place à sa position d'origine
  transition: { duration: 0.6 }, // Durée de l'animation du texte
};

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <motion.div {...pageAnimation}>
            <motion.div {...textAnimation}>
              <Home />
            </motion.div>
          </motion.div>
        }
      />
      <Route
        path="/about"
        element={
          <motion.div {...pageAnimation}>
            <motion.div {...textAnimation}>
              <About />
            </motion.div>
          </motion.div>
        }
      />
      <Route
        path="/projets"
        element={
          <motion.div {...pageAnimation}>
            <motion.div {...textAnimation}>
              <Projets />
            </motion.div>
          </motion.div>
        }
      />
      <Route
        path="/contact"
        element={
          <motion.div {...pageAnimation}>
            <motion.div {...textAnimation}>
              <Contact />
            </motion.div>
          </motion.div>
        }
      />
    </Routes>
  </Router>
);


// Attente que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementById("react-navbar");

  if (navbarElement) {
    const root = ReactDOM.createRoot(navbarElement);
    root.render(<App />);
  }
});
