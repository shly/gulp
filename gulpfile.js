var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
    return gulp.src('sass/demo.scss')
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('css'));
});