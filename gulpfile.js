
var gulp = require("gulp");//引入gulp
var htmlmin = require("gulp-htmlmin");//压缩html
var sass = require("gulp-sass");//引入sass
var cssnano = require("gulp-cssnano");//压缩css
var gulpJs = require("gulp-uglify");//压缩js
var imagemin = require("gulp-imagemin");
var browserSync = require('browser-sync');//浏览器同步
//压缩发布静态页面到dist目录中
gulp.task("html", function() {
    var options = {
        collapseWhitespace:true,//清除空格
        collapseBooleanAttributes:true,//省略布尔属性的值，比如：<input checked="checked"/>,那么设置这个属性后，就会变成 <input checked/>
        removeComments:true,//清除html中注释的部分
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true    
    };
    gulp.src("src/**/*.html")
        .pipe(htmlmin(options))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.reload({
          stream: true
        }))
});

//编译sass的任务
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(gulp.dest("src/css"))
    //.pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

//编译图片任务
gulp.task("imagemin",function(){
    gulp.src("src/images/*.{jpg,png,gif}")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

//编译js任务
gulp.task("js",function(){
    gulp.src("src/js/*.js")
    .pipe(gulpJs())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.reload({
          stream: true
    }))
})

//监控文件变化 
gulp.task('servers', function () {
     browserSync({
            server: {baseDir: ['dist/']},
            port:8080
        }, function(err, bs) {
            console.log(bs.options.getIn(["urls", "local"]));
    });
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['html']);
})
//执行默认任务
gulp.task('mainTask', ['sass','html','imagemin','js','servers']);