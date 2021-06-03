/*
 * @Author: zeHua
 * @Date: 2021-05-19 17:55:48
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-02 11:10:23
 * @FilePath: /vue-admin/src/router/index.ts
 */
import { createWebHistory, RouteRecordRaw } from 'vue-router';


import { createRouter,createWebHashHistory } from 'vue-router';
import { basicRoutes, LoginRoute } from './routers/index';

console.log(basicRoutes);


const routes = [
    { path: '/',name:'Login', component: ()=>import('/@/views/sys/login/Login.vue') },
  ]
// app router

const router=createRouter({
    // history:createWebHashHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes:(basicRoutes as any)
})


export default router;