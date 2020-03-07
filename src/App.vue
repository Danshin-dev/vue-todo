<template>
  <div id="app">
    <h1>Todo application</h1>
    <add-todo @add-todo="addTodo" />
    <hr />
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import addTodo from "@/components/addTodo";
import TodoList from "@/components/TodoList";

export default {
  name: "App",
  components: { addTodo, TodoList },
  data() {
    return {
      todos: [
        { id: 1, title: "Выучить vue", completed: false },
        { id: 2, title: "Выучить vuex", completed: false },
        { id: 3, title: "Выучить vue-route", completed: false },
        { id: 4, title: "Написать todo на vue", completed: false }
      ]
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 60%;
  margin: 0 auto;
}
</style>
