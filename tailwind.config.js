module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
      screens: {
        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1280px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'appBackground': '#f1f1f1',
        'white': '#ffffff',
        'primaryColor': '#0060b1',
        'secondaryColor': '#FF6500',
        'textColor': '#ffffff',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
      }
  },
  plugins: [],
}
