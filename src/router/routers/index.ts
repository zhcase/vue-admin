export const LoginRoute = {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/Login.vue'),
    // meta: {
    //   title: t('routes.basic.login'),
    // },
  };

  export const basicRoutes= { LoginRoute }