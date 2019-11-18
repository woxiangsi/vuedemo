import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState = from 'vuex-persistedstate'
Vue.use(Vuex)
const state = {
	test: 1,
	lang: 'cn'
}
const mutations = {
	add: (state,data) =>{
		state.selectGoods.push(data)
		state.test++
	}
}
const actions = {
	addTest: ({ commit },data)=>{
		commit ('add',data)
	}
}
export default new Vuex.Store({

	state,
	mutations,
	actions,
	plugins: [createPersistedState({
		storage: window.sessionStorage, //不设置默认到localstorage
		reducer(val){
			return {
				//指定需要持久话的state
				lang: val.lang
			}
		}
	})]
})