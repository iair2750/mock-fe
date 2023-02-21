function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: {
          invert: withOpacity('--neutral-d3'),
        },
        body: withOpacity('--neutral-l4'),
        text: {
          base: withOpacity('--text-base'),
          invert: withOpacity('--text-invert'),
        },
        primary: {
          d3: withOpacity('--primary-d3'),
          d2: withOpacity('--primary-d2'),
          d1: withOpacity('--primary-d1'),
          base: withOpacity('--primary-base'),
          l1: withOpacity('--primary-l1'),
          l2: withOpacity('--primary-l2'),
          l3: withOpacity('--primary-l3'),
          l4: withOpacity('--primary-l4')
        },
        neutral: {
          d3: withOpacity('--neutral-d3'),
          d2: withOpacity('--neutral-d2'),
          d1: withOpacity('--neutral-d1'),
          base: withOpacity('--neutral-base'),
          l1: withOpacity('--neutral-l1'),
          l2: withOpacity('--neutral-l2'),
          l3: withOpacity('--neutral-l3'),
          l4: withOpacity('--neutral-l4')
        },
        secondary: {
          d3: withOpacity('--secondary-d3'),
          d2: withOpacity('--secondary-d2'),
          d1: withOpacity('--secondary-d1'),
          base: withOpacity('--secondary-base'),
          l1: withOpacity('--secondary-l1'),
          l2: withOpacity('--secondary-l2'),
          l3: withOpacity('--secondary-l3'),
          l4: withOpacity('--secondary-l4')
        },
        danger: {
          d3: withOpacity('--danger-d3'),
          d2: withOpacity('--danger-d2'),
          d1: withOpacity('--danger-d1'),
          base: withOpacity('--danger-base'),
          l1: withOpacity('--danger-l1'),
          l2: withOpacity('--danger-l2'),
          l3: withOpacity('--danger-l3')
        },
      },
    },
  },
  plugins: [],
};
