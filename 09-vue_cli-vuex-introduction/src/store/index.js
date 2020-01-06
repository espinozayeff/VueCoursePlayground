import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        name: "Task #1",
        importance: 0
      },
      {
        name: "Task #2",
        importance: 0
      },
      {
        name: "Task #3",
        importance: 0
      }
    ]
  },
  mutations: {
    sum(state, index) {
      state.tasks[index].importance++;
    },

    reset(state) {
      state.tasks.forEach(item => {
        item.importance = 0;
      });
    }
  },
  actions: {},
  modules: {}
});
