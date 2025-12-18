# Changlog

## v10.0.0 (Dec 18, 2025)

* BREAKING CHANGE: Drops support for eslint 8.
* BREAKING CHANGE: Removes `+babel` extension.
* BREAKING CHANGE: Removes support for `env-alloy` and `env-titanium` environments.
* feat: Adds support for eslint 9.
* feat: Adds `+vue` extension.
* chore: Updated dependencies.

## v9.0.0 (Oct 31, 2023)

* BREAKING CHANGE: Add minimum Node.JS version of 18.18.2
* chore: Updated dependencies.

## v8.0.0 (Feb 28, 2023)

* BREAKING CHANGE: Replaces unmaintained `eslint-plugin-node` with `eslint-plugin-n`. Any uses of `env-node` with `node/` scoped rule overrides will need to be replaced as `n/` scoped.
* chore: Updated dependencies.

## v7.0.1 (May 18, 2022)

* fix: Ignore unsupported ES module syntax warnings.
* chore: Bumped Node.js ECMAScript version from `9` to `2021`.
* chore: Updated dependencies.

## v7.0.0 (Jan 20, 2022)

* BREAKING CHANGE: Drops support for eslint 7.
* BREAKING CHANGE: Drops support for @typescript-eslint 4.x packages.
* BREAKING CHANGE: Drops support for eslint-plugin-mocha 9.x.
* BREAKING CHANGE: Updates to latest versions of built in eslint plugins.
* feat: Add support for eslint 8.

## v6.0.1 (Mar 15, 2021)

* fix: Added `@babel/core` as an optional peer dependency so that the Babel eslint parser will
   function properly.

## v6.0.0 (Mar 3, 2021)

* BREAKING CHANGE: Replaced the deprecated `babel-eslint` with `@babel/eslint-parser` and
   `@babel/eslint-plugin`.
* BREAKING CHANGE: Removed support for old peer dependencies: `eslint`, `eslint-plugin-mocha`,
   `@typescript-eslint/parser`, and `@typescript-eslint/eslint-plugin`.
* chore: Updated dependencies.
