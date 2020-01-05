Vue.component('parent', {
	template:
	`
	<div>
		<h2>Number: {{ number }}</h2>
		<child></child>
	</div>
	`,

	computed: {
		...Vuex.mapState([
			'number'
		])
	}
})