const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');

function cleanDist() {
    return del('assets/images');
}

function images() {
    return src('assets/images/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ]
        ))
        .pipe(dest('assets/images/'))
}

function styles() {
    return src('assets/scss/main.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('main.min.css'))
        .pipe(autoprefix({
            overrideBrowserslist: ['last 2 version'],
            grid: true
        }))
        .pipe(dest('assets/css'))
}

function watching() {
    watch(['assets/scss/**/*.scss'], styles);
}

exports.styles = styles;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.images = images;
exports.build = series(cleanDist, images);


exports.default = parallel(styles, watching)