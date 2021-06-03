<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:23:12
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 15:08:23
 * @FilePath: /vue-admin/src/layout/index.vue
-->
<template>
  <div class="app-wrapper">
    <el-container>
      <Sidebar></Sidebar>
      <el-container>
        <Navbar />
        <!-- <el-header class="yd-header">Header</el-header> -->

        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './Navbar.vue';
export default defineComponent({
  components: {
    Sidebar,
    Navbar,
  },
  setup() {},
});
</script>


<style scoped lang='scss'>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    width: 100%;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>