var config = require('../config'),
    gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('default', ['styles', 'scripts', 'server'], function() {
  gulp.watch(config.paths.css.all, ['styles', browserSync.reload]);
  gulp.watch(config.paths.js.all, ['scripts', browserSync.reload]);
});