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
        affix: true,
        title: '基础表单',
      },
    },
  ],
};

export default form;
