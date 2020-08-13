import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';

import products from './modules/products';

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
      products,
  }
})