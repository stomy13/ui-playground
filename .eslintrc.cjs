module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "unused-imports"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
};
