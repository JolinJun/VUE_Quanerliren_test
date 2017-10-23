// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'   //路由插件
import VueResource from 'vue-resource' // 网络请求插件
import vScroll  from 'vue-scroll';

Vue.use(VueResource);
Vue.use(vScroll );
// Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  // render: h => h(App),
  directives: {
    'v-scroll': vScroll   // tried 'vueScroll': vueScroll as well
  },

});
