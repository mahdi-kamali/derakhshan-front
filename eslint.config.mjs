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
        rules: {
          // "filename-match-regex": filenameMatchRegex,
          // "filename-folder-match": filenameFolderMatch,
        },
      },
    },
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
 
      // "custom/filename-match-regex": [
      //   "error",
      //   {
      //     pattern: "^[A-Z][a-zA-Z0-9]*$",
      //     ignore: {
      //       files: ["page", "index"],
      //       dir: [],
      //     },
      //   },
      // ],
 
      // "custom/filename-folder-match": "error",
    },
  },
];

export default eslintConfig;
