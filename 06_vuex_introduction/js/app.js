const store = new Vuex.Store({
	state: {
		number: 10
	},
	mutations: {
		sum(state) {
			state.number++
		}
	}
});

new Vue({
  el: '#app',
  store // store: store
});

