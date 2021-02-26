'use strict';
/* eslint-disable quote-props */
var verifyPeer = require('./verify-peer-dependency');
verifyPeer('@babel/eslint-parser');

module.exports = {
	'parser': '@babel/eslint-parser',
	'parserOptions': {
		'ecmaVersion': 2020,
		'requireConfigFile': false
	}
};
