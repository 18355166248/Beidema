import Vue from 'vue'
import App from './App.vue'
import '@/common/css/base.css'
import "video.js/dist/video-js.css"
import "@/common/css/custom-theme.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
