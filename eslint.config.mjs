import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "jsx-a11y/alt-text": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off", // disables the 'Unexpected any' error
      "@typescript-eslint/no-extra-non-null-assertion": "off", // disables '!!' errors
      "react-hooks/rules-of-hooks": "off", // disables the async hook call error
      "import/no-anonymous-default-export": "off", // disables Field.tsx export warning
      "prefer-const": "off", // disables prefer-const warning
      "@typescript-eslint/no-empty-object-type": "off", // disables '{}' warning
      "@typescript-eslint/no-unused-expressions": "off", // disables expression-only errors,
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];
