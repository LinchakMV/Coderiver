var gulp = require('gulp');

var sass = require('gulp-sass');
<<<<<<< HEAD
var autoprefixer = require('gulp-autoprefixer');
=======

>>>>>>> 37808efe49d0ab0cd7a3375340280077339769c0
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
<<<<<<< HEAD
        .pipe(autoprefixer('last 2 versions'))
=======
>>>>>>> 37808efe49d0ab0cd7a3375340280077339769c0
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
        baseDir: 'app'
        },
    })
});
