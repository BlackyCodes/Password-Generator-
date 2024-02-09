/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px', // Mobile width
        'lg': '1440px', // Desktop width
      },
      colors: {
        'primary': {
          'light': 'hsl(176, 50%, 47%)', // Moderate cyan
          'dark': 'hsl(176, 72%, 28%)', // Dark cyan
        },
        'neutral': {
          'black': 'hsl(0, 0%, 0%)', // Black
          'dark-gray': 'hsl(0, 0%, 48%)', // Dark gray
        },
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'], // Using Inter font from Google Fonts
        // You can define other font families here as needed
      },
      fontSize: {
        'body': '16px', // Body copy font size
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700,
      },
      backgroundImage: {
        'imageDek': "url('../assets/images/image-hero-desktop.jpg')",
        'imageMob': "url('../assets/images/image-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
}
