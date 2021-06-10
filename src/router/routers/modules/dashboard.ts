// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
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
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        affix: true,
        title: '工作台',
      },
    },
  ],
};

export default dashboard;
