const { src, dest, series, watch } = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");


function scripts() {
    // return src('src/*.js')
    return src([
      'src/js/foo.js', 
      'src/js/bar.js' 
    ])
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.init())
    .pipe(rename({ basename: "scripts" }))
    .pipe(dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest('dist/js/'));
}

function styles () {
  return src('src/scss/styles.scss')
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
  .pipe(dest('dist/css/'))
  .pipe(cleanCSS())
  .pipe(rename({ suffix: ".min" }))
  .pipe(sourcemaps.write("."))
  .pipe(dest('dist/css/'))
}

function whatchMe(){
  watch(['src/js/*.js', 'src/scss/*.scss'], series(scripts, styles));
}

exports.scripts = scripts;
exports.styles = styles;
exports.watch = whatchMe;
exports.default = series(scripts, styles);
