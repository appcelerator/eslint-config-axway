const verifyPeer = require('./verify-peer-dependency');
verifyPeer('eslint-plugin-mocha');

const { defineConfig } = require('eslint/config');
const { default: pluginMocha } = require('eslint-plugin-mocha');
const { mocha } = require('globals');

module.exports = defineConfig([
	{
		name: 'axway/+mocha',
		plugins: {
			mocha: pluginMocha
		},
		languageOptions: {
			globals: mocha
		},
		rules: {
			// mocha rules
			'mocha/handle-done-callback': 'error',
			'mocha/no-exclusive-tests': 'warn',
			'mocha/no-identical-title': 'error',
			'mocha/valid-test-title': 'off'
		}
	}
]);
