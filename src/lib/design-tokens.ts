export const designTokens = {
  colors: {
    // Technical/AI Palette
    primary: {
      DEFAULT: "oklch(0.922 0 0)", // White/Stark
      foreground: "oklch(0.145 0 0)", // Black
    },
    background: "oklch(0.05 0 0)", // Deep Black for AI vibe
    foreground: "oklch(0.985 0 0)", // White text
    
    // Accents (Subtle, technical)
    accent: {
      DEFAULT: "oklch(0.269 0 0)", // Dark Gray
      foreground: "oklch(0.985 0 0)",
    },
    muted: {
      DEFAULT: "oklch(0.15 0 0)", 
      foreground: "oklch(0.708 0 0)",
    },
    border: "oklch(0.2 0 0)", // Subtle borders
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  }
} as const;
