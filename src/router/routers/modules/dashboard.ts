// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
console.log(LAYOUT);

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: import('/@/layout/index.vue'),
  orderNo: 1,
  // redirect: '/dashboard/analysis',
  meta: {
    icon: 'el-icon-menu',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: import('/@/views/sys/dashboard/index.vue'),
      meta: {
        affix: true,
        title: '工作台',
      },
    },
    {
      path: 'analysis2',
      name: 'Analysis2',
      component: () => import('/@/views/sys/dashboard/index.vue'),
      meta: {
        affix: true,
        title: '工作台1',
      },
      children: [
        {
          path: 'analysis1',
          name: 'Analysis1',
          component: () => import('/@/views/sys/dashboard/index.vue'),
          meta: {
            affix: true,
            title: '工作1',
          },
        },
      ],
    },
  ],
};

export default dashboard;
