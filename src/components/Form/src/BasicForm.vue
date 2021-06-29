<!--
 * @Author: zeHua
 * @Date: 2021-06-23 16:01:39
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-25 17:07:43
 * @FilePath: /vue-admin/src/components/Form/src/BasicForm.vue
-->
<template>
  <ElForm :model="formModel" label-width="80px">
    <template v-for="schema in getSchema" :key="schema.field">
      <FormItem
        :schema="schema"
        :getProps="getProps"
        :setFormModel="setFormModel"
        :formModel="formModel"
      >
        <!-- <el-option label="涨" :value="1"> </el-option> -->
        <!-- <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="data"></slot>
        </template> -->
      </FormItem>
    </template>
  </ElForm>
</template>

<script lang="jsx">
import { defineComponent, computed, unref, ref, reactive } from 'vue';
import { ElForm, ElFormItem, ElInput } from 'element-plus';
import FormItem from './components/FormItem.vue';
import { basicProps } from './props';
export default defineComponent({
  components: {
    ElForm,
    ElInput,
    ElFormItem,
    FormItem,
  },
  props: basicProps,

  setup(props) {
        const schemaRef = ref(null);

    const formModel = reactive({});
    const getProps = computed(() => {
      return { ...props, ...unref(propsRef) };
    });
    const propsRef = ref({});

    function Inputs() {
      return <ElInput></ElInput>;
    }
    function setFormModel(key, value) {
      formModel[key] = value;
    }
    const getSchema = computed(() => {
        const schemas= unref(schemaRef) || (unref(getProps).schemas);
        console.log(schemas);
      // for (const schema of schemas) {
      //   const { defaultValue, component } = schema;
      //   console.log(defaultValue);
      //   console.log(component);
      //  }
      return schemas;
    });
 
    return {
      getSchema,
      getProps,
      inputss: Inputs,
      setFormModel,
      formModel,
    };
  },
});
</script>
