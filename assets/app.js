import React from "react";
import ReactDOM from "react-dom/client";
import "/home/mehdi/Documents/projets/portfolio/assets/styles/app.css"; // Assurez-vous que le CSS est bien importé
import Navbar from "/home/mehdi/Documents/projets/portfolio/assets/components/Navbar.js"; // Assure-toi que
import "/home/mehdi/Documents/projets/portfolio/assets/styles/Navbar.css";   // Si navbar.css est pour les styles spécifiques à la navbar


document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementById("react-navbar");

  if (navbarElement) {
    const root = ReactDOM.createRoot(navbarElement);
    root.render(<Navbar />);
  }
});


