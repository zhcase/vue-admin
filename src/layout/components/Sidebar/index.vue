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
    @close="handleClose"
  >
    <Logo :logo="logoUrl" :title="title" />
    <template v-for="(items, indexs) of routerList" :key="indexs">
      <el-submenu :index="items.path" v-if="items.children">
        <template #title v-if="items.meta">
          <i :class="items.meta.icon"></i>
          <span>{{ items.meta.title }}</span>
        </template>
        <template v-if="items.children">
          <el-menu-item-group>
            <template #title></template>
            <el-menu-item :index="item.path" v-for="(item, index) of items.children" :key="index">
              {{ item.meta.title }}</el-menu-item
            >
          </el-menu-item-group>
        </template>
      </el-submenu>
      <el-menu-item :index="items.path" v-else>
        <i :class="items.meta.icon"></i>
        <template #title>{{ items.meta.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue';
import Logo from './Logo.vue';
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
    // const {  } = useRouter();
    // console.log(getRoutes());
    return {
      logoUrl,
      title,
      routerList,
    };
  },
});
</script>


<style lang='scss' scoped>
.el-menu-item.is-active {
  background-color: #0060b9 !important;
  color: #fff !important;
}
.el-menu {
  border-right: none;
}
</style>