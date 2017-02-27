import Vue from 'vue'
export const increment = function ({ commit, state }) {
  commit('increment', 1) //
}
export const add = function ({ commit, state }) {
	Vue.Tool.ajax({
			url:'api.Demo.tests',
			data:{name:"sean"},
			success(data,res){
			  if(res.data.err_code==8888)
			  {
			  	commit('add',res.data.result)
			  }				
			},
			error(res){
				console.log(res)
			}
		})
}
export const cut = function ({ commit, state }) {
  commit('cut', 1) //
}