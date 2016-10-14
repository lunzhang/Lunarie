var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');

var paths = {
  sass: ['./ng/**/*.scss','./ng2/**/*.scss'],
  controllers: ['./ng/**/*.js']
};

gulp.task('controllers', function () {
  return gulp.src(['ng/controllers/*.js', 'ng/auth/**/*.js'])
  .pipe(concat('controllers.min.js'))
  .pipe(uglify())
  .on('error', gutil.log)
  .pipe(gulp.dest('ng'));
});

gulp.task('sass', function (done) {
  gulp.src('./ng/css/*.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(gulp.dest('./ng/css/'))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./ng/css/'))
  .on('end', done);
});

gulp.task('sass2',function(done){
  gulp.src('./ng2/css/*.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(gulp.dest('./ng2/css/'))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./ng2/css/'))
  .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass','sass2']);
  gulp.watch(paths.controllers, ['controllers']);
});

gulp.task('default', ['watch'], function () {
  nodemon({
    // the script to run the app
    script: './bin/www.js',
    ext: 'js'
  })
  .on('restart', function () {
  });
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
  .on('log', function (data) {
    gutil.log('bower', gutil.colors.cyan(data.id), data.message);
  });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
