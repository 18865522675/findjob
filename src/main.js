import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'


Vue.use(ElementUI);

Vue.prototype.linkUrl=function(isOpen=false,url){
  if(!isOpen){
    return this.$message.warning("网站目前正在维护中...")
  }
  window.open(url)
}
// linkUrl(isOpen=false,url){
//   if(!isOpen){
//       return this.$message.warning("网站目前正在维护中...")
//   }
//   window.open(url)
// }

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
