var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var src = 'src/';
var node = 'node_modules/';

var config = {
    src: src,
    htmlIn: src + '*.html',
    scssIn: src + 'stylesheets/**/*.scss',
    cssOut: src + 'dist/css',
    jsIn: src + 'scripts/*.js',
    jsOut: src + 'dist/js',
    jquery: node + 'jquery/dist/jquery.js',
    fontAwesomeScss: node + 'font-awesome/scss/font-awesome.scss',
    fontAwesomeOut: node + 'font-awesome/fonts/fontawesome-webfont.*',
    fontAwesomeIn: src + 'dist/fonts',
    cssOutName: 'style.css',
    jsOutName: 'index.js'
};

gulp.task('reload', function() {
    browserSync.reload();
});

/** BrowserSync, Watch config */

gulp.task('serve', ['sass'], function() {

    browserSync({
        server: config.src
    });

    gulp.watch(config.htmlIn, ['reload']);
    gulp.watch(config.scssIn, ['sass']);
    gulp.watch(config.jsIn, ['js']);
});

/** SASS, Autoprefixer, cleanCSS config */

gulp.task('sass', function() {
    return gulp.src([config.fontAwesomeScss, config.scssIn])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
         }))
        .pipe(concat(config.cssOutName))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.cssOut))
        .pipe(browserSync.stream());
});

/** Uglify config */

gulp.task('js', function() {
    return gulp.src([config.jquery, config.jsIn])
        .pipe(concat(config.jsOutName))
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsOut))
        .pipe(browserSync.stream());
});

/** Gulp font awesome copy */

gulp.task('copy', function() {
    return  gulp.src([config.fontAwesomeOut])
        .pipe(gulp.dest(config.fontAwesomeIn));
});

gulp.task('default', ['serve', 'sass', 'js', 'copy']);
gulp.task('no-watch', ['sass', 'js']);

