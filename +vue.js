const verifyPeer = require('./verify-peer-dependency');
verifyPeer('eslint-plugin-vue');

const pluginVue = require('eslint-plugin-vue');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
	{
		name: 'axway/+vue',
		extends: [
			pluginVue.configs['flat/recommended']
		],
		rules: {
			// vue rules
			'vue/attributes-order': [ 'warn', {
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					[ 'UNIQUE', 'SLOT' ],
					'TWO_WAY_BINDING',
					'ATTR_STATIC',
					'ATTR_DYNAMIC',
					'OTHER_DIRECTIVES',
					'CONTENT',
					'ATTR_SHORTHAND_BOOL',
					'EVENTS'
				],
				alphabetical: false
			} ],
			'vue/html-indent': [ 'warn', 'tab' ],
			'vue/max-attributes-per-line': [ 'warn', { singleline: 5, multiline: 1 } ],
			'vue/max-len': [ 'error', {
				code: 200,
				template: 200,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreHTMLAttributeValues: true,
				ignoreHTMLTextContents: true
			} ],
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'off',
			'vue/order-in-components': [ 'error', {
				order: [
					'el',
					'name',
					'key',
					'parent',
					'extends',
					'functional',
					'title',
					'method',
					'url',
					[ 'delimiters', 'comments' ],
					[ 'components', 'directives', 'filters' ],
					'mixins',
					[ 'provide', 'inject' ],
					'ROUTER_GUARDS',
					'layout',
					'middleware',
					'validate',
					'scrollToTop',
					'transition',
					'loading',
					'inheritAttrs',
					'model',
					'emits',
					[ 'props', 'propsData' ],
					'asyncData',
					'data',
					'setup',
					'fetch',
					'head',
					'LIFECYCLE_HOOKS',
					'computed',
					'watch',
					'watchQuery',
					'methods',
					[ 'template', 'render' ],
					'renderError'
				]
			} ]
		}
	}
]);
