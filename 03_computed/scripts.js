const app = new Vue({
	el: '#app',
	data: {
  		message: 'Hello, my name is Yeff!',
  		counter: 0
  	},
  	computed: {
  		revertMessage() {
  			return this.message.split('').reverse().join('');
  		},

  		progressColor() {
			return {
				'bg-success' : this.counter <= 10,
				'bg-warning' : this.counter > 10 && this.counter < 20,
				'bg-danger'  : this.counter >= 20
			}
  		}
  	} 
})