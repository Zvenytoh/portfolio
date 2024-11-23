import React from "react";
import ReactDOM from "react-dom/client";
import "/home/mehdi/Documents/projets/portfolio/assets/styles/app.css"; // Assurez-vous que le CSS est bien importé
import Navbar from "/home/mehdi/Documents/projets/portfolio/assets/components/Navbar.js"; // Assurez-vous d'importer la navbar correctement

document.addEventListener("DOMContentLoaded", function () {
  const navbarElement = document.getElementById("react-navbar");

  if (navbarElement) {
    // Crée un "root" React pour la navbar
    const root = ReactDOM.createRoot(navbarElement);

    // Rends la navbar React dans cet élément
    root.render(<Navbar />);
  }
});
