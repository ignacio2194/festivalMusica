const {src,dest}= require('gulp')
const sass = require('gulp-sass')(require('sass'))
function css (done){
    // identificar el archivo 
    src('src/scss/app.scss')
        .pipe(sass()) // compilarlo 
        .pipe(dest('build/css'))
    // guardarlo 
done()
}
exports.css= css;