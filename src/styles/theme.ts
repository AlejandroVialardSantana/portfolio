import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        background: {
          light: { value: "#FDFDFF" },
          dark: { value: "#000000" },
        },
        textPrimary: {
          light: { value: "#292F36" },
          dark: { value: "#FDFDFF" },
        },
        accent: {
          light: { value: "#9CAABB" },
          dark: { value: "#91A7B4" },
        },
        accentSecondary: {
          light: { value: "#CCD4DD" },
          dark: { value: "#4D5A65" },
        },
        hoverAccent: {
          light: { value: "#A3B2C2" },
          dark: { value: "#86A1B1" },
        },
      },
    },
  },
});
