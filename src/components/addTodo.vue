<template>
  <form @submit.prevent="submitHandler">
    <div class="row">
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
export default {
  methods: {
    submitHandler() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          complite: false
        };

        this.$emit("add-todo", newTodo);
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
