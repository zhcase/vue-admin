<!--
 * @Author: zeHua
 * @Date: 2021-06-02 14:07:26
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 17:34:31
 * @FilePath: /vue-admin/src/layout/components/Sidebar/Logo.vue
-->
<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link key="collapse" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
      <!-- <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link> -->
    </transition>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    logo: String,
    title: String,
  },
  setup(props) {},
});
</script>

<style lang="scss" scoped>
@import url('/@/styles/variables.scss');
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;
  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }
    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 16px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>