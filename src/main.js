// import {maxAndMin} from "./mild/mild_1.js";

// console.log(maxAndMin([0, 10, 20, 30, 15]));

import {countArray} from "./mild/mild_1.js";

console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));

import {identifyVariable} from "./mild/mild_2.js";

console.log(identifyVariable('hello'));

import {identifyArray} from "./mild/mild_2.js";

console.log(identifyArray(['some', 3, [3, 4], false]));

import {removeKey} from "./mild/mild_2.js";

let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
removeKey(obj, 'password');
console.log(obj);