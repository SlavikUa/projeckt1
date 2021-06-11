const {src, dest, watch}  = require('gulp');

const scss   = require('gulp-sass'); // вся мощь плагина scss передается в переменную scss

const concat = require('gulp-concat');

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(dest('app/css'))
}

function watcheng() {
    watch(['app/scss/**/*.scss'], styles) // следить за всеми папками и файлами с расширением scss и запускал функцию
}

exports.styles = styles;
exports.watching = watcheng;