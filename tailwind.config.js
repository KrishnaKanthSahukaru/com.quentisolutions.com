const tokens = require('./design-tokens.json');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
        background: tokens.colors.background,
        surface: tokens.colors.surface,
        text: tokens.colors.text,
        muted: tokens.colors.muted
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'Source Sans Pro', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        sm: tokens.elevation.sm,
        md: tokens.elevation.md,
        lg: tokens.elevation.lg
      },
      spacing: {
        xs: tokens.spacing.xs,
        sm: tokens.spacing.sm,
        md: tokens.spacing.md,
        lg: tokens.spacing.lg
      },
      fontSize: {
        xs: tokens.typeScale.xs,
        sm: tokens.typeScale.sm,
        base: tokens.typeScale.base,
        lg: tokens.typeScale.lg,
        xl: tokens.typeScale.xl,
        '2xl': tokens.typeScale['2xl'],
        '3xl': tokens.typeScale['3xl']
      }
    }
  },
  plugins: []
}
