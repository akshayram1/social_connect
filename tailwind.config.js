/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 50px #f6f7fb',
        '4xl': '0px 0px 50px #F1BDF2',
      },

      keyframes: {
        'breathingRed': {
          '50%': { transform: 'translateX(10px) translateY(1px) scale(1.11)' },
        },
        'breathingPurple': {
          '50%': { transform: 'translateX(20px) translateY(1px) scale(1.11)' },
        },
      },

      animation: {
        'breathingRed': 'breathingRed 8s ease-in-out infinite',
        'breathingPurple': 'breathingPurple 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
