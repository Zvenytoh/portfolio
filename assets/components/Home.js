import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const contrastColor = "#32CD32"; // Vert feuille
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Suivi du curseur
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  // Calculer le mouvement de la carte en fonction de la position du curseur
  const calculateCardMovement = () => {
    const moveX = (cursorPosition.x - window.innerWidth / 2) / 50;
    const moveY = (cursorPosition.y - window.innerHeight / 2) / 50;
    return { x: moveX, y: moveY };
  };

  return (
    <div className="flex items-center justify-start h-screen bg-gray-900 px-6 sm:px-16">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative bg-gray-800 p-8 rounded-xl shadow-xl max-w-lg"
        style={{
          border: `1px solid ${contrastColor}`, // Réduit l'épaisseur de la bordure ici
          borderRadius: "16px",
          position: "relative",
          overflow: "hidden",
          transform: `translate(${calculateCardMovement().x}px, ${
            calculateCardMovement().y
          }px)`,
          transition: "transform 0.1s ease-out", // Déplacement fluide
        }}
      >
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white hover:text-green-400"
          >
            Développeur{" "}
            <span style={{ color: contrastColor }}>Fullstack Passionné</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-gray-300 text-lg hover:text-white"
          >
            Je transforme vos idées en expériences numériques interactives,
            alliant expertise backend et interfaces modernes.
          </motion.p>
        </div>

        {/* Animation de la bordure */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-border" />
      </motion.div>
    </div>
  );
};

export default Home;
