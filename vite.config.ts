import { defineConfig, loadEnv } from 'vite' 
import vue from '@vitejs/plugin-vue'

import * as path from "path";

// 引入Mock插件
import { viteMockServe } from 'vite-plugin-mock'

// element-plus 的最新版按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'




// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // console.log(
  //   '%c [  command, mode,ssrBuild   ]-6',
  //   'font-size:13px; background:pink; color:#bf2c9f;',
  //   command,
  //   mode,
  //   ssrBuild
  // )

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd())
  // console.log('%c [ env ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', env)
  // const env = loadEnv(mode, process.cwd(), '')


  // // 需要注意的是，在 Vite 的 API 中，在开发环境下 command 的值为 serve（在 CLI 中， vite dev 和 vite serve 是 vite 的别名），而在生产环境下为 build（vite build）。
  if (command === 'serve') {
    console.log('[ 当前环境： ] >', '开发环境----' + JSON.stringify(env))
    // return {
    //   // dev 独有配置
    //   dev: '当前开发环境'
    // }
  } else {
    console.log('[ 当前环境： ] >', '生产环境----' + JSON.stringify(env))
    // command === 'build'
    // return {
    //   // build 独有配置
    // }
  }
  return {

    base: './', // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
    // 8月更新
    // productionSourceMap: !isProduction, //关闭生产环境下的SourceMap映射文件

    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "@/assets/scss/index.scss";`, // 引入全局样式
    //     },
    //   },

    //   // 此代码为适配移动端px2rem
    //   // postcss: {
    //   //   plugins: [
    //   //     postCssPxToRem({
    //   //       // rootValue: 75, // 1rem的大小
    //   //       rootValue: 37.5, // 1rem的大小
    //   //       propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
    //   //     }),
    //   //   ],
    //   // },
    // },

    plugins: [
      vue({
        // 默认开启响应性语法糖
        reactivityTransform: true,
      }),

      // 配置mock
      viteMockServe({
        mockPath: '/mock',
        localEnabled: true,
      }),

      
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],

  
    server: {
      https: false, // 是否开启 https
      open: true, // 是否自动在浏览器打开
      cors: true, // 允许跨域  8月更新
      port: 3000, // 端口号
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: '', // 后台接口
          changeOrigin: true,
          secure: false, // 如果是https接口，需要配置这个参数
          // ws: true, //websocket支持
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

  build: {
      outDir: 'dist',
      // 9月更新
      assetsDir: 'assets', //指定静态资源存放路径
      sourcemap: false, //是否构建source map 文件
      // 10月更新
      minify: 'terser', // 混淆器，terser 构建后文件体积更小，'terser' | 'esbuild'    // 默认为esbuild
      chunkSizeWarningLimit: 1500, //chunk 大小警告的限制，默认500KB
      rollupOptions: {
        output: {
          // 最小化拆分包
          manualChunks(id) {   // 配置输出文件夹
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
          chunkFileNames: 'js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名，[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
  
        },
      },
      terserOptions: {
        // 构建生产环境移除console
        compress: {
          drop_console: true,  // 生产环境移除console
          drop_debugger: true,  // 生产环境移除debugger
        },
        // 10月更新
        output: {
          comments: true, // 去掉注释内容
        },
      },
    },

    // viteMockServe({
    //   // 数据模拟
    //   mockPath: 'mock'
    // })

    // 引入第三方的配置
    optimizeDeps: {
      include: [],
    },

  
    resolve: {
      alias: {
        // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
        '@': path.resolve(__dirname, 'src'),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        '@imgs': path.resolve(__dirname, 'src/assets/imgs'),
        "@views": path.resolve(__dirname, "src/views"),
        "@store": path.resolve(__dirname, "src/store"),
      },
      extensions: ['.js', '.json', '.ts', '.vue', '.png','scss'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    define: {
      'process.env': env, // process.env为自定义名称  可在组件中直接调用
      'a': 666
    },


 
    


  }
})
