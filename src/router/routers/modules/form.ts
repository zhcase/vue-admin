/*
 * @Author: zeHua
 * @Date: 2021-06-15 14:14:46
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-18 15:58:09
 * @FilePath: /vue-admin/src/router/routers/modules/form.ts
 */
// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const form = {
  path: '/form',
  name: 'Form',
  orderNo: 2,
  redirect: '/form/analysis',
  meta: {
    icon: 'el-icon-document',
    title: '表单',
  },
  children: [
    {
      path: 'formanalysis',
      name: 'formanalysis',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        title: '基础表单',
      },
    },
  ],
};

export default form;
