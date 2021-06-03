<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:54:38
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 15:09:24
 * @FilePath: /vue-admin/src/layout/components/Sidebar/index.vue
-->

<template>
  <el-aside width="210px"
    ><el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="#001528"
      text-color="#fff"
      @close="handleClose"
    >
      <Logo :logo="logoUrl" :title="title" />
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu></el-aside
  >
</template>

<script>
import { defineComponent, ref } from 'vue';
import Logo from './Logo.vue';
import logoUrl from '/@/assets/images/icon.png';
export default defineComponent({
  components: {
    Logo,
  },

  setup() {
    const title = ref('元道后台管理系统');

    return {
      logoUrl,
      title,
    };
  },
});
</script>


<style lang='scss' scoped>
.el-aside {
  background-color: #001528;
  overflow: hidden;
  .el-menu-item.is-active {
    background-color: #0060b9 !important;
    color: #fff !important;
  }
  .el-menu {
    border-right: none;
  }
}
</style>