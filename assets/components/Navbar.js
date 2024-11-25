import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="navbar-container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo à gauche */}
      <motion.a
        href="#home"
        className="logo"
        whileHover={{ scale: 1.1, color: "#9b4de2" }}
        whileTap={{ scale: 0.95 }}
      >
        Mehdi.Dev
      </motion.a>

      {/* Liens au centre */}
      <motion.div className="nav-links">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="nav-link"
            whileHover={{
              scale: 1.05,
              color: "#9b4de2",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>

      {/* Icônes à droite */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#9b4de2" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#9b4de2" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#9b4de2" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileAlt />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
