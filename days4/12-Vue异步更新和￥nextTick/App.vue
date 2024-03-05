<template>
  <div class="app">
    <input type="text" />
    <button>按钮</button>
    <input ref="inp" type="text" v-if="isShow" />
    <button @click="handleShow">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {},
  methods: {
    handleShow() {
      this.isShow = true;
      //等DOM渲染完成执行，异步执行
      this.$nextTick(() => {
        this.$refs.inp.focus();
      });
    },
  },
};
</script>

<style>
</style>