const verifyPeer = require('./verify-peer-dependency');
verifyPeer('eslint-plugin-chai-expect');
verifyPeer('eslint-plugin-chai-friendly');

const { defineConfig } = require('eslint/config');
const pluginChaiExpect = require('eslint-plugin-chai-expect');
const pluginChaiFriendly = require('eslint-plugin-chai-friendly');
const { chai } = require('globals');

module.exports = defineConfig([
	{
		name: 'axway/+chai',
		plugins: {
			'chai-expect': pluginChaiExpect,
			'chai-friendly': pluginChaiFriendly
		},
		languageOptions: {
			globals: chai
		},
		rules: {
			'no-unused-expressions': 'off',
			'chai-friendly/no-unused-expressions': [ 'error', { allowShortCircuit: true, allowTernary: true } ],

			// chai rules
			'chai-expect/missing-assertion': 'error',
			'chai-expect/terminating-properties': 'warn',
		}
	}
]);
