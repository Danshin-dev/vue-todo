import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    sendTodo(ctx, title) {
      const todo = { id: new Date(), title, completed: false };
      ctx.commit("addTodo", todo);
    },
    actStatusTodo({ commit }, id) {
      commit("mutStatusTodo", id);
    },
    actRemoveTodo({ commit }, id) {
      commit("mutRemoveTodo", id);
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    mutStatusTodo(state, id) {
      const index = state.todos.findIndex(el => el.id === id);
      state.todos[index].completed = !state.todos[index].completed;
    },
    mutRemoveTodo(state, id) {
      state.todos = state.todos.filter(el => el.id !== id);
    }
  },
  state: {
    todos: [{ id: 1, title: "learn vue", completed: false }]
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    filterTodos(state) {
      return filter => {
        console.log(filter);
        if (filter === "completed") {
          return state.todos.filter(el => el.completed);
        }

        if (filter === "not-completed") {
          return state.todos.filter(el => !el.completed);
        }

        return state.todos;
      };
    }
  }
});
