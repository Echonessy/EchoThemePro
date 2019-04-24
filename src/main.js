import Vue from 'vue';
import App from './App';
import router from './router';
import vue_resource from 'vue-resource';
import common from '@/common'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';


Vue.config.productionTip = false;
Vue.use(vue_resource);
Vue.use(ElementUI);
Vue.use(Mint);
Vue.use(common, ['io', 'cookie', 'mint', 'bus', 'vhttp', 'nprogress']);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
