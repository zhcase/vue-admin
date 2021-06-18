/*
 * @Author: zeHua
 * @Date: 2021-06-10 10:27:50
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-10 11:03:45
 * @FilePath: /vue-admin/src/store/modules/router.ts
 */
import { defineStore } from 'pinia';
import { store } from '/@/store/';

export const useRouterStore = defineStore({
  id: 'app-router',
  /**type*/
  state: () => ({
    router: [],
  }),
  getters: {
    getRouter() {
      return this.router;
    },
  },
  actions: {
    setRouter(arr) {
      this.router = arr;
    },
  },
});

export function useRouterStoreWidthOut() {
  return useRouterStore(store);
}
