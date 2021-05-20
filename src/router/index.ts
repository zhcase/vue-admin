/*
 * @Author: zeHua
 * @Date: 2021-05-19 17:55:48
 * @LastEditors: zeHua
 * @LastEditTime: 2021-05-20 14:08:00
 * @FilePath: /admin-base/vue-admin/src/router/index.ts
 */
import { RouteRecordRaw } from 'vue-router';


import {createRouter,createWebHashHistory} from 'vue-router';
import { basicRoutes, LoginRoute } from './routes';


// app router

const router=createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes: (basicRoutes as unknown) as RouteRecordRaw[],
    strict:true,
    
})