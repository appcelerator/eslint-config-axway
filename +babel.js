'use strict';
/* eslint-disable quote-props */
var verifyPeer = require('./verifyPeerDependency');
verifyPeer('babel-eslint');

module.exports = {
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	}
};
