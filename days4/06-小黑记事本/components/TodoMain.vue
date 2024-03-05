<template>
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in list" :key="item.id">
        <div class="view">
          <span class="index">{{ index + 1 }}.</span>
          <label for="">{{ item.name }}</label>
          <button class="destroy" @click="handleDel(item.id)">x</button>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleDel(id) {
      this.$emit("del",id);
    },
  },
};
</script>
<style>
</style>