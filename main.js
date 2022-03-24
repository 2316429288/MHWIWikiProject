Vue.config.productionTip = false
import Vue from 'vue';
import App from './App.vue';
import mhwi from '@/mhwi-common';
Vue.use(mhwi);

App.mpType = 'app';

const app = new Vue({
    ...App
});

app.$mount();
