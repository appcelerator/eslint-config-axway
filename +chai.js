module.exports = {
	'plugins': [
		'chai-friendly'
	],
	'rules': {
		'no-unused-expressions': 'off',
		'chai-friendly/no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }]
	}
}
