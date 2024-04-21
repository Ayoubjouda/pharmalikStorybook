/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'critical-20': '#F5A3AD',
        'critical-50': '#E61A32',
        'critical-60': '#B81427',
        'critical-80': '#5C0A14',
        'info-20': '#A3E6F5',
        'info-50': '#1AC1E6',
        'info-60': '#149AB8',
        'info-80': '#0A4D5C',
        'neutral-5': '#F9FAF9',
        'neutral-10': '#EBEEED',
        'neutral-20': '#DDE2E0',
        'neutral-30': '#CDD5D2',
        'neutral-40': '#BCC6C3',
        'neutral-50': '#A9B6B2',
        'neutral-60': '#93A39E',
        'neutral-70': '#798D87',
        'neutral-80': '#587169',
        'neutral-90': '#34423E',
        'neutral-100': '#0B0E0D',
        'primary-5': '#F3FBF8',
        'primary-10': '#D8F4EA',
        'primary-20': '#BBEBDB',
        'primary-30': '#99E1C9',
        'primary-40': '#73D6B5',
        'primary-50': '#44C89C',
        'primary-60': '#10B67F',
        'primary-70': '#0E9C6D',
        'primary-80': '#0B7B56',
        'primary-90': '#064933',
        'primary-100': '#042F21',
        'secondary-5': '#FEF8F8',
        'secondary-10': '#FCE9E9',
        'secondary-20': '#F9D9D9',
        'secondary-30': '#F6C8C8',
        'secondary-40': '#F3B4B4',
        'secondary-50': '#EF9D9D',
        'secondary-60': '#EB8181',
        'secondary-70': '#E55C5C',
        'secondary-80': '#D12424',
        'secondary-90': '#7D1616',
        'secondary-100': '#2B0808',
        'success-20': '#CCF5A3',
        'success-50': '#80E61A',
        'success-60': '#80E61A',
        'success-80': '#335C0A',
        'warning-20': '#F5DAA3',
        'warning-50': '#E6A01A',
        'warning-60': '#B88114',
        'warning-80': '#5C410A',
      },
      fontFamily: {
        SatoshiBlack: ['Satoshi-Black'],
        SatoshiBold: ['Satoshi-Bold'],
        SatoshiLight: ['Satoshi-Light'],
        SatoshiMedium: ['Satoshi-Medium'],
        SatoshiRegular: ['Satoshi-Regular'],
      },
    },
  },
  // important: 'html',
  plugins: [],
}

