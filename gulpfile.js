var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("style", function() {
  gulp
    .src("assets/css/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("assets/css/style.css", ["style"]);
});
