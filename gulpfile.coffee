gulp = require 'gulp'
clean = require 'gulp-clean'
coffee = require 'gulp-coffee'
stylus = require 'gulp-stylus'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
plumber = require 'gulp-plumber'
gulp.task 'default',()->
  gulp.src('./*.js', {read: false})
  .pipe(clean())


gulp.task 'coffee',->
  gulp.src ['./**/*.coffee', '!./node_modules/**']
  .pipe plumber()
  .pipe(coffee({bare: true}))
  .pipe(gulp.dest('./'))
  .pipe uglify()
  .pipe rename suffix: '.min'
  .pipe gulp.dest './'

gulp.task 'clear', ->
  gulp.src ['./**/*.min.min.js', '!./node_modules/**']
  .pipe plumber()
  .pipe clean()

gulp.task 'stylus', ->
  gulp.src ['./**/*.styl', '!./node_modules/**']
  .pipe plumber()
  .pipe stylus compress: true
  .pipe gulp.dest './'

#build
gulp.task 'build', [
  'clear'
  'coffee'
  'stylus'
  ]