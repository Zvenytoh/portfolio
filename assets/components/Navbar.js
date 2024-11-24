import React from "react";
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
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#6A0572] via-[#3C1A5B] to-[#2A0944] bg-opacity-90 backdrop-blur-md shadow-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-3xl font-bold text-white hover:text-[#D59BF6] transition-colors"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          Mehdi.Dev
        </motion.a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              className="text-white text-lg font-medium relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <a
                href={link.href}
                className="hover:text-[#D59BF6] transition-colors"
              >
                {link.name}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 bottom-[-5px] h-[2px] w-0 bg-[#D59BF6] group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Placeholder */}
        <motion.div
          className="text-white font-medium md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          Menu
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
