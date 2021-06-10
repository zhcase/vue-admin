import { sortArray } from '../utils';
/**
 * @description 过滤路由产生菜单所需要
 * @param router 路由数组
 */
export function filterRouter(router: any) {
  let menu = [];
  for (let i = 0; i < router.length; i++) {
    // console.log(router[i]);
    // menu.push(router[i].hidden)
    if (!router[i].hidden) {
      menu.push((router as any)[i]);
    }
  }
  console.log(sortArray(menu, 'orderNo'));

  //   console.log(menu.sort(compare('orderNo')));

  return menu;
}

function compare(arr, property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  };
}
