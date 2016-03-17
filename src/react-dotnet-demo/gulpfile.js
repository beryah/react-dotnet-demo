/// <binding BeforeBuild='browserify' Clean='clean' ProjectOpened='watch' />

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');
var rimraf = require('gulp-rimraf');

gulp.task('default', function () {
    return gulp.start('browserify');
});

gulp.task('watch', function () {
    gulp.watch(['app/pages/**/*.jsx', 'app/components/**/*.jsx'], ['browserify']);
});

gulp.task('browserify', function () {
    return gulp
        .src('app/pages/*.jsx', { read: false })
        .pipe(browserify({
            transform: ['reactify']
        }))
        .pipe(rename(function (path) {
            path.extname = '.js';
        }))
        .pipe(gulp.dest('./wwwroot/js'));
});

gulp.task('test', function () {
    require('babel-core/register.js');
    return gulp.src('app/tests/*-test.js').pipe(mocha()).once('end', function () { process.exit(); });
});

gulp.task('clean', function () {
    return gulp.src(['wwwroot/js'], { read: false }).pipe(rimraf());
});