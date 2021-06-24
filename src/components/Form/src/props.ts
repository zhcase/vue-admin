/*
 * @Author: zeHua
 * @Date: 2021-06-23 17:39:20
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-23 17:47:23
 * @FilePath: /vue-admin/src/components/Form/src/props.ts
 */
import type { PropType } from 'vue';

export const basicProps = {
  schemas: {
    type: [Array] as PropType<any[]>,
    default: () => [],
  },
};
