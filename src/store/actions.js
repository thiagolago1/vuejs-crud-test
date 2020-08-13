import Vue from 'vue';

export default {
  loadData({ commit }) {
    Vue.prototype.$http.get('/products').then(response => {
      const data = response.data;
      if (data) {
        commit('setProducts', data.products)
      }
    })
  }
};