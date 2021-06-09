<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:23:12
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-08 14:56:39
 * @FilePath: /vue-admin/src/layout/index.vue
-->
<template>
  <div class="app-wrapper">
    <el-container>
      <!-- side Menu -->
      <el-aside class="app-wrapper__sidebar">
        <Sidebar></Sidebar>
      </el-aside>
      <!-- right content -->
      <el-container>
        <!-- navbar -->
        <el-header class="yd-header">
          <Navbar />
        </el-header>
        <LayoutTab />
        <!-- page view -->
        <el-main>Ma12223232in</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { ElHeader, ElContainer, ElMain } from 'element-plus';

import Sidebar from './components/Sidebar/index.vue';
import Navbar from './Navbar.vue';
import LayoutTab from '/@/components/Tabs/LayoutTab.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    ElContainer,
    ElHeader,
    LayoutTab,
    ElMain,
  },
  setup() {},
});
</script>


<style scoped lang='scss'>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &__sidebar {
    min-width: 210px;
    background-color: #001528;
    overflow: hidden;
  }
  .el-header {
    padding: 0;
  }
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