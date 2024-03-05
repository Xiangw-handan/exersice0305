<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    <!-- 2.父组件对子组件的信息进行监听 -->
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>
<script>
import Son from "./components/Son.vue";

export default {
  name: "App",
  data() {
    return {
      myTitle: "学前端, 就来黑马程序员",
    };
  },
  components: {
    Son,
  },
  methods: {
  // 3.提供处理函数, 提供逻辑
    handleChange(newTitle) {
      this.myTitle = newTitle;
    },
  },
};
</script>
<style>
</style>