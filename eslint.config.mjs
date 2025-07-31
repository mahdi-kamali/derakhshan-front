import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// import filenameMatchRegex from "./eslint-rules/filename-match-regex.js";
// import filenameFolderMatch from "./eslint-rules/filename-folder-match.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      custom: {
        rules: {},
      },
    },
    rules: {
      "jsx-a11y/alt-text": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
