<template>
  <div class="app">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
  </div>
</template>
<script>
import BaseOne from "./components/BaseOne.vue";
import BaseTwo from "./components/BaseTwo.vue";

export default {
  computed() {
    BaseOne, BaseTwo;
  },
};
</script>
<style>
</style>