// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import _$ from 'jquery'
import apiConfig from './config-api'
import App from './App'
import ConfigRoute from './config-route.js'
import './script/directive'
import tool from './libs/tool'
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

tool(Vue)
const router = new VueRouter({
  routes: ConfigRoute
})

Vue._$ = _$;
Vue.__Basepath = 'http://localhost:3066';//服务器
Vue.__HttpMethod = 'JSONP';
Vue.__Developing = false;//是否开发中，如果否，则发布时强制卸载mock
Vue.http.options.emulateJSON = true;
Vue.apiConfig = apiConfig;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
