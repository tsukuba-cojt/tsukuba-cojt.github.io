module.exports = ({ env }) => ({
  map: false,
  from: undefined,
  plugins: {
    "postcss-import": { root: "src/style" },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: env === "production" ? {} : false,
  },
});
