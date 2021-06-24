/*
 * @Author: zeHua
 * @Date: 2021-06-11 11:14:35
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-23 11:36:08
 * @FilePath: /vue-admin/src/router/constant.ts
 */
export const LAYOUT = () => import('/@/layout/index.vue');
export const PARENT_LAYOUT_NAME = 'ParentLayout';

/**
 * @description: parent-layout
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};
