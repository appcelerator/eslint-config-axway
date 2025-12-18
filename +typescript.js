const verifyPeer = require('./verify-peer-dependency');
verifyPeer('@typescript-eslint/eslint-plugin');

const pluginTypescript = require('@typescript-eslint/eslint-plugin');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
	{
		name: 'axway/+typescript',
		plugins: {
			'@typescript-eslint': pluginTypescript
		},
		extends: [
			pluginTypescript.configs['flat/eslint-recommended'],
			pluginTypescript.configs['flat/recommended']
		],
		rules: {
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'error',
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': 'warn',
			'@typescript-eslint/no-unused-vars': [ 'warn', {
				argsIgnorePattern: '^_.+',
				caughtErrorsIgnorePattern: '^_.+'
			} ]
		}
	}
]);
