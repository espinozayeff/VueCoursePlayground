<template>
  <div class="text-center">
    <ul class="list-group">
      <li
        v-for="(item, index) of reorderedArray"
        :key="item.id"
        @click="sum(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ item.name }}
        <span class="badge badge-primary badge-pill">{{ item.importance }}</span>
      </li>
    </ul>

    <button @click="reset" type="button" class="btn btn-danger mt-4 px-4">Reset</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["tasks"]),

    reorderedArray() {
      return this.tasks.sort((a, b) => b.importance - a.importance);
    }
  },
  methods: {
    ...mapMutations(["sum", "reset"])
  }
};
</script>