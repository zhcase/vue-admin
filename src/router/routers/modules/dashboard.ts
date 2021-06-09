// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/analysis',
  meta: {
    icon: 'ion:grid-outline',
    title: '工作台',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        affix: true,
        title:'控制天',
      },
    }
  ]
};

export default dashboard;