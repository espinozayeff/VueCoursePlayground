Vue.component('child', {
	template:
	`
	<div class="mt-4 p-3 bg-primary">
		<h4>Parent to child number: {{ childNumber }}</h4>
		<h5>Child text: {{ childText }}</h5>
		<button class="btn btn-danger" @click="childNumber++">+</button>
	</div>
	`,
	props: ['childNumber'],
	data() {
		return {
			childText: 'Lorem ipsum'
		}
	},
	mounted() {
		this.$emit('childText', this.childText);
	}
})