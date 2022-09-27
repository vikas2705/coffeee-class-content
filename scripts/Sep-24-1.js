/*
Few important functions for Arrays in JS
Pre-defined functions
--- Map, Filter, Reduce


-- Functions in Javascript
*/

// Map --

/* 
//input array - [1,2,3,4,5]

Given an input array, print an output array where every number has 
been squared off

//output array - [1,4,9,16,25]


*/

// map function takes an input array does some operation on
// every element and returns a new array

const inputArr = [1, 2, 3, 4, 5];

const outputArr = inputArr.map(function (num) {
    return num * num;
});

console.log(outputArr);

/*
Filter function 

const inputArr1 = [4, 29, 51, 25, 36, 90]

return in array with only even numbers -- [4,36,90]

return an array of numbers greater than 50 -- [51,90]
*/

const inputArr1 = [4, 29, 51, 25, 36, 90];

const outputArr2 = inputArr1.filter(function (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }

    // return num%2 === 0;
});
console.log(outputArr2);

const outputArr3 = inputArr1.filter(function (num) {
    return num > 50;
});
console.log(outputArr3);

// filter function takes an input array and returns an output array
// with elements that follow some condition

/*
reduce function in JS takes an aarray and returns some value 
from the array depending on the condition

 const arr =  [1,9, 10, 45, 21, 6];
 
 return sum of all items - 92

*/

const arr = [1, 9, 10, 45, 21, 6];

const output = arr.reduce(function (total, num) {
    return total + num;
});

console.log(output);
