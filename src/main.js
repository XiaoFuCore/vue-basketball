// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//处理移动端click事件300毫秒延迟。
import FastClick from 'fastclick'
FastClick.attach(document.body);
//引入初始化样式
import 'normalize.css'
import './styles/index.styl'
//引入rem
import 'lib-flexible/flexible'
//引入mand
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)


// 注册全局过滤器
import * as filters from './filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 注册全局组件
import * as components from '@/components'

Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})