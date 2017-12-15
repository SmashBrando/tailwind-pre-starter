// project paths are set in package.json
const paths = require("./package.json").paths;

const fs = require("fs");
const gulp = require("gulp");
const less = require('gulp-less');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const browserSync = require("browser-sync").create();

// compiling tailwind CSS
gulp.task("css", () => {
  return gulp
    .src(paths.src.css + "*.css")
    .pipe(less())
    .pipe(sass())
    //.pipe(stylus())
    .pipe(postcss([
      tailwindcss(paths.config.tailwind),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest(paths.dist.css));
});

// default task
gulp.task("default", ["css"]);
