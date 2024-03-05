<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input
      placeholder="请输入任务"
      type="text"
      v-model="todoName"
      @keyup.enter="handleAdd"
      class="new-todo"
    />
    <button class="add" @click="handleAdd">添加任务</button>
  </header>
</template>
<script>
export default {
  data() {
    return { todoName: "" };
  },
  methods:{
  handleAdd(){
  this.$emit('add',this.todoName)
  this.todoName=''
  }
  }
};
</script>
<style>
</style>