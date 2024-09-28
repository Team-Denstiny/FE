/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        gray: '#F2F2F2', 
        fontGray: "#7E8689",
        denstiniyBlue: '#0047AD',
        textgray:'#7E8689',
        searchgray: '#E6EAED',
        blue:'#0047AD',
        blueWhite: 'rgba(0, 71, 173, 0.1)',
        red: 'red',
      },
        fontFamily: {
        'noto': ['Noto Sans KR'], 
      },

      fontWeight: {
        'regular': 400,
      },
      fontSize: {
        'small': '10px',
        'base': '14px',
      },
    },
  },
  plugins: [],
}
