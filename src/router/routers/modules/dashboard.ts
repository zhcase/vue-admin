/*
 * @Author: zeHua
 * @Date: 2021-06-15 14:14:46
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 17:38:58
 * @FilePath: /vue-admin/src/router/routers/modules/dashboard.ts
 */
// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';
// import { LAYOUT } from '/@/router/constant';

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('/@/layout/index.vue'),
  orderNo: 1,
  redirect: '/dashboard/analysis',
  meta: {
    icon: 'el-icon-menu',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/sys/dashboard/analysis/index.vue'),
      meta: {
        affix: true,
        title: '分析页',
        breadcrumb: true,
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/sys/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
      },
    },
  ],
};

export default dashboard;
