<template>
  <div>
    <add-todo />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not-completed</option>
    </select>
    <hr />
    <router-link to="/" class="text-center">Go homepage</router-link>
    <hr />
    <TodoList
      v-bind:todos="this.filterTodos(this.filter)"
      @remove-todo="removeTodo"
      v-if="this.filterTodos(this.filter)"
    />
    <p class="text-center" v-else>No todos</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import addTodo from "@/components/addTodo";
import TodoList from "@/components/TodoList";

export default {
  components: { addTodo, TodoList },
  data() {
    return {
      filter: "all"
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  computed: {
    ...mapGetters(["allTodos" , "filterTodos"])
  }
};
</script>
