var gulp = require('gulp');
var $ =require('gulp-load-plugins')();
const dirs = {
    src: 'less',
    dest: 'css'
};
const paths = {
    src: `${dirs.src}/demo.less`,
    dest: `${dirs.dest}`
};
gulp.task('styles', () => {
    return gulp.src(paths.src)
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(paths.dest));	
});