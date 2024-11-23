/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{html,js,jsx,ts,tsx,vue}', // Assurez-vous que Tailwind scanne tous les fichiers nécessaires
    './templates/**/*.html.twig', // Si vous utilisez Twig pour les templates
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


