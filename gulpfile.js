const gulp = require('gulp');
const sass= require('gulp-sass')(require('saas'));

function compilasass(){
    return gulp.src('sorce/styles/main.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function()  {
       console.log("Executando via Gulp");
    callback(); 
    },20000);
    
}
function dizoi(callback){
    console.log("Olá Gulp");
    dizTchau();
    callback();
}
function dizTchau(){
    console.log("Tchau Gulp");

}
exports.dfault = gulp.parallel(funcaoPadrao,dizoi);
exports.dizoi=dizoi;
exports.sass = compilasass;