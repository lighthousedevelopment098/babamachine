/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2EC933', //custom color green
        hoverprimary:'#96E499',// Custom hover lightgreen
        secondary: '#2F2F2F', // Custom  gray
        lightgray: '#444444',    // Custom lightgary color
        graycustum:'#5B5B5B' ,// News Section bg-color
        // gray:'#686868',//last section bg-color
        black:'#0A0A0A', //black color 
        white:'#FFFFFF' ,//white color

        texthover:'#7F7F7F',//for text hover
        textgreen:'#1C6A1F'//primary text hover
        // Add more custom colors as needed
      },
      spacing: {
        '18': '4.5rem',  // Custom spacing (padding/margin)
        '22': '5.5rem',
        // Add more custom spacing values as needed
      },
      margin: {
        'custom': '8rem', // Custom margin
      },
      padding: {
        'custom': '2rem', // Custom padding
      },
      container: {
        center: true,
        padding: '1rem', 
      },
    },
  },
  plugins: [],
}
