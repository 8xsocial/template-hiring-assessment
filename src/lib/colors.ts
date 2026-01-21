/**
 * Centralized color configuration for Ultrathink
 * This is the SINGLE SOURCE OF TRUTH for brand colors
 */

export const colors = {
  // Primary brand color - dark wine/burgundy
  primary: '#760716',

  // Derived shades (for contexts that need hex values)
  primaryLight: '#9a1a2e',
  primaryLighter: '#b83344',
  primaryDark: '#5a0511',
} as const

// OKLCH equivalents (copy these to globals.css if you change the hex above)
// primary:        oklch(0.33 0.14 18)
// primaryLight:   oklch(0.43 0.16 18)
// primaryLighter: oklch(0.53 0.15 18)
// primaryDark:    oklch(0.26 0.12 18)
