import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import html from 'rollup-plugin-html';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  dest: 'dest/bundle.js',
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    eslint({
      exclude: [
        '**/*.scss',
        '**/*.html',
        '**/*.json'
      ]
    }),
    json(),
    uglify(),
    html({
      include: '**/*.html'
    }),
    scss({
      output: './dest/style.css',
    })
  ]
};
