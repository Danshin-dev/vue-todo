<template>
  <div>
    <add-todo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not-completed</option>
    </select>
    <hr />
    <router-link to="/" class="text-center">Go homepage</router-link>
    <hr />
    <TodoList
      v-bind:todos="filteredProps"
      @remove-todo="removeTodo"
      v-if="filteredProps.length"
    />
    <p class="text-center" v-else>No todos</p>
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
      ],
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
    filteredProps() {
      if (this.filter === "completed") {
        return this.todos.filter(t => t.completed);
      }

      if (this.filter === "not-completed") {
        return this.todos.filter(t => !t.completed);
      }

      return this.todos;
    }
  }
};
</script>
