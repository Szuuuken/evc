var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var bom = require('gulp-bom');

gulp.task('js', function () {
    return gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      './app/js/*.js'])
      .pipe(bom())
      .pipe(gulp.dest('./dist/js/'))
      .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    return gulp.src('./app/img/**')
          .pipe(gulp.dest('./dist/img/'))
});

gulp.task('sass', function () {
    return gulp.src('./app/sass/*.sass')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('.'))
      .pipe(bom())
      .pipe(gulp.dest('./dist/css'))
      .pipe(reload({stream: true}));
});

gulp.task('fonts',function () {
  return gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('templates', function () {
  return gulp.src('./app/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
});

gulp.task('jade-watch', ['templates']);

gulp.task('build', ['js', 'sass', 'fonts', 'images', 'templates']);

gulp.task('default', ['build'], function () {
  browserSync.init({server: './dist'});
  gulp.watch('./app/**/*.jade', ['jade-watch']);
  gulp.watch('./app/sass/**/*.sass', ['sass']);
  gulp.watch('./app/js/**/*.js', ['js']);
});
