/* eslint-disable quote-props */
var verifyPeer = require('./verifyPeerDependency');
verifyPeer('eslint-plugin-react');
verifyPeer('eslint-plugin-jsx-a11y');

module.exports = {
	plugins: [
		'jsx-a11y',
		'react'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		// jsx a11y rules
		'jsx-a11y/anchor-has-content': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',

		// react rules
		'react/forbid-prop-types': 'off',
		'react/jsx-indent-props': [ 'warn', 'tab' ],
		'react/jsx-indent': [ 'warn', 'tab' ],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/no-array-index-key': 'off',
		'react/no-find-dom-node': 'off',
		'react/no-multi-comp': 'off',
		'react/no-unused-prop-types': 'off',
		'react/prefer-stateless-function': 'off',
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
		'react/sort-comp': 'off'
	}
};
