<template>
  <div class="todo-list">
    <TodoItem
      v-for="(todo , index) of todos"
      v-bind:todo="todo"
      v-bind:index="index"
      v-bind:key="index"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  }
};
</script>
