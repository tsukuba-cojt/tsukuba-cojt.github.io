const typography = require("@tailwindcss/typography");
const jumpuUi = require("@jumpu-ui/tailwindcss");

module.exports = {
  content: ["src/**/*.js", "src/**/*.njk", "src/**/*.md"],
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1240px",
          "2xl": "1240px",
        },
        padding: {
          DEFAULT: "1rem",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("color.red.500"),
            },
            h1: {
              fontSize: theme("fontSize.2xl"),
              color: theme("color.gray.700"),
            },
            h2: {
              fontSize: theme("fontSize.lg"),
              color: theme("color.gray.700"),
              position: "relative",
            },
            p: {
              lineHeight: theme("lineHeight.relaxed"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography, ...jumpuUi],
};
