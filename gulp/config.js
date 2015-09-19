module.exports = {
	paths: {
		project: './',
		css: {
			entry: './assets/css/local/app.scss',
			all: './assets/css/local/**/*.scss',
      dest: './assets/css'
		},
		js: {
			entry: './assets/js/local/app.js',
      vendor: './assets/js/vendor/*.js',
      dest: './assets/js',
      all: './assets/js/**/*.js'
		}
	},
	names: {
		css: 'app.min.css',
		js: {
			app: 'app.min.js',
      vendor: 'vendor.min.js'
		}
	}
};