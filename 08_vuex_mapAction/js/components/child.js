Vue.component("child", {
  template: `
	<div> 
		<button class="btn btn-primary" @click="sum">+</button>
		<button class="btn btn-danger" @click="substract(2)">-</button>
		<button class="btn btn-success" @click="getLanguages">Get data from json</button>
		<ul class="mt-3" v-for="language of languages">
			<li> {{ language.id }} - {{ language.name }} </li>
		</ul>
	</div>
	`,
  computed: {
    ...Vuex.mapState(["languages"])
  },

  methods: {
    ...Vuex.mapMutations(["sum", "substract"]),
    ...Vuex.mapActions(["getLanguages"])
  }
});
