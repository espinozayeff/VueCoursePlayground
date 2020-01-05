Vue.component('child', {
	template:
	`
	<div>
		<button class="btn btn-primary" @click="sum">+</button>
		<button class="btn btn-danger" @click="substract(2)">-</button>
	</div>
	`,

	methods: {
		...Vuex.mapMutations([
			'sum',
			'substract'
		])
	}
})