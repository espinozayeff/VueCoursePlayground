Vue.component('child', {
	template:
	`
	<div>
		<button @click="$store.commit('sum')">+</button>
	</div>
	`
})