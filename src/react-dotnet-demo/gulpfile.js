/// <binding BeforeBuild='default' Clean='clean' ProjectOpened='watch' />

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var rimraf = require('gulp-rimraf');

gulp.task('default', function () {
    return gulp.start('bundle');
});

gulp.task('watch', function () {
    gulp.watch(['app/pages/**/*.jsx', 'app/components/**/*.jsx'], ['bundle']);
});

gulp.task('bundle', ['babel', 'browserify']);

gulp.task('babel', function () {
    return gulp.src('app/**/*.jsx').pipe(babel()).pipe(gulp.dest('./app/build'));
});

gulp.task('browserify', ['babel'], function () {
    return gulp.src('app/build/pages/*.js').pipe(browserify()).pipe(gulp.dest('./wwwroot/js'));
});

gulp.task('clean', function () {
    return gulp.src(['wwwroot/js', 'app/build']).pipe(rimraf());
});

gulp.task('test', ['babel'], function () {
    return gulp.src('app/tests/*-test.js').pipe(mocha()).once('end', function () { process.exit(); });
});