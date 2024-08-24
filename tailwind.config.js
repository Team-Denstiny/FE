/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#F2F2F2', 
        denstiniyBlue: '#0047AD',
      },
        fontFamily: {
        'noto': ['Noto Sans KR'], 
      },
      fontSize: {
        'small': '10px',
        'base': '14px', 
      },
    },
  },
  plugins: [],
}
