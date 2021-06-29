<!--
 * @Author: zeHua
 * @Date: 2021-06-25 15:15:49
 * @LastEditors: zeHua
 * @LastEditTime: 2021-06-25 17:22:38
 * @FilePath: /vue-admin/src/components/Form/src/components/FormItem.vue
-->

<script lang="jsx">
import { defineComponent, toRefs, computed, unref } from 'vue';
import { ElFormItem } from 'element-plus';
import { useItemLabelWidth } from '../hooks/useLabelWidth';
import { componentMap } from '../componentMap';
import { upperFirst } from 'lodash-es';
import { isFunction ,isBoolean} from '/@/utils/is'
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
        const { schema, tableAction, formModel, formActionType } = props;
        const { componentProps = {} } = schema;
        if (!isFunction(componentProps)) {
          return componentProps;
        }
        return componentProps({ schema, tableAction, formModel, formActionType }) ?? {};
      });
      const getDisable = computed(() => {
        const { disabled: globDisabled } = props.formProps;
        const { dynamicDisabled } = props.schema;
        const { disabled: itemDisabled = false } = unref(getComponentsProps);
        let disabled = !!globDisabled || itemDisabled;
        if (isBoolean(dynamicDisabled)) {
          disabled = dynamicDisabled;
        }
        if (isFunction(dynamicDisabled)) {
          disabled = dynamicDisabled(unref(getValues));
        }
        return disabled;
      });
    function renderComponent() {
      const { component, field, valueField, changeEvent = 'change' } = props.schema;
      const { autoSetPlaceHolder, size } = props.formProps;
      const isCheck = component && ['Switch', 'Checkbox'].includes(component);
      const eventKey = `on${upperFirst(changeEvent)}`;
      const on = {
        [eventKey]: (...args) => {
          const [e] = args;
          if (propsData[eventKey]) {
            propsData[eventKey](...args);
          }
          const target = e ? e.target : null;
          const value = target ? (isCheck ? target.checked : target.value) : e;
            props.setFormModel(field, value);
        },
        onInput: (args) => {
          props.setFormModel(field, args);
        },
      
      };
      const bindValue = {
        [valueField || (isCheck ? 'checked' : 'model-value')]: props.formModel[field],
      };

      let Comp = componentMap.get(component);
      console.log(getComponentsProps);
      const propsData = { allowClear: true,
          getPopupContainer: (trigger) => trigger.parentNode,
          size,
          ...unref(getComponentsProps),
          disabled: unref(getDisable),};
          console.log(propsData);
      const isCreatePlaceholder = !propsData.disabled && autoSetPlaceHolder;
        // RangePicker place is an array
      if (isCreatePlaceholder && component !== 'RangePicker' && component) {
          propsData.placeholder =
            unref(getComponentsProps)?.placeholder || createPlaceholderMessage(component);
        }
      propsData.codeField = field;
      
      propsData.formValues = unref(getValues);
      const compAttr = { ...propsData,
          ...on,
          ...bindValue, };
    //   console.log(compAttr);
                //   console.log(<Comp></Comp>);

      return <Comp {...compAttr} ></Comp>;
    }

    /**
     * 组件渲染
     */
    function renderItem() {
      const { field, label } = props.schema;

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
      //   console.log(renderColContent);
      const getContent = () => {
        return renderItem();
      };
      return getContent();
    };
  },
});
</script>
