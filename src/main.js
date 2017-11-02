// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import {routes} from './router/routerConfig';
import axios from "axios";
import iView from 'iview';
// css
import 'iview/dist/styles/iview';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.use(iView);
/* eslint-disable no-new */

const router = new VueRouter({
    mode: 'history', // 去掉hash模式
	  routes
})
new Vue({
  el: '#app',
	router,
	render: h => h(App)
})
