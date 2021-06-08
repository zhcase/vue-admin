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
      <Sidebar></Sidebar>
      <el-container>
        <Navbar />
        <!-- <div style="height: 50px">23423孙伟伟无</div> -->
        <!-- <el-header class="yd-header">Header</el-header> -->
        <LayoutTab />

        <!-- 23232323 -->
        <el-main>Ma12223232in</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './Navbar.vue';
import LayoutTab from '/@/components/Tabs/LayoutTab.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    LayoutTab,
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