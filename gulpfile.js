var gulp = require('gulp'),
    clean = require('gulp-clean'),
    coffee = require('gulp-coffee'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat');
gulp.task('script', function() {
    gulp.src(['./public/script/module/*.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('controller.min.js'))
        .pipe(gulp.dest('./public/script'));
});

gulp.task('clear', function() {
    gulp.src(['./**/*.min.min.js', '!./node_modules/**']).pipe(plumber()).pipe(clean());
});

gulp.task('stylus', function() {
    gulp.src(['./public/style/module/*.styl'])
        .pipe(plumber())
        .pipe(stylus({
          compress: true
        }))
        .pipe(concat('controller.css'))
        .pipe(gulp.dest('./public/style'));
});


gulp.task('watch',function(){
    gulp.watch(['./public/script/module/*.js'], ['script']);
    gulp.watch(['./public/style/module/*.styl'], ['stylus']);
});

gulp.task('build',['script','stylus']);