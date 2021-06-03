<!--
 * @Author: zeHua
 * @Date: 2021-05-31 10:21:05
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 10:59:59
 * @FilePath: /vue-admin/src/views/sys/login/LoginForm.vue
-->
<template>
  <el-form ref="form" :model="formData" class="p-1">
    <el-form-item>
      <el-input placeholder="账号" v-model="formData.account"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="密码" v-model="formData.password" type="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleLogin" class="ptw-100" style="width: 100%"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
// import { useUserStore } from '/@/store/modules/user';
// import {} from ''
export default defineComponent({
  name: 'LoginForm',
  setup() {
    // const userStore = useUserStore();
    const formData = reactive({
      account: 'admin',
      password: 'admin',
    });
    // 登陆提交
    async function handleLogin() {
      // const userInfo = await userStore.login();
    }

    return {
      formData,
      handleLogin,
    };
  },
});
</script>

<style scoped lang="scss">
</style>