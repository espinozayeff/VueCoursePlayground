Vue.component('parent', {
	template:
	`
	<div>
		<h2>Number: {{ $store.state.number }}</h2>
		<child></child>
	</div>
	`
})