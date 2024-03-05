<template>
  <div class="SonA">
    我是SonA组件
    <GrandSon></GrandSon>
  </div>
</template>
<script>
//引入总线GrandSonzhu组件
//同级组件引入
import GrandSon from "../components/GrandSon.vue";
export default {
  components: {
    GrandSon,
  },
};
</script>
<style scoped>
.SonA {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 200px;
}
</style>