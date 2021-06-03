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
  padding: 1px 10px 0 10px;
  display: inline-block;
  i {
    cursor: pointer;
    font-size: 18px;
    font-weight: 100;
  }
}
</style>