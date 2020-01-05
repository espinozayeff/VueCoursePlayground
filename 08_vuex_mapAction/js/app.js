const store = new Vuex.Store({
  state: {
    number: 10,
    languages: []
  },

  mutations: {
    sum(state) {
      state.number++;
    },
    substract(state, n) {
      if (state.number > 0) {
        state.number -= n;
      }
    },
    setLanguages(state, lenguagesAction) {
      state.languages = lenguagesAction;
    }
  },

  actions: {
    getLanguages: async function({ commit }) {
      const data = await fetch("assets/data.json");
      const languages = await data.json();
      commit("setLanguages", languages);
    }
  }
});

new Vue({
  el: "#app",
  store // store: store
});
