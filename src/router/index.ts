/*
 * @Author: zeHua
 * @Date: 2021-05-19 17:55:48
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 11:10:23
 * @FilePath: /vue-admin/src/router/index.ts
 */
import { useRouterStoreWidthOut } from '/@/store/modules/router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routers/index';
import { filterRouter } from '/@/utils/router/filter';
// console.log(routerStore);

// app router
const routerStore = useRouterStoreWidthOut();

const router = createRouter({
  // history:createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: basicRoutes as any,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

const Menu = filterRouter(basicRoutes, router.getRoutes());
routerStore.setRouter(Menu);

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    console.log(route);
  });
}

export default router;
