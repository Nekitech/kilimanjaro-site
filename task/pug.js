// Подключения
const {src, dest} = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const pluginsConfig = require('../config/pluginsConfig.js')

// Плагины
const usePug = require('gulp-pug')
const webpHtml = require('gulp-webp-html')
const gulpif = require('gulp-if')

const pug = () => {
    return src(path.pug.src)
        .pipe(usePug(pluginsConfig.pugConf))
        .pipe(gulpif(pluginsConfig.isDev, webpHtml()))
        .pipe(dest(path.pug.dest))
}

module.exports = pug