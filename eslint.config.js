import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  // что игнорировать
  {
    ignores: [
      "dist/**",
      "storybook-static/**",
      "node_modules/**",
      "coverage/**",
      "build/**",
    ],
  },

  // базовые правила JS
  js.configs.recommended,

  // TS (включая TSX)
  ...tseslint.configs.recommended,

  // React
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React 17+ не требует import React
      "react/react-in-jsx-scope": "off",

      // хорошие базовые правила хуков
      ...reactHooks.configs.recommended.rules,
    },
  },

  // выключает конфликтующие с Prettier правила форматирования
  prettier,
];
