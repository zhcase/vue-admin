<!--
 * @Author: zeHua
 * @Date: 2021-06-04 14:05:58
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-18 16:50:51
 * @FilePath: /vue-admin/src/components/Tabs/LayoutTab.vue
-->
<template>
  <div class="yd-layout-tabs">
    <el-tabs
      type="border-card"
      v-model="layoutTabsValue"
      @tab-click="handleTabClick"
      @tab-remove="handleRemoveTab"
    >
      <el-tab-pane
        :label="item.meta.title"
        :name="item.path"
        :closable="!item.meta.breadcrumb"
        v-for="(item, index) of tagViewList.value"
        :key="index"
      >
        {{ item.meta.title }}
      </el-tab-pane>
      <!-- <el-tab-pane label="配置管理"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
      <el-tab-pane label="定时任务补偿"></el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import { defineComponent, reactive, watch, ref } from 'vue';
import { ElTabs, ElTabPane } from 'element-plus';
import { useRouter } from 'vue-router';
import { useTagsViewStore } from '/@/store/modules/tagsView';
export default defineComponent({
  name: 'LayoutTab',
  components: {
    ElTabs,
    ElTabPane,
  },
  setup() {
    let layoutTabsValue = ref('');
    const { getRoutes, currentRoute, push } = useRouter();
    const TAGSVIESTORE = useTagsViewStore();
    const tagViewList = reactive({ value: [] });
    layoutTabsValue.value = getRoutes()[0].path;

    // 添加固定tags
    for (let i = 0; i < getRoutes().length; i++) {
      if (getRoutes()[i].meta.affix) {
        addTagsView(getRoutes()[i]);
      }
    }
    addTagsView(currentRoute.value);

    /**
     *  是否选中路由
     */
    function isActive(path) {
      return path === currentRoute.value.path;
    }

    function toLastView(visitedViews, view) {
      console.log(visitedViews);
      const latestView = visitedViews.slice(-1)[0];
      console.log(latestView.path);
      if (latestView) {
        push(latestView.path);
      } else {
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath });
        } else {
          this.$router.push('/');
        }
      }
    }
    /**
     * watch router
     */
    watch(currentRoute, (newVal, oldVal) => {
      addTagsView(newVal);
    });
    /**
     * add tags
     */
    function addTagsView(newVal) {
      layoutTabsValue.value = newVal.path;
      TAGSVIESTORE.addVisitedView(newVal);
      tagViewList.value = TAGSVIESTORE.getVisitedViews;
    }
    /**
     *  click tags
     */
    function handleTabClick(tab, event) {
      push(tab.props.name);
    }
    /**
     * tags remove
     */
    function handleRemoveTab(val) {
      let viewList = TAGSVIESTORE.getVisitedViews;
      TAGSVIESTORE.delVisiteView(val);

      if (isActive(val)) {
        toLastView(viewList, val);
      }
      console.log(TAGSVIESTORE.getVisitedViews);
    }

    return {
      tagViewList,
      layoutTabsValue,
      handleTabClick,
      handleRemoveTab,
    };
  },
});
</script>


<style lang='less' scoped>
</style>
