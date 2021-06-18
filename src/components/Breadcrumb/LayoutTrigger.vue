<!--
 * @Author: zeHua
 * @Date: 2021-06-04 11:22:08
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-18 16:06:45
 * @FilePath: /vue-admin/src/components/Breadcrumb/LayoutTrigger.vue
-->
<template>
  <div class="layout-trigger">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) of levelList.value"
        :key="index"
        :to="{ path: index === levelList.length - 1 ? '' : item.path }"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, watchEffect } from 'vue';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { ElBreadcrumb, ElBreadcrumbItem },
  setup() {
    let levelList = reactive({ value: [] });
    let matched = reactive({ value: [] });
    const { currentRoute } = useRouter();

    watchEffect(() => {
      /**
       * any
       */
      matched.value = (currentRoute as any).value.matched.filter(
        (item) => item.meta && item.meta.title
      );
      levelList.value = matched.value.filter(
        (item: any) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    });
    return {
      levelList,
    };
  },
});
</script>

<style lang='scss' scoped>
.layout-trigger {
  display: inline-block;
  padding: 0 10px;
  /* height: 50px; */
}
</style>
