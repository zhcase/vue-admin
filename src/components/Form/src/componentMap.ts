import {
  ElInput,
  ElSelect,
  ElRadioGroup,
  ElRadioButton,
  ElCheckbox,
  ElAutocomplete,
  ElCascader,
  ElDatePicker,
  ElInputNumber,
  ElSwitch,
  ElTimePicker,
  ElTree,
  ElSlider,
  ElRate,
  ElCheckboxGroup,
} from 'element-plus';
const componentMap = new Map();
componentMap.set('Input', ElInput);
// componentMap.set('InputGroup', ElInput.Group);
// componentMap.set('InputPassword', Input.Password);
// componentMap.set('InputSearch', Input.Search);
// componentMap.set('InputTextArea', Input.TextArea);
componentMap.set('InputNumber', ElInputNumber);
componentMap.set('AutoComplete', ElAutocomplete);

componentMap.set('Select', ElSelect);
// componentMap.set('ApiSelect', ApiSelect);
componentMap.set('TreeSelect', ElTree);
componentMap.set('Switch', ElSwitch);
componentMap.set('DatePicker', ElDatePicker);
// componentMap.set('MonthPicker', DatePicker.MonthPicker);
// componentMap.set('RangePicker', DatePicker.RangePicker);
// componentMap.set('WeekPicker', DatePicker.WeekPicker);
componentMap.set('TimePicker', ElTimePicker);
// componentMap.set('StrengthMeter', StrengthMeter);
// componentMap.set('IconPicker', IconPicker);
// componentMap.set('InputCountDown', CountdownInput);

// componentMap.set('Upload', BasicUpload);
componentMap.set('RadioButtonGroup', ElRadioButton);
componentMap.set('RadioGroup', ElRadioGroup);
componentMap.set('Checkbox', ElCheckbox);
componentMap.set('CheckboxGroup', ElCheckboxGroup);
componentMap.set('Cascader', ElCascader);
componentMap.set('Slider', ElSlider);
componentMap.set('Rate', ElRate);

export { componentMap };
