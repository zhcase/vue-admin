<!--
 * @Author: zeHua
 * @Date: 2021-05-19 16:36:14
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-04 11:11:08
 * @FilePath: /vue-admin/src/App.vue
-->
<template>
  <router-view />
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {},
  setup() {
    console.log(useRouter());
  },
});
</script>

<style>
</style>