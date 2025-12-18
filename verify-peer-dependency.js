const findRoot = require('find-root');
const packageJSON = require('./package.json');
const path = require('path');
const semver = require('semver');

/**
 * Handles any errors that occur while running `verifyPeerDependency`
 * @param {string} err - Error message to log
 * @param {boolean} shouldThrow - if true, the function will throw rather than exiting the process
 * @returns {void}
 */
function error(err, shouldThrow) {
	if (shouldThrow) {
		throw new Error(err);
	}
	console.error(err);
	process.exit(1);
}

/**
 * Verifies that a dependency specified in optionalPeerDependencies is actually installed.
 * Rather than running at install time, this is meant to happen at runtime.
 * @param {string} dependency - name of dependency to verify
 * @param {boolean} shouldThrow - if true, the function will throw rather than exiting the process
 * @returns {void}
 */
module.exports = function verifyPeerDependency(dependency, shouldThrow) {
	const { name, peerDependencies } = packageJSON;

	const range = peerDependencies[dependency];
	if (!range) {
		return error(`${name} does not specify ${dependency} as a peerDependencies.`, shouldThrow);
	}

	// Try to verify that the dependency is installed.
	const paths = module.paths.slice();
	let dependencyPath;
	let p = process.cwd();
	let cur, last;

	try {
		// we need to be a bit more aggressive finding dependencies
		while (p !== last) {
			cur = path.join(p, 'node_modules');
			if (paths.indexOf(cur) === -1) {
				paths.push(cur);
			}
			last = p;
			p = path.dirname(p);
		}

		dependencyPath = require.resolve(dependency, { paths: paths });
	} catch (_err) {
		return error(`${name} requires a peer of ${dependency}@${range} but none was installed.`, shouldThrow);
	}

	// Find the closest package.json so that we can get the installed version of the dependency
	const root = findRoot(dependencyPath);

	if (root === dependencyPath) {
		// For whatever reason we couldn't find the package.json of the dependency
		return error(`Cannot verify that ${dependency}@${range} satisfies specified version`, shouldThrow);
	}
	// eslint-disable-next-line security/detect-non-literal-require
	var dependencyPackage = require(path.join(root, 'package.json'));

	// Check dependency version satisfies the required range
	if (!semver.satisfies(dependencyPackage.version, range)) {
		return error(`${name} requires a peer of ${dependency}@${range} but none was installed.`, shouldThrow);
	}
};
