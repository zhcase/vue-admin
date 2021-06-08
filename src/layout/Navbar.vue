<!--
 * @Author: zeHua
 * @Date: 2021-06-02 11:26:35
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-07 10:26:46
 * @FilePath: /vue-admin/src/layout/Navbar.vue
-->
<template>
  <el-header class="yd-header">
    <!-- Hamburger open close-->
    <div class="left-menu">
      <Hamburger @toggleClick="handleClick" style="text-align: right" />
      <LayoutTrigger />
    </div>
    <div class="right-menu">
      <div class="avatar-container">
        <div class="avatart-dropdown">
          <el-dropdown>
            <span class="el-dropdown-link avatar-wrapper">
              <img
                src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=335283599,2984292118&fm=26&gp=0.jpg"
              />
              <span>管理员</span>
              <!-- 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
import { defineComponent } from 'vue';
import Hamburger from '/@/components/Hamburger/index.vue';
import LayoutTrigger from '/@/components/Breadcrumb/LayoutTrigger.vue';
export default defineComponent({
  name: 'Navbar',
  components: {
    Hamburger,
    LayoutTrigger,
  },
  setup() {
    function handleClick() {
      console.log(23232332);
    }

    return {
      handleClick,
    };
  },
});
</script>

<style lang='scss' scoped>
.yd-header {
  height: 50px !important;
  width: 100%;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  line-height: 50px;

  border-bottom: 1px solid #eee;
  .left-menu {
    display: flex;
    align-items: center;
  }
  .right-menu {
    float: right;
    height: 100%;
    display: flex;
    /* min-width: 180px; */
    align-items: center;
    line-height: 50px;
    .avatar-container {
      padding: 0 10px;
      line-height: 50px;
      .avatart-dropdown {
        display: flex;
      }
      .avatar-wrapper {
        position: relative;
        padding: 0 0 0 10px;
        padding-right: 10px;
        /* display: flex; */
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        align-items: center;
        span {
          color: rgba(0, 0, 0, 0.85);
        }
        img {
          width: 24px;
          vertical-align: sub;
          border-radius: 50%;
          align-items: center;

          height: 24px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>