/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',  // Tous les fichiers HTML à la racine
    './*.js',
    './node_modules/flowbite/**/*.js', // Ajoute Flowbite ici
  ],
  theme: {
    extend: {
      colors: {
        rougeFonce: '#a12828',
        noirFonce: '#1f1f1f',
        grisFonce: '#3e3e3e',
        grisClair: '#888888',
        beigeClair: '#f5f5f5',
        rougeClair: '#d65757',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')  // Charge le plugin Flowbite
  ],
};


