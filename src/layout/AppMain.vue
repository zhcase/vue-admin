<!--
 * @Author: zeHua
 * @Date: 2021-06-17 15:13:25
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 17:37:57
 * @FilePath: /vue-admin/src/layout/AppMain.vue
-->
<template>
  <div>
    <!-- <transition mode="out-in"> -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- </transition> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>


<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: 0.5s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: 0.5s;
}
</style>