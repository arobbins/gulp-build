var gulp = require('gulp'),
    config = require('../config'), // Relative to this file
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('scripts', function() {
  var bundleStream = browserify(config.paths.js.entry).bundle();

  bundleStream
    .pipe(source(config.paths.js.entry))
    .pipe(streamify(uglify()))
    .pipe(rename(config.names.js.app))
    .pipe(gulp.dest(config.paths.js.dest))
    .pipe(reload({
      stream: true
    }));

});