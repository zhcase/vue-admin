<!--
 * @Author: zeHua
 * @Date: 2021-06-04 14:05:58
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-07 11:10:35
 * @FilePath: /vue-admin/src/components/Tabs/LayoutTab.vue
-->
<template>
  <div class="yd-layout-tabs">
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理"></el-tab-pane>
      <el-tab-pane label="配置管理"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
      <el-tab-pane label="定时任务补偿"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {},
});
</script>
