/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffba00',
        grey01: '#707070',
        grey02: '#b2b2b2',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        bounce: 'bounce 1.5s infinite',
        rotate: 'rotate 10s ease-in-out 1',
        'flip-horizontal-top': 'flip-horizontal-top 1s both 1',
        'puff-out-center': 'puff-out-center 1s both 1',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotateX(0deg)',
          },
          '50%': {
            transform: 'rotateX(2736deg)',
          },
          '70%': {
            transform: 'rotateX(2808deg)',
          },
          '90%': {
            transform: 'rotateX(2900deg)',
          },
          '100%': {
            transform: 'rotateX(2880deg)',
          },
        },
        'flip-horizontal-top': {
          '0%': {
            transform: 'rotateX(0)',
          },
          '90%': {
            transform: 'rotateX(180deg)',
          },
          '100%': {
            'background-color': 'transparent',
          },
        },
        'puff-out-center': {
          '0%': {
            transform: 'scale(1)',
            filter: 'blur(0px)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2)',
            filter: 'blur(4px)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
