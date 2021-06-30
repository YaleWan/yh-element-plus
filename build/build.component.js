/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const { getPackages } =  require('@lerna/project')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const {terser} = require('rollup-plugin-terser')
// const postcss = require('rollup-plugin-postcss')



const deps = Object.keys(pkg.dependencies)

const runBuild = async () => {
  let index = 0
  const pkgs = await getPackages()
  const inputs = pkgs
    .map(pkg => pkg.name)
    .filter(name =>
      name.includes('@c3-element-plus')&&
      !name.includes('theme-chalk') &&
      !name.includes('utils'),
    ).slice(process.argv[2], process.argv[3])

  build(inputs[index])

  async function build(name) {
    if (!name) return
    const inputOptions = {
      input: path.resolve(__dirname, `../packages/${name.split('@c3-element-plus/')[1]}/index.js`),
      plugins: [
        nodeResolve(),
        css(),
        // terser(),
        vue({
          target: 'browser',
          css: false,
        }),
      ],
      external(id) {
        return /^vue/.test(id)
          || /^@c3-element-plus/.test(id)
          || deps.some(k => new RegExp('^' + k).test(id))
      },
    }
    const getOutFile = () => {
      const compName = name.split('@c3-element-plus/')[1]
      return `lib/${compName}/index.js`
    }
    const outOptions = {
      format: 'es',
      file: getOutFile(),
      paths(id) {
        if (/^@c3-element-plus/.test(id)) {
          return id.replace('@c3-element-plus/', '../')
        }
      },
    }
   console.log(name, 'done')

    const bundle = await rollup.rollup(inputOptions)
    await bundle.write(outOptions)
    index++
    if (index < inputs.length) {
      await build(inputs[index])
    }
  }
}

runBuild()
