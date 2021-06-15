import { defineStore } from 'pinia';
import { store } from '/@/store/index';
export const useSettingStore = defineStore({
  id: 'app-setting',
  state: () => ({
    sidebarLogo: false, //左侧收缩状态
  }),
  getters: {
    getSidebarLogoState() {
      return this.sidebarLogo;
    },
  },
  actions: {
    setSidebarLogo(state: boolean) {
      this.sidebarLogo = state;
    },
  },
});

export function useSettingStoreWidthOut() {
  return useSettingStore(store);
}
