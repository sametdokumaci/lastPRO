const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer')
const reload = browserSync.reload

function onError(err) {
    console.log(err);
}

gulp.task('html', () => {
    return gulp.src('*.html')
        .pipe(browserSync.stream())
})

gulp.task('ejs', () => {
    return gulp.src('views/*.ejs')
        .pipe(browserSync.stream())
})

gulp.task('css', () => {
     return gulp.src('./scss/custom.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
})

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "localhost:5000"
    })
    gulp.watch('./scss/**/*.scss', gulp.series('css'))
    gulp.watch('./js/**/*.js', reload)
    gulp.watch('*.html', gulp.series('html'))
    gulp.watch('views/*.ejs', gulp.series('ejs'))
    gulp.watch('views/inc/*.ejs', gulp.series('ejs'))
    gulp.watch('views/admin/*.ejs', gulp.series('ejs'))
})

gulp.task('default', gulp.series('browser-sync', 'css'))

