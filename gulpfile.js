'use strict';

const gulp = require('gulp'),
    argv = require('yargs').argv,
    mocha = require('gulp-mocha'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    isProduction = (argv.mode != undefined) ? true : false,
    tslint = require('gulp-tslint'),
    tsconfig = require('./tsconfig.json');


gulp.task('mocha', ['typescript'], function() {
    return gulp.src('./test/test.js')
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('typescript', ['tslint'], function() {
    return gulp.src(['src/**/*.ts', '!.node_modules/**'])
        .pipe(gulpif(!isProduction, sourcemaps.init()))
        .pipe(typescript(tsconfig))
        .pipe(gulpif(!isProduction, sourcemaps.write()))
        .pipe(gulp.dest('./'));
});

gulp.task('tslint', function() {
    return gulp.src(['src/**/*.ts', '!.node_modules/**'])
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['typescript']);
});
