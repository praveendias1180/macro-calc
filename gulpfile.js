const gulp = require('gulp');
const { src, dest, series } = require('gulp');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

var files = [
  'assets/jquery.min.js',
  'assets/bootstrap.bundle.min.js',
  'assets/form-validation.js',
  'assets/raphael-min.js',
  'assets/morris.js',
  'assets/nutrition.js',
];

function jsminify() {
  return src(files).pipe(concat('all.js')).pipe(minify()).pipe(dest('dist/'));
}

exports.default = series(jsminify);
