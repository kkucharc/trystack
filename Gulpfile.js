// Include gulp
var gulp = require('gulp'),
	exec =  require('child_process').exec,
	mocha = require('gulp-mocha'),
	server = require('gulp-express'),
	node;

gulp.task('server', function (){
	server.run(['src/server.js']);
	gulp.watch(['src/server.js', 'src/**/*.js'], [server.notify, server.run]);
});


gulp.task('tests', function(){
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});


gulp.task('watch_tests', function(cb){
	gulp.watch('**/**/*.js', ['test']);

});

gulp.task('default', ['server']);

gulp.task('test', ['tests', 'watch_tests']);