var gulp = require('gulp');
var $ =require('gulp-load-plugins')();
var babel = require("gulp-babel");
gulp.task('styles',function(){
    return gulp.src('less/index.less')
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest("css"));
});
gulp.task('watch',function(){
    gulp.watch('less/index.less',['styles']);
});