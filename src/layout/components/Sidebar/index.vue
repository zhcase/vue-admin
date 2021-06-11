<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:54:38
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-08 14:30:10
 * @FilePath: /vue-admin/src/layout/components/Sidebar/index.vue
-->

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    background-color="#001528"
    text-color="#fff"
    :router="true"
    @close="handleClose"
  >
    <Logo :logo="logoUrl" :title="title" />
    <SiderbarItem :list="routerList" />
  </el-menu>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue';
import Logo from './Logo.vue';
import SiderbarItem from './SidebarItem.vue';
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from 'element-plus';
import { useRouter } from 'vue-router';
import { useRouterStore } from '/@/store/modules/router';
import logoUrl from '/@/assets/images/icon.png';
export default defineComponent({
  name: 'Sidebar',
  components: {
    Logo,
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    SiderbarItem,
  },

  setup() {
    const title = ref('元道后台管理系统');
    console.log(useRouter());
    const { ctx } = getCurrentInstance();
    console.log(ctx);
    const getRouterTree = useRouterStore();
    // console.log(getRouterTreee.getRouter);
    const routerList = getRouterTree.getRouter;
    console.log(routerList);
    const { getRoutes } = useRouter();
    console.log(getRoutes());
    return {
      logoUrl,
      title,
      routerList,
    };
  },
});
</script>


<style lang='scss' scoped>
</style>