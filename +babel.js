'use strict';
/* eslint-disable quote-props */
var verifyPeer = require('./verify-peer-dependency');
verifyPeer('@babel/core');
verifyPeer('@babel/eslint-parser');
verifyPeer('@babel/eslint-plugin');

module.exports = {
	'parser': '@babel/eslint-parser',
	'parserOptions': {
		'ecmaVersion': 2020,
		'requireConfigFile': false
	},
	'plugins': [ '@babel' ],
	'rules': {
		'@babel/semi': 'off'
	}
};
