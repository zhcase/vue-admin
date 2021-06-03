<!--
 * @Author: zeHua
 * @Date: 2021-05-19 16:36:14
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 14:04:33
 * @FilePath: /vue-admin/src/App.vue
-->
<template>
  <router-view />
</template>

<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    console.log(useRouter());
  },
});
</script>

<style>
</style>