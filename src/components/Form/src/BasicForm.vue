<!--
 * @Author: zeHua
 * @Date: 2021-06-23 16:01:39
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-25 17:07:43
 * @FilePath: /vue-admin/src/components/Form/src/BasicForm.vue
-->
<template>
  <ElForm>
    <template v-for="schema in getSchema" :key="schema.field">
      <FormItem :schema="schema" :getProps="getProps" />
    </template>
  </ElForm>
</template>

<script lang="js">
import { defineComponent, computed, unref,ref} from 'vue';
import { ElForm,ElFormItem, } from 'element-plus'
import FormItem from './components/FormItem.vue';
import { basicProps } from './props';
export default defineComponent({
  components:{
    ElForm,
    ElFormItem,
    FormItem
  },
  props: basicProps,
  
  setup(props) {
    console.log(props);
    const getProps = computed(() => {
        return { ...props, ...unref(propsRef) };
      });
     const propsRef=ref({});
     

    const getSchema = computed(() => {
      const schemas = unref(getProps).schemas;
      // for (const schema of schemas) {
      //   const { defaultValue, component } = schema;
      //   console.log(defaultValue);
      //   console.log(component);
      //  }
      return schemas
    });
    console.log(getSchema);
    console.log(getProps);
    return {
      getSchema,
      getProps
    }
  },
});
</script>
