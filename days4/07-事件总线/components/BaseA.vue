<template>
  <div class="base-a">
    我是A组件（接受方）
    <p>{{ msg }}</p>
  </div>
</template>
<script>
//引入总线
import Bus from "../utils/EventBus";
export default {
  data() {
    return {
      msg: "",
    };
  },
  //可以调用Bus.$on 接收Bus.$emit信息
  created() {
    Bus.$on("sendMsg", (msg) => {
      this.msg = msg;
    });
  },
};
</script>
<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>