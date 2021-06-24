<!--
 * @Author: zeHua
 * @Date: 2021-06-23 14:01:03
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-23 17:21:44
 * @FilePath: /vue-admin/src/views/demo/comp/form/baseForm/index.vue
-->
<template>
  <div><BasicForm :schemas="schemas" /> </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicForm } from '/@/components/Form';
const schemas = [
  {
    field: 'field',
    component: 'Input',
    label: '字段1',
    colProps: {
      span: 8,
    },
    defaultValue: '1',
    componentProps: {
      placeholder: '自定义placeholder',
      onChange: (e) => {
        console.log(e);
      },
    },
  },
];
export default defineComponent({
  components: {
    BasicForm,
  },
  setup() {
    return {
      schemas,
    };
  },
});
</script>
