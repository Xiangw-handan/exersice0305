<template>
  <div class="app">
    <button @click="openDialog">退出按钮</button>
    <!-- isShow.sync  => :isShow="isShow" @update:isShow="isShow=$event" -->
    <!-- 事件绑定语法糖 -->
    <BaseDialog :isShow.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue";
export default {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BaseDialog,
  },
  methods: {
   openDialog() {
      this.isShow = true
      // console.log(document.querySelectorAll('.box')); 
    },
  },
};
</script>
<style scoped>

</style>