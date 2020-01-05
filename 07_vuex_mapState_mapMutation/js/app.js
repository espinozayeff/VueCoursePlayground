const store = new Vuex.Store({
	state: {
		number: 10
	},
	mutations: {
		sum(state) {
			state.number++
		},
		substract(state, n) {
			if (state.number > 0) {
				state.number -= n
			} 
		}
	}
});

new Vue({
  el: '#app',
  store // store: store
});

