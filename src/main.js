import Vue from 'vue'
import './plugins/api';
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store/store';

Vue.config.productionTip = false

Vue.filter('currency', value => {
	if (typeof value !== "number") {
			return value;
	}
	const formatter = new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 0
	});
	return formatter.format(value);
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
