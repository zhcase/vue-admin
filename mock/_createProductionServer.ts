/*
 * @Author: zeHua
 * @Date: 2021-05-28 00:17:32
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 14:16:36
 * @FilePath: /vue-admin/mock/_createProductionServer.ts
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
console.log(import.meta);

const modules = import.meta.globEager('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
