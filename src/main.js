// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import * as svgicon from 'vue-svgicon'
// import store from './store';


// import './assets/styles/main.scss'

Vue.config.productionTip = false;

Vue.use(svgicon, {
    tagName: 'svgicon'
});

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
