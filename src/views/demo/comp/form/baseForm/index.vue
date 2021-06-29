<!--
 * @Author: zeHua
 * @Date: 2021-06-23 14:01:03
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-23 17:21:44
 * @FilePath: /vue-admin/src/views/demo/comp/form/baseForm/index.vue
-->
<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
  <div> <BasicForm :schemas="schemas" /> </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicForm } from '/@/components/Form';
import { ElSelect, ElOption } from 'element-plus';
const schemas = [
  {
    field: 'field',
    component: 'Input',
    label: '活动名称',
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
  {
    field: 'field1',
    component: 'Select',
    label: '活动区域1',
    colProps: {
      span: 8,
    },

    defaultValue: '1',
    componentProps: {
      placeholder: '自定义placeholder',
      onChange: (e) => {
        console.log(e);
      },
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'field3',
    component: 'RadioGroup',
    label: '活动区域3',
    colProps: {
      span: 8,
    },
    defaultValue: '1',
    componentProps: {
      placeholder: '自定义placeholder',
      onChange: (e) => {
        console.log(e);
      },
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
  },
];
export default defineComponent({
  components: {
    BasicForm,
    ElSelect,
    ElOption,
  },
  setup() {
    const options = [
      {
        value: '选项1',
        label: '黄金糕',
      },
      {
        value: '选项2',
        label: '双皮奶',
      },
      {
        value: '选项3',
        label: '蚵仔煎',
      },
      {
        value: '选项4',
        label: '龙须面',
      },
      {
        value: '选项5',
        label: '北京烤鸭',
      },
    ];
    return {
      schemas,
      options,
    };
  },
});
</script>
