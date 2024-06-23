import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        periwinkle: {
          light: '#CCCCFF',
          DEFAULT: '#CCCCFF',
          dark: '#9999CC',
        },
        charcoal: '#333333',
        lightGrey: '#D3D3D3',
        slateGrey: '#708090',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
