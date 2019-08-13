const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//comple scss into css
function style() {
    //where is my scss file 
    return gulp.src('./scss/**/*.scss')
     	//pass that file through sass compiler
     	.pipe(sass())
     	// where do I save the compiled CSS?
     	.pipe(gulp.dest('./css'))
     	//stream to changes to all browser
     	.pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;