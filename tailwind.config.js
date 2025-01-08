module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3748', // Dark Grayish Blue (lebih elegan)
        secondary: '#38B2AC', // Teal (warna yang lebih calm dan fresh)
        background: '#F7FAFC', // Off-White (membuat tampilan lebih terang dan bersih)
        text: '#2D3748', // Dark Text Color for better readability
        accent: '#F6AD55', // Soft Orange for highlights
        link: '#3182CE', // A blue link color for good contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
