import Axios from "axios";
// import Vue from "vue";

const state = {
  products: {
    isBusy: false,
    data: null,
    error: null
  },
}

const mutations = {
  LOAD_PRODUCTS_BUSY: (state, payload) => {
    state.products.isBusy = payload;
  },
  LOAD_PRODUCTS_SUCCESS: (state, payload) => {
    state.products.data = payload;
    state.products.error = null;
  },
  LOAD_PRODUCTS_FAIL: (state, payload) => {
    state.products.data = null;
    state.products.error = payload;
  },
  ADD_PRODUCTS_BUSY: (state, payload) => {
    state.products.isBusy = payload;
  },
  ADD_PRODUCTS_SUCCESS: (state, payload) => {
    state.products.data = payload;
    state.products.error = null;
  },
  ADD_PRODUCTS_FAIL: (state, payload) => {
    state.products.data = null;
    state.products.error = payload;
  },
  REMOVE_PRODUCTS_BUSY: (state, payload) => {
    state.products.isBusy = payload;
  },
  REMOVE_PRODUCTS_SUCCESS: (state, payload) => {
    state.products.data = payload;
    state.products.error = null;
  },
  REMOVE_PRODUCTS_FAIL: (state, payload) => {
    state.products.data = null;
    state.products.error = payload;
  },
  UPDATE_PRODUCTS_BUSY: (state, payload) => {
    state.products.isBusy = payload;
  },
  UPDATE_PRODUCTS_SUCCESS: (state, payload) => {
    state.products.data = payload;
    state.products.error = null;
  },
  UPDATE_PRODUCTS_FAIL: (state, payload) => {
    state.products.data = null;
    state.products.error = payload;
  },
}

const actions = {
  async getProducts ({ commit }) {
    commit("LOAD_PRODUCTS_BUSY", true);

    return await Axios.get('http://localhost:3333/products')
      .then(response => {
        commit("LOAD_PRODUCTS_SUCCESS", response.data);
      })
      .catch(error => {
        console.log(error);
        commit("LOAD_PRODUCTS_FAIL", error);
      })
      .finally(() => commit("LOAD_PRODUCTS_BUSY", false));
  },

  async addNewProduct ({ commit }, data) {
    commit("ADD_PRODUCTS_BUSY", true);

    const body = {
      ...data
    };

    console.log('### body', body);

    return await Axios.put('http://localhost:3333/product', body)
      .then(response => {
        commit("ADD_PRODUCTS_SUCCESS", response.data);
      })
      .catch(error => {
        console.log(error);
        commit("ADD_PRODUCTS_FAIL", error);
      })
      .finally(() => commit("ADD_PRODUCTS_BUSY", false));
  },

  async removeProduct ({ commit }, productId) {
    commit("REMOVE_PRODUCTS_BUSY", true);

    return await Axios.delete(`http://localhost:3333/product/${productId}`)
      .then(response => {
        commit("REMOVE_PRODUCTS_SUCCESS", productId, response.data);
      })
      .catch(error => {
        console.log(error);
        commit("REMOVE_PRODUCTS_FAIL", error);
      })
      .finally(() => commit("REMOVE_PRODUCTS_BUSY", false));
  },

  async updateProduct ({ commit }, data) {
    commit("UPDATE_PRODUCTS_BUSY", true);

    const body = {
      ...data
    };

    console.log('### body', body);

    return await Axios.post(`http://localhost:3333/product/${body._id}`, body)
      .then(response => {
        commit("UPDATE_PRODUCTS_SUCCESS", response.data);
      })
      .catch(error => {
        console.log(error);
        commit("UPDATE_PRODUCTS_FAIL", error);
      })
      .finally(() => commit("UPDATE_PRODUCTS_BUSY", false));
  },
}

const getters = {
  allProducts: state => state.products
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};