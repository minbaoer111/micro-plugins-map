// rollup.config.js
import babel from '@rollup/plugin-babel';

export default { 
  input: 'index.js', // 入口文件
  output: [
    {
      file: './dist/index.es.js',
      format: 'esm',  // 将软件包保存为 ES 模块文件
      name: 'cssModuleVue'
    },
    {
      file: './dist/index.cjs.js',
      format: 'cjs',  // CommonJS，适用于 Node 和 Browserify/Webpack
      name: 'cssModuleVue',
      exports: 'default'
    }
  ],
  plugins: [
    // 使用插件 @rollup/plugin-babel
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};
