import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import list from '@/utils/tabBar.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		store: {},
		member: {}, //成员信息
    tabList:list
	},
	getters: {
		isLogin: state => Object.keys(state.member).length > 0	//是否登录
	},
	mutations: {
		SET_MEMBER(state, member) {
			state.member = member
		},
		SET_STORE(state, store) {
			state.store = store
		},
	},
	actions: {
		async getStore({commit}) {
			const store = await api('store')
			commit('SET_STORE', store)
		}
	}
})

export default store