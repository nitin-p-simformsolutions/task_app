module.exports = {
    "extends": "airbnb-base",
    "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
    },
    "parser": "babel-eslint",
    "rules": {
    "linebreak-style":0,
    "indent": ["error", 2],
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
    "max-len": ["error", { "code": 160 }],
    "rest-spread-spacing": ["error", "never"],
    "camelcase": [0, {"properties": "never"}],
    "no-iterator": 0
    }
};