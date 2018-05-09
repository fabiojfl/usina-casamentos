const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();


gulp.task('browser-sync', function(){
    browserSync.init({
        proxy: "localhost:2018",
        files:[
          "*.html",
          "css/**/**.css",
          "js/**/**.js",
          "images/**/**.jpg",
          "images/**/**.png"
        ] 
    })
});

gulp.task('bootstrap', function(){
	gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('./css'))
});

gulp.task('less', function(){
    gulp.src('./assets/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function(){
	gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
    './public/build/js/googleapis.js'
	]).pipe(gulp.dest('./js'))
});

gulp.task('watch', function(){
  gulp.watch('./assets/less/**/*.less',['less']);
  gulp.watch('./node_modules/jquery/dist/jquery.min.js',['js']);
  gulp.watch('./node_modules/bootstrap/dist/js/bootstrap.min.js',['js']);
});

gulp.task('default',['browser-sync','bootstrap','less','scripts', 'watch']);
