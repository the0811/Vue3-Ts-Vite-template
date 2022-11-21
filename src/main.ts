import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//全局样式
import './assets/scss/index.scss' 
//路由
import router from './router'
//状态
import store from './store' 

//全局指令
import directives from './directives'

// import 'default-passive-events' // 解决Chrome关于preventDefault的错误提示

import * as charts from 'echarts';  

let app = createApp(App)
app.use(router)


directives(app)


// 全局方法
app.config.globalProperties.$echarts = charts

app.mount('#app')
