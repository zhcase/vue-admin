/**
 * 比较数组参数
 * @param property 参数名
 * @returns
 */
export function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  };
}

/**
 * 比较数组里面的值排序 如: [{name:'232',age:23},{name:'232',age:11}]   排序age
 * @param arr  数组
 * @returns 返回一个新的排序数组
 */
export function sortArray(arr, property) {
  return arr.sort(compare(property));
}
