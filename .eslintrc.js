module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 9
    },
    "rules": {
        "curly": [
            "error"
        ],
        "no-console": [
            "off"
        ],
        "indent": [
            "off",
            4
        ],
        "quotes": [
            "warn",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error", { "argsIgnorePattern": "^_" }
        ]
    },
    "globals": {
        "__dirname": false,
        "exports": false,
        "module": false,
        "process": false,
        "require": false,
        "$": false,
        "_": false,
        "Buffer": false,
        "paypal": false,
        "global": false /* Webpack properly converts 'global' variable to 'window'. */
    }
};
