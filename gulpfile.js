var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
    return gulp.src('less/index.less')
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('css'));
});
gulp.task('watch',['styles'],function(){
	gulp.watch('less/index.less', ['styles']);
});
