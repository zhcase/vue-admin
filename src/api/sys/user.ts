/*
 * @Author: zeHua
 * @Date: 2021-06-02 10:05:41
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-21 14:31:50
 * @FilePath: /vue-admin/src/api/sys/user.ts
 */

import request from '/@/utils/http/axios';

export function loginApi(data) {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
}
