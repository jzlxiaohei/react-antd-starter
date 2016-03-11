/**
 * Created by zilong on 3/6/16.
 */
var path = require('path')
var gulp = require('gulp')
var webpack = require('webpack')
var gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify');

var holderKeys = {
    '[node_modules_path]': path.join(__dirname, './node_modules')
}
var libPath = [
    '[node_modules_path]/jquery/dist/jquery.min.js',
    '[node_modules_path]/react/dist/react.min.js',
    '[node_modules_path]/react-dom/dist/react-dom.min.js',
    '[node_modules_path]/rx-lite/rx.lite.min.js'
]

var libDevPath = [
    '[node_modules_path]/jquery/dist/jquery.js',
    '[node_modules_path]/react/dist/react.js',
    '[node_modules_path]/react-dom/dist/react-dom.js',
    '[node_modules_path]/rx-lite/rx.lite.js'
]

libPath = replaceHolder(holderKeys, libPath)
libDevPath = replaceHolder(holderKeys, libDevPath)

gulp.task("lib_prod", function () {
    return gulp.src(libPath)
        .pipe(gp_concat('lib.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task("lib_dev", function () {
    return gulp.src(libDevPath)
        .pipe(gp_concat('lib.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task("lib", ["lib_prod", "lib_dev"], function (cb) {
    cb()
})

gulp.task("default", function () {
    var prodConfig = require("./webpack.config.prod.js")
    webpack(prodConfig, function (err, stats) {
        if (err) {
            throw err;
        }
        var jsonStats = stats.toJson();
        var errors = jsonStats.errors
        if (errors.length > 0) {
            console.log(errors.length + 'error(s), first one is:')
            throw new Error(errors[0]);
        }
        console.log(stats.toString({
            colors: true,
            children: false,
            chunks: false,
            modules: false
        }))
    })
})

// 深度遍历对象,对每个非对象属性,应用func
// 对象属性,接着遍历
function traverse(o, func) {
    for (var i in o) {
        func.call(this, o[i], i, o);
        if (o[i] !== null && typeof(o[i]) == "object") {
            traverse(o[i], func);
        }
    }
}
// 字符串替换,把holderObj里的key,全替换成value
function replaceFn(str, holderObj) {
    for (var i in holderObj) {
        str = str.replace(i, holderObj[i])
    }
    return str;
}
// 根据占位符key-value(比如'[project_name]' :'webpack-coc'),
// 把configObj中的字符串中,holderObj的key全替换成value
function replaceHolder(holderObj, configObj) {
    if (typeof configObj == 'string') {
        return replaceFn(configObj, holderObj)
    }
    traverse(configObj, function (val, key, obj) {
        if (typeof val == 'string' || val instanceof String) {
            obj[key] = replaceFn(val, holderObj);
        }
    })
    return configObj;
}