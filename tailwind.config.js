// module.exports = {
//   content: [
//     './app/**/*.{js,jsx,ts,tsx}',
//     './public/index.html',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1e40af', // Custom primary color
//       },
//     },
//   },
//   plugins: [],
// };


module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
      },
      keyframes: {
        borderSlide: {
          '0%': { top: '0', left: '0' },
          '100%': { top: '100%', left: '100%' },
        },
        borderSlideBack: {
          '0%': { top: '100%', left: '100%' },
          '100%': { top: '0', left: '0' },
        },
      },
      animation: {
        slide: 'borderSlide 1s ease-in-out forwards',
        slideBack: 'borderSlideBack 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
