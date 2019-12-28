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
					
    	],
    	newTodoText: '',
    	newTodoQuantity: 0,
    	totalQuantity: 0
  },
  methods: {
  		addTodo() {
  			if(this.newTodoText) {
  				this.todos.push({
						  				text: this.newTodoText,
						  				quantity: this.newTodoQuantity
						  			});
				this.newTodoText = '';
				this.newTodoQuantity = 0;
  			}
  		}
  },
  computed: {
  	sumTodo() {
  		this.totalQuantity = 0;

  		for(todo of this.todos) {
  			this.totalQuantity += todo.quantity;
  		}

  		return this.totalQuantity;
  	}
  }
})