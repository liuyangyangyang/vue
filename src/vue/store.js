import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state={
	count: 0,
    username: ''
}
const mutations = {
    increment (state, amount) {
        state.count = state.count + amount
    },
    cut (state, amount) {
    	if(state.count<=0)
    	{
    		state.count = 0
    	}
        state.count = state.count - amount
    },
    add (state, arg) {
        state.username=arg
    }
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})