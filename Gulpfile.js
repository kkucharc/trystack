// Include gulp
var gulp = require('gulp'); 
var exec =  require('child_process').execFile;
var mocha = require('gulp-mocha');

gulp.task('server', function (cb){
	exec('node', ['src/server.js'], function (err, stdout, stderr) {
	    console.log(stdout);
	    console.log(stderr);
	    cb(err);
	});
});


gulp.task('tests', function(){
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(cb){
	gulp.watch('src/**/*.js', ['server']);
});

gulp.task('watch_tests', function(cb){
	gulp.watch('**/**/*.js', ['test']);

});

gulp.task('default', ['tests', 'server', 'watch']);

gulp.task('test', ['tests', 'watch_tests']);