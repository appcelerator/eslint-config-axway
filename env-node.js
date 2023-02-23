/* eslint-disable quote-props */
module.exports = {
	'env': {
		'node': true
	},
	'parserOptions': {
		'ecmaVersion': 2021
	},
	'plugins': [
		'n'
	],
	'extends': './index.js',
	'rules': {
		'n/no-deprecated-api': 'warn',
		'n/no-unpublished-bin': 'warn',
		'n/no-unsupported-features/es-builtins': 'warn',
		'n/no-unsupported-features/es-syntax': [ 'warn', { ignores: [ 'modules' ] } ],
		'n/prefer-global/buffer': 'warn',
		'n/prefer-global/console': 'warn',
		'n/prefer-global/process': 'warn',
		'n/prefer-global/text-decoder': 'warn',
		'n/prefer-global/text-encoder': 'warn',
		'n/prefer-global/url-search-params': 'warn',
		'n/prefer-global/url': 'warn',
		'n/process-exit-as-throw': 'warn'
	}
};
