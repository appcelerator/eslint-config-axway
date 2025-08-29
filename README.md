# eslint-config-axway

Axway JavaScript coding standards shareable config for [eslint](http://eslint.org/).

- [Installation](#installation)
- [Overview](#overview)
- [Usage](#usage)
- [`eslint.config.js`](#eslintconfigjs)
- [Extend the configuration with your own overrides](#extend-the-configuration-with-your-own-overrides)
  - [Unit test lint configuration](#unit-test-lint-configuration)
  - [Running eslint](#running-eslint)

## Installation

```console
$ npm i --save-dev eslint eslint-config-axway
```

## Overview

There are several ways to incorporate this eslint configuration into your project.

### Step 1

Determine which environment you wish to target. Choose __ONE__ per configuration entry:

| Target Environment   | Description                           |
| :------------------- | :------------------------------------ |
| `axway`              | General JavaScript                    |
| `axway/env-browser`  | Web browser support (extends `axway`) |
| `axway/env-node`     | Node.js support (extends `axway`)     |

> [!NOTE]
> The default `axway` configuration automatically includes the [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import), [`eslint-plugin-security`](https://www.npmjs.com/package/eslint-plugin-security), and [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise) plugins.
> These help improve the quality of your JavaScript code.

### Step 2 (optional)

Select additional configurations. These require you to add dependencies to your project:

```console
$ npm i --save-dev <additional deps>
```

| Addon               | Description               | Additional Dependencies                                   |
| :------------------ | :------------------------ | :-------------------------------------------------------- |
| `axway/+chai`       | Chai support              | `eslint-plugin-chai-expect` `eslint-plugin-chai-friendly` |
| `axway/+mocha`      | Mocha unit test rules     | `eslint-plugin-mocha`                                     |
| `axway/+react`      | React.js and .jsx support | `eslint-plugin-react` `eslint-plugin-jsx-a11y`            |
| `axway/+typescript` | TypeScript support        | `@typescript-eslint/eslint-plugin`                        |
| `axway/+vue`        | Vue.js support            | `eslint-plugin-vue`                                       |

## Usage

> [!WARNING]
> `eslint-config-axway` requires eslint >=9.34.0. If you need to use eslint 8 or earlier then use `eslint-config-axway` v9.0.0.

### `eslint.config.js`

The simples way of getting started with the configuration is adding a `eslint.config.js` file at the root of your repository. With just this in place you'll be ready to start linting your codebase.

```js
// eslint.config.js

const axwayRecommended = require('eslint-config-axway');
module.exports = axwayRecommended;
```

### Extend the configuration with your own overrides

A custom `eslint.config.js` config is useful for using different configurations per directory or file type, defining global variables, including additional plugins, and overriding rules.

To extend the axway config, Update the `eslint.config.js` file in the root of your project and add the axway configuration to an extends array.

```js
// eslint.config.js

const axwayRecommended = require('eslint-config-axway');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
    {
        extends: [
            axwayRecommended
        ],
        languageOptions: {
            globals: {
                // declare globals here...
            }
        },
        rules: {
            // project specific overrides...
        }
    }
]);
```

#### Unit test lint configuration

You will probably also want a test-specific configuration. Extend your `eslint.config.js` file to add specific handling for your test directory.
If you're using mocha like in this scenario you may also want to replace the base axway recommended config with the Node.JS env base.

```js
// eslint.config.js

const axwayRecommended = require('eslint-config-axway/env-node');
const axwayMocha = require('eslint-config-axway/+mocha');
const axwayChai = require('eslint-config-axway/+chai');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
    {
        extends: [
            axwayRecommended
        ],
        languageOptions: {
            globals: {
                // declare globals here...
            }
        },
        rules: {
            // project specific overrides...
        }
    },
    {
        files: [ './test/**/*.js' ],
        extends: [
            axwayMocha,
            axwayChai
        ],
        rules: {
            // test specific overrides...
        }
    }
]);
```

```console
$ npm i --save-dev eslint-plugin-mocha eslint-plugin-chai-expect eslint-plugin-chai-friendly
```

#### Running eslint

The easiest way to run eslint in your project is to add it as an NPM scrpit. To do this, add an item to the `scripts` object in your projects `package.json`:

```json
// package.json

{
    "scripts": {
        "lint": "eslint"
    }
}
```

With that in place, running is as easy as using the npm cli

```console
$ npm run lint
```

## License

This project is open source and provided under the Apache Public License (version 2). Please make sure you see the LICENSE file included in this distribution for more details on the license.
Also, please take notice of the privacy notice at the end of the file.

(C) Copyright 2017-2025, [Axway, Inc](http://www.axway.com) All Rights Reserved.
