Vue.component('greeting-message', {
	template: `
					<div>
						<h1>{{ greetings }}</h1>
						<h3>{{ awesome }}</h3>
					</div>
				`,
	data() {
		return {
			greetings: 'Hello, this is Vue!',
			awesome: 'Awesome, right?'
		}
	}
});