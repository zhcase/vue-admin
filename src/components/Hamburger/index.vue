<!--
 * @Author: zeHua
 * @Date: 2021-06-02 16:33:13
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-04 11:41:26
 * @FilePath: /vue-admin/src/components/Hamburger/index.vue
-->
<template>
  <div class="yd-hamburger" @click="toggleClick">
    <i class="el-icon-s-fold"></i>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, context) {
    console.log(context);
    function toggleClick() {
      //   this.$emit
      context.emit('toggleClick');
    }
    return {
      toggleClick,
    };
  },
});
</script>


<style lang='scss' scoped>
.yd-hamburger {
  padding: 5px 10px 0 10px;
  display: inline-block;
  i {
    cursor: pointer;
    font-size: 18px;
    font-weight: 100;
  }
}
</style>