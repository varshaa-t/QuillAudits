/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    }, 
  },
  colors: {
    'light-navy': '#272c6a',
    'dark-navy': '#06103a',
    'white': '#FFFFFF',
    'purple': '#4F37EE',
    'blue': '#3F7AF0',
    'light-purple': '#7184FD',
    'black' : '#000000',
    'green' : '#034502',
    'gray': '#7d86a3',
    'pink': '#FFABC9',
    'diff-black': '#00000A',
    'light-blue': '#ABCDFF',
    'light-gray': '#E0E0E4',
    'dark-blue': '#0E3088',
    'BA-purple': '#4D3DEE',
    'BA-dark-blue': '#457BF2',
    'BA-light-blue': '#5E80F8',
    'border-purple': '#7184FD',
    'border-blue': '#2D83EE',
    'box-gray': '#808080',
    'link-blue': '#204ECF',
    'light-yellow': '#FFCE50',
    'dark-yellow': '#FE9D0B',
    'box-blue': '#204ECF',
    'container-dark-gray': '#EDF2FE',
    'container-light-gray': '#D9D9D900',
    'newsletter-blue': '#407AFF',
    'newsletter-dark-blue': '#14316C',
    'newsletter-dark-gray': '#2D3648',
    'footer-gray': '#F1F1F1',
    'footer-blue': '#1e3b78'
  }
};
export const plugins = [];
