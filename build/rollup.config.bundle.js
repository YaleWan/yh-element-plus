import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
const vue = require('rollup-plugin-vue')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')

export default [
  {
    input: path.resolve(__dirname, '../packages/c3-element-plus/index.js'),
    output: {
      format: 'es',
      file: 'lib/index.esm.js'
    },
    plugins: [
      nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
      commonjs({ browser: true }),
      json(),
      vue({
        target: 'browser',
        css: false
      }),
      terser()

    ],
    external(id) {
      return /^vue/.test(id) ||
        deps.some(k => new RegExp('^' + k).test(id))
    }
  }
]
