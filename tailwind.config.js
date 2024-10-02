/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',  // Tous les fichiers HTML à la racine
    './*.js',
    './node_modules/flowbite/**/*.js', // Ajoute Flowbite ici
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')  // Charge le plugin Flowbite
  ],
};


