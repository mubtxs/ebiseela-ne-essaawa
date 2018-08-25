// generated on 2018-08-12 using generator-webapp 3.0.1
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');

const $ = gulpLoadPlugins();

let dev = true;

gulp.task('transpile', () => {
    return gulp.src('src/*.js')
        .pipe($.plumber())
        .pipe($.babel())
        .pipe(gulp.dest('.tmp'));
});

gulp.task('compress', () => {
    return gulp.src('.tmp/*.js')
        .pipe($.if(dev, $.sourcemaps.init()))
        .pipe($.uglify({
            compress: {
                drop_console: true
            }
        }))
        .pipe($.if(dev, $.sourcemaps.write('.')))
        .pipe($.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist'));
});

function lint(files) {
    return gulp.src(files)
        .pipe($.eslint({
            fix: true
        }))
        .pipe($.eslint.format());
}

gulp.task('lint', () => {
    return lint('src/*.js')
        .pipe(gulp.dest('src'));
});
gulp.task('lint:test', () => {
    return lint('test/**/*.js')
        .pipe(gulp.dest('test'));
});

gulp.task('clean', del.bind(null, ['dist', '.tmp']));