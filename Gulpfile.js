// Include gulp
var gulp = require('gulp'); 
var exec =  require('child_process').execFile;

gulp.task('server', function (cb){
	exec('node', ['src/server.js'], function (err, stdout, stderr) {
	    console.log(stdout);
	    console.log(stderr);
	    cb(err);
	});
});

gulp.task('watch', function(cb){
	gulp.watch('**/**/*.js', ['server']);
});

gulp.task('default', ['server', 'watch']);