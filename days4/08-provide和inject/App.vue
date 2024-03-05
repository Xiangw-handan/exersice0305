<template>
  <section id="add">
    我是APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </section>
</template>
<script>
import SonA from "./components/BaseA.vue";
import SonB from "./components/BaseB.vue";
export default {
  //给inject所在组件传递数据
  provide() {
    return {
      // 简单类型 是非响应式的
      color: this.color,
      // 复杂类型 是响应式的
      userInfo: this.userInfo,
    };
  },
  data() {
    return {
      color: "pink",
      userInfo: {
        name: "zs",
        age: 18,
      },
    };
  },
  components: {
    SonA,
    SonB,
  },
  methods: {
    change() {
      this.color = "red";
      this.userInfo.name = "ls";
    },
  },
};
</script>
<style>
</style>
父传子 1.父组件添加变量 2.子组件 porps接收 3.子组件使用变量
子传父 1.子组件监听事件,$emit为父组件事件取名 2.父组件事件处理传过来的参数