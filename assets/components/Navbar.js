import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.a
          href="#home"
          className="logo text-3xl font-bold text-white hover:text-purple-400 transition-colors"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          Mehdi.Dev
        </motion.a>

        {/* Navigation Links */}
        <div className="links-container">
          <ul className="nav-links hidden md:flex space-x-8">
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                className="text-white text-lg font-medium relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
                {/* Underline animation */}
                <span className="absolute left-0 bottom-[-5px] h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile */}
        <motion.div
          className="text-white font-medium md:hidden"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Menu</span>
        </motion.div>
      </div>

      {/* Menu Mobile Links */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 space-y-4 px-6 py-4 backdrop-blur-lg bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="block text-white text-lg hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
