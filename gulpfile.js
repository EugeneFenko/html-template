var gulp = require("gulp");
    // staticI18nHtml = require("gulp-static-i18n-html");
    clean = require("gulp-clean");
    browserSync = require("browser-sync"); // Подключаем Browser Sync
    minify = require('gulp-minify');

gulp.task("browser-sync", function() {
  // Создаем таск browser-sync
  browserSync({
    // Выполняем browser Sync
    server: {
      // Определяем параметры сервера
      baseDir: "dist" // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});


// gulp.task("i18n", function() {
//   return gulp
//     .src("src/index.html")  
//     .pipe(
//       staticI18nHtml({
//         locales: ["en", "uk", "ru"],
//         locale: "en"
//       })
//     )
//     .pipe(gulp.dest("./dist"));
// });


gulp.task("reApp", () => {
  return gulp.src(['src/**']).pipe(gulp.dest("./dist"));
});

gulp.task("clr", function() {
  return gulp.src("dist", { read: false }).pipe(clean());
});


gulp.task('dev',['browser-sync', 'reApp'], function() {
  gulp.watch('./src/index.html');
  gulp.watch('./src/css/*.css',['reApp'])
  gulp.watch('./src/js/*.js',['reApp'])
  // gulp.watch('./locales/*.json',['i18n'])
  // Наблюдение за другими типами файлов
});


gulp.task('bld',['i18n', 'reApp'], function() {
  // build
});