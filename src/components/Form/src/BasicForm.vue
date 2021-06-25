<!--
 * @Author: zeHua
 * @Date: 2021-06-23 16:01:39
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-25 10:47:00
 * @FilePath: /vue-admin/src/components/Form/src/BasicForm.vue
-->
<template>
  <div>2323 </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { basicProps } from './props';
export default defineComponent({
  props: basicProps,
  setup(props) {
    console.log(props);
    const getProps = computed(() => {
      return { ...props };
    });
    console.log(getProps);
  },
});
</script>
