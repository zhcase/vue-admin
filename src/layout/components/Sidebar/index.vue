<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:54:38
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-18 17:40:39
 * @FilePath: /vue-admin/src/layout/components/Sidebar/index.vue
-->

<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    background-color="#001528"
    text-color="#fff"
    :collapse="sideBarState"
    :router="true"
    @close="handleClose"
  >
    <Logo :logo="logoAddress" :title="title" />
    <SiderbarItem :list="routerList" />
  </el-menu>
</template>

<script>
import { defineComponent, ref, getCurrentInstance, watchEffect, watch } from 'vue';
import { useRouter } from 'vue-router';
import Logo from './Logo.vue';
import SiderbarItem from './SidebarItem.vue';
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from 'element-plus';
import { useRouterStore } from '/@/store/modules/router';
import { useSettingStore } from '/@/store/modules/setting.ts';
import logoAddress from '/@/assets/images/icon.png';
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
    const sideBarState = ref(false);
    const defaultActive = ref('');
    const { currentRoute } = useRouter();
    const { ctx } = getCurrentInstance();
    const getRouterTree = useRouterStore();
    const getSideBarState = useSettingStore();
    const routerList = getRouterTree.getRouter;
    console.log(currentRoute.value.path);
    defaultActive.value = currentRoute.value.path;

    watchEffect(() => {
      sideBarState.value = getSideBarState.getSidebarLogoState;
    });

    watch(currentRoute, (val) => {
      defaultActive.value = val.path;
    });
    console.log(defaultActive.value);
    return {
      logoUrl,
      title,
      routerList,
      sideBarState,
      logoAddress,
      defaultActive,
    };
  },
});
</script>


<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>