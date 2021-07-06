import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import app from './modules/app.js'
import userInfo from './modules/userInfo.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    app,
    userInfo
  },
  getters
})

export default store