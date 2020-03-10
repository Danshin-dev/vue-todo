<template>
  <form @submit.prevent="submitHandler">
    <div class="row pb-2">
      <div class="col">
        <input
          type="text"
          class="form-control"
          id="todo"
          placeholder="Enter new todo"
          v-model="title"
        />
      </div>
      <div class="col-3">
        <button class="btn btn-primary btn-block" type="submit">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["sendTodo"]),
    submitHandler() {
      if (this.title.trim()) {
        this.sendTodo(this.title);
        this.title = "";
      }
    }
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>
