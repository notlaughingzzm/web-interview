import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		store: {},
		member: {}, //成员信息
    tabList:[{  //tabBarList
					iconPath: "/static/uview/example/component.png",
					selectedIconPath: "/static/uview/example/component_select.png",
					text: '首页',
					count: 2,
					isDot: true,
					pagePath: "/pages/home/index"
				},
				{
					iconPath: "/static/uview/example/js.png",
					selectedIconPath: "/static/uview/example/js_select.png",
					text: '发布',
					midButton: true,
					pagePath: "/pages/publish/index"
				},
				{
					iconPath: "/static/uview/example/template.png",
					selectedIconPath: "/static/uview/example/template_select.png",
					text: '个人中心',
					pagePath: "/pages/my/index"
				},
			]
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