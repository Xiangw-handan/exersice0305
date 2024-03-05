<template>
  <footer class="footer">
    <span class="todo-count">
      合计:<strong>{{ list.length }}</strong>
    </span>
    <button class="clear-completed" @click="clear">清空任务</button>
  </footer>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },

  methods: {
  clear(){
  this.$emit('clear')}},
};
</script>
<style>
</style>