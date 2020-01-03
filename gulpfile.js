const gulp = require('gulp');
const concat = require('gulp-concat')



gulp.task('scripts', function() {
    return gulp.src('src/scripts/bmiCalculator.js')
      .pipe(concat('bmiCalculator.js'))
      .pipe(gulp.dest('build/scripts'));
  });


