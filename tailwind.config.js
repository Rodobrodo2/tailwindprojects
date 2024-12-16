const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./darkmode.html', './script.js'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.custom-btn-primary': {
          backgroundColor: '#3b82f6',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          fontWeight: '600',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#2563eb',
          },
        },
        '.custom-card': {
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
        },
      });
    }),
  ],
};

