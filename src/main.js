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

// import {getStatistics} from "./medium/medium_1.js";

// console.log(getStatistics([3,2,4,5,5,5,2,6,7]));
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

// import {allCarStats} from "./medium/medium_2.js";

// console.log(allCarStats);

// import {moreStats} from "./medium/medium_2.js";

// console.log(moreStats);
// // for (var entry of moreStats.makerHybrids) {
// //     console.log(entry.hybrids);
// // }
// for (var year in moreStats.avgMpgByYearAndHybrid) {
//     console.log(year);
//     console.log(moreStats.avgMpgByYearAndHybrid[year]);
// }

// import mpg_data from "./medium/data/mpg_data.js";

// import {searchHighPower} from "./medium/medium_3.js";

// console.log(searchHighPower(mpg_data, 630, 738));

// import {searchName} from "./medium/medium_3.js";

// console.log(searchName(mpg_data, "amg"));

// import {searchByYear} from "./medium/medium_3.js";

// console.log(searchByYear(mpg_data, [2008, 2009]));

import {repeat} from "./spicy/spicy_9.js";

function hi(str) {
    return `hi ${str}`;
}

console.log(repeat(hi, 3, ["bill", "tom", "fred"]));