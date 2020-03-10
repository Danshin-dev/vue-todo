<template>
  <div class="border rounded p-2 d-flex align-items-center mb-1">
    <input
      type="checkbox"
      v-bind:checked="todo.completed"
      v-on:change="changeStatus"
    />
    <strong class="ml-2">{{ index + 1 }}</strong>
    <span class="ml-2" v-bind:class="{ done: todo.completed }">{{
      todo.title | upperCase
    }}</span>
    <button
      class="btn btn-outline-danger ml-auto"
      v-on:click="removeTodo"
    >
      Remove
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    ...mapActions(["actStatusTodo" , "actRemoveTodo"]),
    changeStatus() {
      this.actStatusTodo(this.todo.id);
    },
    removeTodo() {
      this.actRemoveTodo(this.todo.id);
    }
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
