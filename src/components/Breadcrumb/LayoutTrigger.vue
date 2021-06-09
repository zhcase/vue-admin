<!--
 * @Author: zeHua
 * @Date: 2021-06-04 11:22:08
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-08 14:47:28
 * @FilePath: /vue-admin/src/components/Breadcrumb/LayoutTrigger.vue
-->
<template>
  <div class="layout-trigger">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
export default defineComponent({
  components: { ElBreadcrumb, ElBreadcrumbItem },
});
</script>

<style lang='scss' scoped>
.layout-trigger {
  display: inline-block;
  padding: 0 10px;
  /* height: 50px; */
}
</style>
