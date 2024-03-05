import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({reader: h => h(App)}).$mount('#app')