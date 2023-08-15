import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        headerMoviment: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-101.5%)',
          },
        },
      },
    },
    screens: {
      'sm': '400px',
      'md': '576px',
      'lg': '767px',
      'xl': '991px',
      '2xl': '1200px',
    },
  },
  plugins: [],
}
export default config
