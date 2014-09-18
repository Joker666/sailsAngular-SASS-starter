/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 */
module.exports = function(gulp, plugins, growl) {

    gulp.task('sass:dev', function() {
        return gulp.src('assets/styles/importer.scss')
            .pipe(plugins.rubySass({ sourcemap: true, sourcemapPath: 'assets/styles', require: 'susy' }))
            .on('error', function (err) { console.log(err.message); })
            .pipe(plugins.autoprefixer('last 10 version'))
            .pipe(gulp.dest('.tmp/public/styles/'));
    });
};