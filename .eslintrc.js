module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"airbnb",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier"
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12
	},
	"plugins": [
		"react",
		"react-hooks",
		"jsx-a11y"
	],
	"rules": {
		"react/prop-types": "off",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
		"react/destructuring-assignment": [ "error", "never" ]
		// "no-plusplus": "off",
		// "no-console": "warn",
		// "indent": ["warn", 2, {
		// 	"SwitchCase": 1
		// }],
		// "import/prefer-default-export": "off",
		// "no-param-reassign": ["error", {
		// 	"props": false
		// }]
	},
	"ignorePatterns": ["*config.js"]
}
