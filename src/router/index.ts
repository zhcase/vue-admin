/*
 * @Author: zeHua
 * @Date: 2021-05-19 17:55:48
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 11:10:23
 * @FilePath: /vue-admin/src/router/index.ts
 */
import { createWebHistory, RouteRecordRaw } from 'vue-router';


import { createRouter,createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routers/index';



// app router
console.log(basicRoutes);

const router=createRouter({
    // history:createWebHashHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes:(basicRoutes as any),
    scrollBehavior: () => ({ left: 0, top: 0 }),

})

export function resetRouter(){
  router.getRoutes().forEach((route) => {
    console.log(route);
    
  }
  )
}


export default router;