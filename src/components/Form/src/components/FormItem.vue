<!--
 * @Author: zeHua
 * @Date: 2021-06-25 15:15:49
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-25 17:22:38
 * @FilePath: /vue-admin/src/components/Form/src/components/FormItem.vue
-->

<script lang="tsx">
import { defineComponent, toRefs, computed, unref } from 'vue';
import { ElFormItem } from 'element-plus';
import { useItemLabelWidth } from '../hooks/useLabelWidth';
import { componentMap } from '../componentMap';
import { upperFirst } from 'lodash-es';

export default defineComponent({
  name: 'BasicFormItem',
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    formProps: {
      type: Object,
      default: () => ({}),
    },
    setFormModel: {
      type: Function,
      default: null,
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
    const getComponentsProps = computed(() => {
      const { schema, formModel } = props;
      const { componentProps = {} } = schema;
      //   if (!isFunction(componentProps)) {
      //     return componentProps;
      //   }
      return componentProps({ schema, formModel }) ?? {};
    });
    function renderComponent() {
      const { component, field, componentProps, valueField, changeEvent = 'change' } = props.schema;
      const isCheck = component && ['Switch', 'Checkbox'].includes(component);
      const eventKey = `on${upperFirst(changeEvent)}`;
      console.log(eventKey);
      console.log(12323);
      const on = {
        [eventKey]: (...args: []) => {
          console.log(12323);
          console.log(args);
          const [e] = args;
          if (propsData[eventKey]) {
            propsData[eventKey](...args);
          }
          const target = e ? e.target : null;
          const value = target ? (isCheck ? target.checked : target.value) : e;
          props.setFormModel(field, value);
        },
      };
      console.log(props);
      console.log(valueField);
      const bindValue = {
        [valueField || (isCheck ? 'checked' : 'value')]: props.formModel[field] || field,
      };
      console.log(bindValue);
      const Comp = componentMap.get(component);
      const propsData: any = {};
      propsData.codeField = field;
      propsData.formValues = unref(getValues);
      console.log(propsData.formValues);
      const compAttr = { ...propsData, ...componentProps, ...bindValue, ...on };
      return <Comp {...compAttr}></Comp>;
    }

    /**
     * 组件渲染
     */
    function renderItem() {
      console.log(props.schema);
      const { field, label } = props.schema;
      console.log(field);

      // 设置组件属性
      return (
        <ElFormItem name={field} label={label}>
          {renderComponent()}
        </ElFormItem>
      );
    }
    // console.log(componentMap.get('Input'));

    // console.log(getValues);
    // console.log(props.schema);

    return () => {
      const { colProps = {}, component, field, renderColContent, colSlot } = props.schema;
      console.log(component);
      if (!componentMap.has(component)) {
        return null;
      }
      /**
       * 拿到组件
       */
      const Comp = componentMap.get(component);
      const { baseColProps = {} } = props.formProps;
      const realColProps = { ...baseColProps, ...colProps };

      //   const { isIfShow, isShow } = getShow();
      const values = unref(getValues);
      console.log(values);
      //   console.log(renderColContent);
      const getContent = () => {
        return renderItem();
      };
      return getContent();
    };
  },
});
</script>
