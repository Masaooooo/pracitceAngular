import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: [],
    detail: []
  },
  mutations: {
    addProduct(state, payload) {
      state.products = payload
    },
    addProductDetail(state, payload) {
      state.detail = payload
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await axios.get(`${ URL }/products`)
      commit('addProduct', res.data)
    },
    async fetchProductDetail({ commit }, id) {
      const res = await axios.get(`${ URL }/products/${id}`)
      commit('addProductDetail', res.data)
    }
  },
  modules: {
  }
})
