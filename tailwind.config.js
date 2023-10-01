/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: '#1E2640',
      white: '#ffffff',
      background: '#F2F2F6',
      card: '#146EB4',
      cardSecondary: '#0E4F82'
    }
  },
  plugins: [],
}
