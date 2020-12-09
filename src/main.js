// import Vue
import Vue from 'vue';
import 'lodash';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@utils/axios.js';

// import Vue App, routes, store, i18n, mixins
import App from './App.vue';
import router from '@router';
import {
	store
} from '@store';
import i18n from '@locales';

// import plugin
import "@plugins";

// import mixin
import {
	customMixins
} from "@mixins/index";
Vue.mixin(customMixins);

// import css
import "@assets/scss/custom-main.scss";

// 輸入變大寫
// Vue.directive('uppercase', {
// 	update (el) {
// 		var event = new Event('input', { bubbles: true })
// 		el.value = el.value.toUpperCase()
// 		el.dispatchEvent(event)
// 	}
// })

export const app = new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store,
	i18n
});