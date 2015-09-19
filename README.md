# Gulp Boilerplate
### Version
1.0.0

This is my Gulp build that I usually start each project with. I'm using three main modules that do most of the work:
  - BrowserSync http://www.browsersync.io
  - Pleeease Pleeease.io
  - Browserify http://browserify.org

I've partitioned each task into it's own file to make things more modular. The main gulpfile.js simply requires all of these tasks and bootstraps the build.

Under the gulp folder, you'll find a config.js file. This is used to set up all of the paths and file names needed throughout the various tasks. Simply change these to your desired needs.

Under tasks/server.js you'll find the BrowserSync module. Since I've been working on WordPress projects recently, I needed a way to proxy BrowserSync through Apache. If you're setup is similar, this is where you'll enter your vhost.

That's it for now! Let me know if you have any issues or suggestions: arobbins@simpleblend.net