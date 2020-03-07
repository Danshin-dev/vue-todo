<template>
  <div class="border rounded p-2 d-flex align-items-center">
    <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
    <strong class="ml-2">{{ index + 1 }}</strong>
    <span class="ml-2" v-bind:class="{ done: todo.completed }">{{
      todo.title
    }}</span>
    <button
      class="btn btn-outline-danger ml-auto"
      v-on:click="$emit('remove-todo', todo.id)"
    >
      Remove
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index : Number
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
