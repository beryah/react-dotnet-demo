/// <binding BeforeBuild='default' Clean='clean' />

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var rimraf = require('gulp-rimraf');

gulp.task('default', function () {
    return gulp.start('bundle');
});

gulp.task('watch', function () {
    gulp.watch(['js/views/**/*.jsx', 'js/components/**/*.jsx'], ['bundle']);
});

gulp.task('bundle', ['babel', 'browserify']);

gulp.task('babel', function () {
    return gulp.src('js/**/*.jsx').pipe(babel()).pipe(gulp.dest('./js/dist'));
});

gulp.task('browserify', ['babel'], function () {
    return gulp.src('js/dist/views/*.js').pipe(browserify()).pipe(gulp.dest('./wwwroot/js'));
});

gulp.task('clean', function () {
    return gulp.src(['wwwroot/js', 'js/dist']).pipe(rimraf());
});

gulp.task('test', ['babel'], function () {
    return gulp.src('js/tests/*-test.js').pipe(mocha()).once('end', function () { process.exit(); });
});