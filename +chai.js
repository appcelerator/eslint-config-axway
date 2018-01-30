'use strict';
/* eslint-disable quote-props */
var verifyPeer = require('./verify-peer-dependency');
verifyPeer('eslint-plugin-chai-friendly');

module.exports = {
	'plugins': [
		'chai-friendly'
	],
	'rules': {
		'no-unused-expressions': 'off',
		'chai-friendly/no-unused-expressions': [ 'error', { 'allowShortCircuit': true, 'allowTernary': true } ]
	}
};
