const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

// variables
var paths = {
  styles: {
    src: "./assets/sass/**/*.scss",
    dest: "./assets/css"
  },
  html: {
    src: "./*.html"
  }
};

sass.compiler = require("node-sass");

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  style();
  gulp.watch(paths.styles.src, gulp.series(style));
  gulp.watch(paths.html.src).on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
