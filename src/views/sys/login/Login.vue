<!--
 * @Author: zeHua
 * @Date: 2021-05-21 14:23:29
 * @LastEditors: zeHua
 * @LastEditTime: 2021-05-24 17:02:01
 * @FilePath: /admin-base/vue-admin/src/views/sys/login/Login.vue
-->
<template>
  <!-- login -->
  <div class="login">
    <div class="login__main">
      <div class="login__main__container">
        <h2>元道后台管理系统</h2>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from './LoginForm.vue';
import { loginApi } from '/@/api/sys/user';
export default defineComponent({
  components: {
    LoginForm,
  },
});
</script>

<style lang='scss' scoped>
.login {
  min-height: 100%;
  width: 100%;

  background-color: aqua;
  height: 100%;
  background-color: #f0f2f5;
  overflow: hidden;
  &__main {
    width: 100%;
    background: url('@/assets/images/body.8aa7c4a6.svg');
    min-height: 100%;
    &__container {
      height: 550px;
      top: 50%;
      position: absolute;
      left: 50%;
      border-radius: 10px;
      max-width: 500px;
      width: 100%;

      /* background-color: #fff; */

      transform: translate(-50%, -50%);
      h2 {
        text-align: center;
      }
    }
  }
}
</style>