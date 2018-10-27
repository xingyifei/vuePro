import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'
import Api from '../mock/Api.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    imgList: [],
    articleList: [],
  },
  mutations: {
    increment (state) {
      state.count++
    },
    getimgList (state, res) {
      state.imgList = res
    },
    getarticleList (state, res) {
      state.articleList = res
    }
  },
  actions: {
    getimgList (context) {
      context.commit('getimgList', Api.imgList)
    },

    getarticleList (context) {
      context.commit('getarticleList', Api.articleList)
    }
  }
})

export default store
