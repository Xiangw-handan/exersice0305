<template>
  <section id="add">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="clear"></TodoFooter>
    <button ref="goback" @click="hisback($event)">Go back!</button>
  </section>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  name: "App",
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, name: "打篮球" },
        { id: 2, name: "看电影" },
        { id: 3, name: "逛街" },
      ],
    };
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("list", JSON.stringify(newVal));
      },
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    handleAdd(todoName) {
      this.list.unshift({
        id: +new Date(),
        name: todoName,
      });
    },
    handleDel(id) {
      console.log(id);
      this.list = this.list.filter((item) => item.id !== id);
    },
    clear() {
      this.list = [];
    },
    hisback(e) {
    console.log(this.$refs.goback);
    console.log(e);
    // console.log( window.history.back());
    },
    
  },
};
</script>
<style>
</style>
父传子 1.父组件添加变量 2.子组件 porps接收 3.子组件使用变量
子传父 1.子组件监听事件,$emit为父组件事件取名 2.父组件事件处理传过来的参数