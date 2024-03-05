<template>
  <div class="app">
    <!-- <BaseSelect :selectId="selectId" @changeCity="handleCity"></BaseSelect> -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    // handleCity(val) {
    //   console.log(val);
    //   this.selectId = val;
    // },
  },
};
</script>

<style>
</style>