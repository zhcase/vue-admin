import { sortArray } from '../utils';
import routers from 'vue-router';
/**
 * @description 过滤路由产生菜单所需要
 * @param router 路由数组
 * @param routerHistory 路由记录
 */
export function filterRouter(router: any, routerHistory) {
  let menu = [];

  for (let i = 0; i < router.length; i++) {
    if (!router[i].hidden) {
      menu.push((router as any)[i]);
    }
  }

  // 对应path

  return menu;
}

function compare(arr, property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  };
}

export function setPathHistory(routerHistory) {
  let newHistory: any = [];
  for (let i = 0; i < routerHistory.length; i++) {
    console.log(routerHistory[i]);
    newHistory[routerHistory[i].name] = routerHistory[i];
  }
  return newHistory;
}
