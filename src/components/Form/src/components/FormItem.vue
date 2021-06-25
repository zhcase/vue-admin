<!--
 * @Author: zeHua
 * @Date: 2021-06-25 15:15:49
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-25 17:22:38
 * @FilePath: /vue-admin/src/components/Form/src/components/FormItem.vue
-->
<template>
  <div class="">122 </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue';
import { useItemLabelWidth } from '../hooks/useLabelWidth';
export default defineComponent({
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    formProps: {
      type: Object,
      default: () => ({}),
    },
    formModel: {
      type: Object,
      default: () => ({}),
    },
    allDefaultValues: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { schema, formProps } = toRefs(props);
    const itemLabelWidthProp = useItemLabelWidth(schema, formProps);
    console.log(itemLabelWidthProp);

    console.log(schema);
    const getValues = computed(() => {
      const { allDefaultValues, formModel, schema } = props;
      const { mergeDynamicData } = props.formProps;
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...mergeDynamicData,
          ...allDefaultValues,
          ...formModel,
        },
        schema: schema,
      };
    });
    console.log(getValues);
  },
});
</script>
