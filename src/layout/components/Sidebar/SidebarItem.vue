<template>
  <template v-for="(items, indexs) of list" :key="indexs">
    <el-submenu :index="getPathHistory(items.name)" v-if="items.children">
      <template #title v-if="items.meta">
        <i :class="items.meta.icon"></i>
        <span>{{ items.meta.title }}</span>
      </template>
      <template v-if="items.children">
        <SidebarItem :list="items.children" />
      </template>
    </el-submenu>
    <template v-else>
      <el-menu-item :index="getPathHistory(items.name)" v-if="!items.hidden">
        <i :class="items.meta.icon"></i>
        <template #title>{{ items.meta.title }}</template>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ElMenuItem, ElSubmenu } from 'element-plus';
import { useRouter } from 'vue-router';
import { setPathHistory } from '/@/utils/router/filter.ts';
export default defineComponent({
  name: 'SidebarItem',
  components: {
    ElMenuItem,
    ElSubmenu,
  },
  props: {
    list: Array,
  },
  setup(props) {
    const { list } = reactive(props);
    const { getRoutes } = useRouter();
    const pathHistory = setPathHistory(getRoutes());
    const getPathHistory = (name) => {
      return pathHistory[name].path;
    };

    return {
      list,
      getPathHistory,
    };
  },
});
</script>


<style scoped>
.el-menu-item.is-active {
  background-color: #0060b9 !important;
  color: #fff !important;
}
.el-menu {
  /* border-right: none; */
}
</style>