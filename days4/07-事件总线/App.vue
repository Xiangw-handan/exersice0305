<template>
  <section id="add">
    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>
  </section>
</template>
<script>
import BaseA from "./components/BaseA.vue";
import BaseB from "./components/BaseB.vue";
import BaseC from "./components/BaseC.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    BaseA,
    BaseB,
    BaseC,
  },
  methods: {
  },
};
</script>
<style>
</style>
父传子 1.父组件添加变量 2.子组件 porps接收 3.子组件使用变量
子传父 1.子组件监听事件,$emit为父组件事件取名 2.父组件事件处理传过来的参数