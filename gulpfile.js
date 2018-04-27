const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();


gulp.task('browser-sync', function(){
    browserSync.init({
        proxy: "localhost:2018",
        files:[
          "public/**/**.html",
          "public/build/**/**.css",
          "public/build/**/**.js",
          "public/images/**/**.jpg",
          "public/images/**/**.png"
        ] 
    })
});

gulp.task('bootstrap', function(){
	gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('./public/build/css'))
});

gulp.task('less', function(){
    gulp.src('./assets/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./public/build/css'));
});

gulp.task('scripts', function(){
	gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js'
	]).pipe(gulp.dest('./public/build/js'))
});

gulp.task('watch', function(){
  gulp.watch('./assets/less/**/*.less',['less']);
  gulp.watch('./node_modules/jquery/dist/jquery.min.js',['js']);
  gulp.watch('./node_modules/bootstrap/dist/js/bootstrap.min.js',['js']);
});

gulp.task('default',['browser-sync','bootstrap','less','scripts', 'watch']);


//const cleanCSS  = require('gulp-clean-css');

/*
gulp.task('minify-css', () => {
  return gulp.src('public/build/bootstrap/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
*/