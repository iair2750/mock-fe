module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        text: {
          positive: 'var(--text-positive)',
          negative: 'var(--text-negative)'
        },
        primary: {
          d3: 'var(--primary-d3)',
          d2: 'var(--primary-d2)',
          d1: 'var(--primary-d1)',
          base: 'var(--primary-base)',
          l1: 'var(--primary-l1)',
          l2: 'var(--primary-l2)',
          l3: 'var(--primary-l3)',
          l4: 'var(--primary-l4)'
        },
        neutral: {
          d3: 'var(--neutral-d3)',
          d2: 'var(--neutral-d2)',
          d1: 'var(--neutral-d1)',
          base: 'var(--neutral-base)',
          l1: 'var(--neutral-l1)',
          l2: 'var(--neutral-l2)',
          l3: 'var(--neutral-l3)',
          l4: 'var(--neutral-l4)'
        },
        secondary: {
          d3: 'var(--secondary-d3)',
          d2: 'var(--secondary-d2)',
          d1: 'var(--secondary-d1)',
          base: 'var(--secondary-base)',
          l1: 'var(--secondary-l1)',
          l2: 'var(--secondary-l2)',
          l3: 'var(--secondary-l3)',
          l4: 'var(--secondary-l4)'
        },
        danger: {
          d3: 'var(--danger-d3)',
          d2: 'var(--danger-d2)',
          d1: 'var(--danger-d1)',
          base: 'var(--danger-base)',
          l1: 'var(--danger-l1)',
          l2: 'var(--danger-l2)',
          l3: 'var(--danger-l3)'
        },
      },
    },
  },
  plugins: [],
};
