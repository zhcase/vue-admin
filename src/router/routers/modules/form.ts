/*
 * @Author: zeHua
 * @Date: 2021-06-15 14:14:46
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-23 14:04:24
 * @FilePath: /vue-admin/src/router/routers/modules/form.ts
 */
// import type { AppRouteModule } from '/@/router/types';

import { LAYOUT, getParentLayout } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const form = {
  path: '/comp',
  name: 'Comp',
  orderNo: 2,
  component: () => import('/@/layout/index.vue'),
  redirect: '/comp/basic',
  meta: {
    icon: 'el-icon-s-finance',
    title: '组件',
  },
  children: [
    {
      path: 'basic',
      name: 'BasicDemo',
      component: () => import('/@/views/demo/comp/button/index.vue'),
      meta: {
        title: '基础组件',
      },
    },
    {
      path: 'form',
      name: 'Form',
      component: () => import('/@/views/demo/comp/form/index.vue'),
      redirect: '/comp/form/basic',
      // component: () => import('/@/layout/index.vue'),
      meta: {
        title: '表单',
      },
      children: [
        {
          path: 'basic',
          name: 'Basic',
          component: () => import('/@/views/demo/comp/form/baseForm/index.vue'),
          meta: {
            title: '基础表单',
          },
        },
      ],
    },
  ],
};

export default form;
