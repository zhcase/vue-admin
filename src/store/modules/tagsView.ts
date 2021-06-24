/*
 * @Author: zeHua
 * @Date: 2021-06-17 17:36:53
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-18 14:06:03
 * @FilePath: /vue-admin/src/store/modules/tagsView.ts
 */
import { defineStore } from 'pinia';
import { store } from '/@/store/index';
export const useTagsViewStore = defineStore({
  id: 'app-tagsView',
  state: () => ({
    visitedViews: [],
    cachedViews: [],
  }),
  getters: {
    getVisitedViews() {
      return this.visitedViews;
    },
  },
  actions: {
    addVisitedView(view) {
      if (this.visitedViews.some((v: any) => v.path === view.path)) return;
      this.visitedViews.push(view);
    },
    delVisiteView(val) {
      for (const [i, v] of this.visitedViews.entries()) {
        if (v.path === val) {
          this.visitedViews.splice(i, 1);
          break;
        }
      }
    },
  },
});
export function useTagsViewStoreWidthOut() {
  return useTagsViewStore(store);
}
