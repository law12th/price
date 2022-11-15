module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["next", "turbo", "prettier", "standard-with-typescript"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"react/jsx-key": "off",
		"no-unused-vars": "warn",
	},
};
