import { keepTheme } from 'keep-react/keepTheme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        laptop: '5.5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      screens: {
        laptop: '1444px',
      },
    },
  },
  plugins: [],
}

export default keepTheme(config)
