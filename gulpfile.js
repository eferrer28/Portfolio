var gulp = require("gulp");
    concat = require("gulp-concat");
    uglify = require("gulp-uglify")

gulp.task("concatScripts", function() {
  gulp.src([
      'js/script.js', 'js/another.js'])
  .pipe(concat("test.js")) //concat takes strings parameter
  .pipe(gulp.dest("/public/js")); //destination folder
});

gulp.task("minifyScripts", function() {
    gulp.src("js/script.js")
    .pipe(uglify())
    .pipe(gulp.dest("/public/js"));
})

gulp.task("default", ["goodbye"], function() {
    console.log("This is the default task");
    
});