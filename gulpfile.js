const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
// clean
const del = require('del');
// less
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gcmq = require('gulp-group-css-media-queries');
// html
const htmlmin = require('gulp-htmlmin');
// js
const babel = require('gulp-babel');
const minify = require('gulp-minify');
// browserSync
const browserSync = require('browser-sync').create();
// error
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

/**
 * clean
 */
const clean = () => {
  return del('build');
}
exports.clean = clean;

/**
 * copy
 */
const copy = () => {
  return src([
      'src/favicon.ico'
    ], {
      base: 'src'
    })
    .pipe(dest('build'));
}
exports.copy = copy;

const copy_css = () => {
  return src('src/css/*.css')
    .pipe(dest('build/css'));
}
exports.copy_css = copy_css;

/**
 * less
 */
const lessToCss = () => {
  return src('src/less/bolt-chips.less')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'Less',
          message: err.message
        }
      })
    }))
    .pipe(less())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 5 versions']
    }))
    .pipe(gcmq())
    .pipe(csso())
    .pipe(dest('build/css'))
    .pipe(browserSync.stream());
}
exports.lessToCss = lessToCss;

/**
 * html
 */
const htmlTo = () => {
  return src('src/index.html')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'html',
          message: err.message
        }
      })
    }))
    .pipe(htmlmin({
      removeComments: false,
      collapseWhitespace: true
    }))
    .pipe(dest('build'))
    .pipe(browserSync.stream());
}
exports.htmlTo = htmlTo;

/**
 * scripts
 */
const scripts = () => {
  return src('src/js/bolt-chips.js')
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'js',
          message: err.message
        }
      })
    }))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      exclude: ['tasks']
    }))
    .pipe(dest('build/js'))
    .pipe(browserSync.stream());
}
exports.scripts = scripts;

/**
 * browserSync
 */
const server = () => {
  browserSync.init({
    server: {
      baseDir: './build/'
    }
  });

  watch('src/less/**/*.less', lessToCss);
  watch('src/*.html', htmlTo);
  watch('src/js/**/*.js', scripts);
}
exports.server = server;

/**
 * default
 */
exports.default = series(clean, parallel(copy, copy_css, lessToCss, scripts, htmlTo), server);
