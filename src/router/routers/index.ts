/*
 * @Author: zeHua
 * @Date: 2021-05-20 14:27:47
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 11:36:11
 * @FilePath: /vue-admin/src/router/routers/index.ts
 */
export const LoginRoute = {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/Login.vue'),
    // meta: {
    //   title: t('routes.basic.login'),
    // },
  };

  export const LayoutRoute={
    path: '/',
    name: 'Home',
    component: () => import('/@/layout/index.vue'),
  }

  export const basicRoutes= [ LoginRoute,LayoutRoute ]