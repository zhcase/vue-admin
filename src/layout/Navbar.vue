<template>
  <el-header class="yd-header">
    <!-- Hamburger open close-->
    <Hamburger @toggleClick="handleClick" style="text-align: right" />
    <div class="right-menu">
      <div class="avatar-container">
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
  </el-header>
</template>

<script>
import { defineComponent } from 'vue';
import Hamburger from '/@/components/Hamburger/index.vue';
export default defineComponent({
  components: {
    Hamburger,
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
  line-height: 50px;
  border-bottom: 1px solid #eee;
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .avatar-container {
      padding: 0 10px;
      line-height: 50px;
      .avatar-wrapper {
        position: relative;
        height: 50px;
        padding: 0 0 0 10px;
        padding-right: 10px;
        display: flex;
        overflow: hidden;
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
          height: 24px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>