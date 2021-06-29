<template>
  <el-select>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script lang="jsx">
import { defineComponent, reactive, unref } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
export default defineComponent({
  name: 'Vselect',
  components: {
    ElSelect,
    ElOption,
  },
  props: {
    options: Array,
  },
  setup(props) {
    const { options } = reactive(porps);
    return {
      options,
    };
  },
});
</script>
