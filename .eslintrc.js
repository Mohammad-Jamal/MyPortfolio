module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],

    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": 'latest',
        "sourceType": 'module',
    },
    "plugins": ['@typescript-eslint', 'react'],
    "rules": {
      // Your specific rules can be added here
      // For example, you can add the rule for React in JSX scope:
      'react/react-in-jsx-scope': 'off',
      // Add more rules as needed for your project
    },
    "settings": {
      "react": {
        "version": 'detect',
      },
    },
}
