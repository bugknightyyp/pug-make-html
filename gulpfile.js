var gulp = require('gulp');
var gutil = require('gulp-util');
var pug = require('gulp-pug');
var less = require('less');

gulp.task('default', function buildHTML() {
  delete require.cache[require.resolve('./data/index.json')];

  return gulp.src('templates/*.pug')
  .pipe(pug({
    pretty: true,
    data: require('./data/index.json'),
    filters: {
      less: function (text, options) {
        options = options || {}
        options.syncImport = true
        var result
        less.render(text, options, function (err, res) {

          if (err) {
            console.log('less Error-------------:' +  err.message)
          }
          result = res.css || ''
        })
        // if (!result) {
        //   throw new Error('less compilation could not complete synchronously.')
        // }
        return result
      }
    }
  }))
  .on('error', function (err) {
      gutil.log(err);
      this.emit('end');
    })
  .pipe(gulp.dest('./html/'))

});

// var watcher = gulp.watch('templates/**/*.pug', ['default']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });
// var watcher_1 = gulp.watch('less/**/*.less', ['default']);
// watcher_1.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });


var watcher = gulp.watch(['templates/**/*.pug', 'less/**/*.less', 'data/index.json'], ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
