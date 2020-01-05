Vue.component('parent', {
	template:
	`
	<div class="p-5 bg-dark text-white">
		<h2>Parent number: {{ parentNumber }}</h2>
		<h3>Child to parent text: {{ childText }} </h3>
		<button class="btn btn-success" @click="parentNumber++">+</button>
		<child :child-number="parentNumber" @childText="childText = $event"></child>
	</div>
	`,
	data() {
		return {
			parentNumber: 0,
			childText: ''
		}
	}
})