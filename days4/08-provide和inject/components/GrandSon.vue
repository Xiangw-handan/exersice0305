<template>
  <div class="grandSon">
    我是GrandSon
    {{ color }}-{{ userInfo.name }}-{{ userInfo.age }}
  </div>
</template>

<script>
//接收provide的数据
export default {
  inject: ["color", "userInfo"],
};
</script>

<style scoped>
.grandSon {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 100px;
}
</style>