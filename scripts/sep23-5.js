// arrays in javascript
// they are a special type of objects

// define using let, const, var

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers);

//int arr [] = new int [5];

//point 1# in JS, we dont need to enter the size of arr

oddNumbers.push(11);
console.log(oddNumbers);

oddNumbers.push("welcome");
console.log(oddNumbers);

console.log(oddNumbers.length);

// point 2 # we can change the size of array in JS

/// arrays are multiple values of same data type, of fixed size
// stored in continuous memory location

// point 3 # in JS --> we can create arrays with elements
// of any datatype

let arr = [100, "hello", true, { name: "vikas" }, [1, 5, 9], null, undefined];
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log(arr.length);

console.log("----");
// print all numbers in an array

for (let index = 0; index < oddNumbers.length; index++) {
    console.log(oddNumbers[index]);
}

/*  change the value at any place  */

oddNumbers[0] = 15;
console.log(oddNumbers);

/*  delete any value from array using its index */

oddNumbers.splice(2, 2);
console.log(oddNumbers);

/*insert something at an index*/

oddNumbers.splice(3, 0, 31);
console.log(oddNumbers);

/*
{ "0" : 15, "1": 3, "2":9, }

*/
