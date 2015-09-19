var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config'); // Relative to this file

gulp.task('server', function() {
	browserSync({
		proxy: "yourdomain.dev"
	});
});