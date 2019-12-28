const app = new Vue({
  el: '#app',
  data: {
	message: 'Vue first try!',
    todos: [
					{
						text: 'Javascript project',
						quantity: 19
					},
					{
						text: 'Vue projects',
						quantity: 0
					},
					{
						text:'Other projects',
						quantity: 5
					}
					
		    	]
  }
})