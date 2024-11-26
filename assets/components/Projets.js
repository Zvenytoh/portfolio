import React from "react";
import { motion } from "framer-motion";

const Projets = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      <p>Information about the website or your personal bio.</p>
    </motion.div>
  );
};

export default Projets;
