import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b7f5a',
          soft: 'rgba(27, 127, 90, 0.08)',
        },
        accent: '#facc15',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '18px',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.16)',
      },
      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
}
export default config
