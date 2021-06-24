<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:23:12
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 17:36:31
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
        <el-header style="height: 50px">
          <Navbar />
        </el-header>
        <LayoutTab />
        <!-- page view -->
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { ElHeader, ElContainer, ElMain, ElAside } from 'element-plus';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './Navbar.vue';
import LayoutTab from '/@/components/Tabs/LayoutTab.vue';
import AppMain from './AppMain.vue';
export default defineComponent({
  name: 'Dashboard',
  components: {
    Sidebar,
    Navbar,
    ElContainer,
    ElHeader,
    ElAside,
    LayoutTab,
    ElMain,
    AppMain,
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
    /* width: 210px; */
    width: auto !important;
    background-color: #001528;
    /* overflow: hidden; */
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    padding: 0;
  }
  .el-main {
    background-color: #f0f2f5;
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