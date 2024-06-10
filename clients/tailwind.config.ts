import { Component } from 'react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      BackGround: '#181818',
      SubMain: '#203844',
      TextColor2:'#C2B287',
      TextColor1: '#C2B287',
      MainButon: '#ECDFDF',
      Component0: '#553D1E',
      Component1: '#B2A680',
      extraColor: '#CAD2C5',
      Component2: '#247FAD',
      red:'#FF7D29',
    },
  },
  plugins: [],
}
export default config
