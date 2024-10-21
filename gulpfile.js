import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import { src, dest } from "gulp";

const sass = gulpSass(dartSass); // gulp-sass

export function css(done) {
  src("src/scss/app.scss").pipe(sass()).pipe(dest("build/css"));

  done();
}
