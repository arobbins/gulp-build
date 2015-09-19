/*

	gulpfile.js

	The sole purpose of this file is to bootstrap our build
	process. Rather than manage one giant configuration file,
	each task has been seperated into its own file in gulp/tasks.
	Any files in that directory get automatically required below.

*/

'use strict';

/*
  One of the current limitations of using require() is the way
  in which it searches for the files it needs. The below
  package will speed up the build process by caching the paths
  to the required files.

  Learn more here:
    - https://kev.inburke.com/kevin/node-require-is-dog-slow
    - http://glebbahmutov.com/blog/faster-node-app-require

*/
require('cache-require-paths');

// Require all tasks in gulp/tasks recursively
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });