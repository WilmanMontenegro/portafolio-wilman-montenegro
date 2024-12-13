// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        fprimary: '#8e43e7',
        fsecondary: '#dddddd',
        ftertiary: '#8c89a2',
        bprimary: '#0b0d0e',
        bsecondary: '#131617',
      },
      fontFamily: {
        primary: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.small-title': {
          fontFamily: theme('fontFamily.primary').toString(),
          fontSize: '18px',
          fontWeight: '600',
          textTransform: 'uppercase',
          lineHeight: '2em',
          letterSpacing: '1px',
          color: theme('colors.ftertiary'),
        },
        '.large-title': {
          fontFamily: theme('fontFamily.primary').toString(),
          fontSize: '48px',
          lineHeight: '1.2',
          fontWeight: '300',
          color: theme('colors.fsecondary'),
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
