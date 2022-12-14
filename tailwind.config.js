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
        'rotate-effect': 'rotate-effect 1.5s 1 both',
        rotate: 'rotate 5s ease-in-out 1',
        'star-ani': 'star-ani 6s infinite linear',
        'bg-ani': 'bg-ani 10s linear infinite',
        'content-ani': 'content-ani 3s linear',
        'up-ani': 'up-ani 3s linear',
        'flip-horizontal-top': 'flip-horizontal-top 1s both 1',
        'puff-out-center': 'puff-out-center 1s both 1',
        pulse: 'pulse 2s infinite',
        'custom-pulse': 'custom-pulse 2s infinite',
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
        'rotate-effect': {
          '0%': {
            opacity: '0',
            transform: 'rotateY(-90deg)',
            perspective: '500px',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(0deg)',
            perspective: '500px',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotateX(-144deg)',
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
        'star-ani': {
          '0%': {
            transform: 'rotate(315deg) translateX(0)',
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(315deg) translateX(-1000px)',
            opacity: '0',
          },
        },
        'content-ani': {
          '0%': {
            transform: 'scale(2)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'up-ani': {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
        'flip-horizontal-top': {
          '0%': {},
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
        'custom-pulse': {
          '0%': {
            transform: 'scale(0.8)',
            'box-shadow': '0 0 0 0 rgba(0, 220, 146, 1)',
          },
          '70%': {
            transform: 'scale(1)',
            'box-shadow': '0 0 0 60px rgba(229, 62, 62, 0)',
          },
          '100%': {
            transform: 'scale(0.8)',
          },
        },
      },
      boxShadow: {
        intro:
          '0 0 0 4px rgba(255,255,255,0.1),0 0 0 8px rgba(255,255,255,0.1),0 0 20px rgba(255,255,255,1)',
      },
    },
  },
};
