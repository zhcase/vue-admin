<!--
 * @Author: zeHua
 * @Date: 2021-06-21 17:20:28
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-23 11:01:39
 * @FilePath: /vue-admin/src/views/demo/comp/button/index.vue
-->
<template>
  <div>基础组件 </div>

  <div>
    <!-- <h3> success </h3>
    <el-button type="success">成功</el-button><el-button type="success" disabled>禁用</el-button>
    <el-button type="success" loading>loading</el-button>
    <el-button type="success" plain disabled>成功按钮</el-button>
    <el-button type="text" color>文字按钮</el-button>
    <el-button type="text" loading>文字按钮</el-button> -->
  </div>
  <div class="mtb-1">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
  <div class="mtb-1">
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
  </div>
  <div class="mtb-1">
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
  </div>
  <div class="mtb-1">
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
  <div class="mtb-1">
    <h3>禁用按钮</h3>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
  </div>
  <div class="mtb-1">
    <h3>文字按钮</h3>
    <el-row>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
    </el-row>
  </div>
  <div class="mtb-1">
    <h3>加载按钮</h3>
    <el-row>
      <el-button type="primary" loading>加载按钮</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
export default defineComponent({
  components: {
    ElButton,
  },
  setup() {},
});
</script>
