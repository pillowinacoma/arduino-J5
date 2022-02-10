module.exports = {
  content: ["./client/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blueweather: { DEFAULT: '#003c96' },
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      backgroundImage: {
        weather:
          'url(/images/pattern.png),linear-gradient(to right,#002762c2,#0043a8),url(/images/Weather.jpg) ',
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [require("daisyui")]
};
