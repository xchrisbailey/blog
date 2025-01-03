import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ... any rules you want
      "jsx-a11y/alt-text": "error",
    },
    // ... others are omitted for brevity
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // "astro/no-set-html-directive": "error"
    },
  },
];
