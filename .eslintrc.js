module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "comma-dangle": ["error", "never"],
    "semi": ["error", "never"],
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "array-bracket-spacing": ["error","always"],
    "object-curly-spacing": ["error","always"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },      
      "multiline": {
        "max": 1
      }
    }]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
}
