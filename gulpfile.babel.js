/*var gulp = require('gulp');
var $ =require('gulp-load-plugins')();
var babel = require("gulp-babel");
const cssdirs = {
    src: 'less',
    dest: 'css'
};
const csspaths = {
    src: '${cssdirs.src}/index.less',
    dest: '${cssdirs.dest}'
};
const jsdirs = {
    src: 'ES6',
    dest: 'Javascript'
};
const jspaths = {
    src: '${jsdirs.src}/testES6.js',
    dest: '${jsdirs.dest}'
};
gulp.task('styles',()=>{
    return gulp.src(csspaths.src)
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(csspaths.dest));
});
gulp.task('javascript', () => {
    return gulp.src(jspaths.src)
        .pipe(babel())
        .pipe(gulp.dest(jspaths.dest));	
});
gulp.task('watch',() => {
    gulp.watch(csspaths.src,'styles');
    gulp.watch(jspaths.src,'javascript');

});*/