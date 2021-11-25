// import {maxAndMin} from "./mild/mild_1.js";

// console.log(maxAndMin([0, 10, 20, 30, 15]));

// import {countArray} from "./mild/mild_1.js";

// console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));

// import {identifyVariable} from "./mild/mild_2.js";

// console.log(identifyVariable('hello'));

// import {identifyArray} from "./mild/mild_2.js";

// console.log(identifyArray(['some', 3, [3, 4], false]));

// import {removeKey} from "./mild/mild_2.js";

// let obj = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };
// removeKey(obj, 'password');
// console.log(obj);

// import {removeKeyNonDestructive} from "./mild/mild_2.js";

// var obj = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };
//  var new_obj = removeKeyNonDestructive(obj, 'name');
//  console.log(obj);
//  console.log(new_obj);

// import {removeKeys} from "./mild/mild_2.js";

// let obj = {
// name: 'Mr. Boss',
// title: 'boss',
// age: 33,
// password: 'pass123'
// };
// let new_obj = removeKeys(obj, ['password', 'age']);
// console.log(obj);
// console.log(new_obj);

// import {getSum} from "./medium/medium_1.js";

// console.log(getSum([1,2,3,4,5,6]));

// import {getMedian} from "./medium/medium_1.js";

// let array = [3,2,5,6,2,7,4,2,7,5];
// console.log(getMedian(array)); // 4.5

import {getStatistics} from "./medium/medium_1.js";

console.log(getStatistics([3,2,4,5,5,5,2,6,7]));
// {
//   length: 9,
//   sum: 39,
//   mean: 4.333333333333333,
//   median: 5,
//   min: 2,
//   max: 7,
//   variance: 2.6666666666666665,
//   standard_deviation: 1.632993161855452
// }