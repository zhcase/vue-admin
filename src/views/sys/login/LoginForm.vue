<!--
 * @Author: zeHua
 * @Date: 2021-05-31 10:21:05
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 14:45:09
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
import { ElInput, ElFormItem, ElButton } from 'element-plus';
// import { useUserStore } from '/@/store/modules/user';
import { useMessage } from '/@/hooks/web/useMessage';
import { loginApi } from '/@/api/sys/user';

export default defineComponent({
  name: 'LoginForm',
  components: {
    ElInput,
    ElFormItem,
    ElButton,
  },
  setup() {
    // const userStore = useUserStore();
    const formData = reactive({
      username: 'vben',
      password: '123456',
    });
    // 登陆提交
    async function handleLogin() {
      let result = await loginApi(formData);
      console.log(result);

      // const { createNotify } = useMessage();
      // createNotify({}, 'sucess');
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