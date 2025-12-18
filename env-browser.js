const { defineConfig } = require('eslint/config');
const { browser } = require('globals');

const axwayRecommended = require('./index.js');

module.exports = defineConfig([
	{
		name: 'axway/env-browser',
		extends: [
			axwayRecommended
		],
		languageOptions: {
			globals: browser
		}
	}
]);
