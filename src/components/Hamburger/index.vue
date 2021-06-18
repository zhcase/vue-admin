<!--
 * @Author: zeHua
 * @Date: 2021-06-02 16:33:13
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-18 16:06:58
 * @FilePath: /vue-admin/src/components/Hamburger/index.vue
-->
<template>
  <div class="yd-hamburger" @click="toggleClick">
    <i :class="{ 'el-icon-s-fold': !isCollapseState, 'el-icon-s-unfold': isCollapseState }"></i>
  </div>
</template>
<script>
import { defineComponent, reactive, watchEffect, ref } from 'vue';

export default defineComponent({
  name: 'Hamburger',
  props: {
    isCollapse: Boolean,
  },
  setup(props, context) {
    const isCollapseState = ref(false);

    function toggleClick() {
      context.emit('toggleClick');
    }
    watchEffect(() => {
      isCollapseState.value = props.isCollapse;
    });

    return {
      toggleClick,
      isCollapseState,
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