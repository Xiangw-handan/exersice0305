<template>
  <div>
    <button @click="addCount">-</button>
    <span>{{ count }}</span>
    <button @click="reduceCount">+</button>
    <span>姓名: {{ username }}</span>
    <progress :value="w" :max="100"></progress>
    <span>{{ w + "%" }}</span>
  </div>
</template>
<script>
export default {
  name: "Son-Child",
  data() {
    return {};
  },
  // 1.基础写法
  // porps:{
  // w:Number,
  // }
  // 2.完整写法(类型,默认值,非空,自定义校验)
  props: {
    count: Number,
    username: String,
    w: {
      type: Number,
      default: 0,
      validator(val) {
        console.log(val);
        return val < 100;
      },
    },
  },

  methods: {
    addCount() {
      this.$emit("changCount", this.count + 1);
    },
    reduceCount() {
      this.$emit("changCount", this.count - 1);
    },
  },
};
</script>
<style>
</style>