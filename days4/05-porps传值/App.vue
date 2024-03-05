<template>
  <div class="app">
    <Son
      @changCount="handCount"
      :username="username"
      :w="width"
      :count="count"
    ></Son>
  </div>
</template>
<script>
import Son from "./components/Son.vue";
export default {
  // 1. 自己的数据随便改
  // data () {
  //   return {
  //     count: 100,
  //   }
  // },
  //2. 外部传来的数据 不能随便修改
  name: "App",
  data() {
    return {
      count: 888,
      username: "小花",
      width: 60,
    };
  },
  components: {
    Son,
  },
  methods: {
    handCount(newCount) {
      console.log(newCount);
      this.count = newCount;
    },
  },
};
</script>
<style>
</style>
父传子 1.父组件添加变量 2.子组件 porps接收 3.子组件使用变量
子传父 1.子组件监听事件,$emit为父组件事件取名 2.父组件事件处理传过来的参数