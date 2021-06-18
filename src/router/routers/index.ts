/*
 * @Author: zeHua
 * @Date: 2021-05-20 14:27:47
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 11:36:11
 * @FilePath: /vue-admin/src/router/routers/index.ts
 */

const modules = import.meta.globEager('./modules/**/*.ts');
let routeModuleList: any = [];
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  hidden: true,
  component: () => import('/@/views/sys/login/Login.vue'),
  // meta: {
  //   title: t('routes.basic.login'),
  // },
};

export const LayoutRoute = {
  path: '/',
  name: 'Home',
  hidden: true,
  // component: () => import('/@/layout/index.vue'),
  redirect: '/dashboard',
};

export const basicRoutes = [LoginRoute, LayoutRoute, ...routeModuleList];
