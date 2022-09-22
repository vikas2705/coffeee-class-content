// variables are containers to store some data/value

// data_type variable_name = value/data

// age = 29

/* Data types in JS :-

1. Number  --  101, -50, 0, 101.237. -90.45945
2. string -- "hello, my name is vikas", "hello 23398479b &*&#*&^$*&#"
3. boolean - true/false


4. object -- objects, maps, arrays, e.g. {name: 'Vikas'}, [1,2,3], ["ram", "shyam","vikas"]

5. null -- null means a variable defined in the memory with empty value, var x = null;

6. undefined -- a variable not declared or no value assigned to it. var y;

null occupies space in memory
but undefined doesnt occupy space

*/

/* HOW TO DECLARE VARIABLES IN JAVASCRIPT

1. Languages like Java, C, c++ are static typed languages.
it means that while declaring a variable, you need to tell which data type
e.g. int, string, boolean, float etc.
2. The data type of the variable cannt be changed later.



But in JS, variables are dynamically typed.
which means you only need to declare the variable.

2. You can change its data type later on.


a. var
b. let
c. const

ESversions -- Before ES6 (2015), var was used. 

After ES6, it is recommended to use let and const.


var name = "Vikas";
var age = 29;
var isIndian = true;

----


let myName = "Vikas"; // string
let myAge = 29; // number
let isMarried = false; // boolean
let x; //undefined


const city = "Gurgaon"; // string
const address = { // object
    "pincode": 122017,
    "apartment" : "mahindra aura"
}
const isAsleep = false; // boolean
const percentage = 98.40; /// number


diff between let and const

if the value of a variable will change, we use Let.
if the value wont change, we use const (CONSTANT)


*/

let x = 10;
console.log(x); //10

x = 100;
console.log(x); // 100

x = x * 5;
console.log(x); // 500

const y = 10;
console.log(y); //10

//y = 100;
//console.log(y); //

//y = y * 5;
// console.log(y); //

/*

diff b/w Let,const   and Var


      Let/Const                          Var

defined in ES6.                         Used before ES6
It has block-level scope.               has a functional scope
Hoisting works only in the             Hoisting works only in the  functional scope     
   block scope        

*/

function main() {
    var v1 = 1000;

    if (v1 == 1000) {
        var v2 = 2000; // funcitonal scope
    }

    console.log(v1); //1000
    console.log(v2); // 2000
}

main();
//console.log(v1);  //error
// console.log(v2); // error

function main2() {
    let v1 = 500;

    if (v1 == 500) {
        let v2 = 700; /// block level scope
    }

    console.log(v1); //500
    //   console.log(v2); // error
}

main2();

/*
OPerators in JS 

Arithemetic - +, - , /, *, %, ++, --
Relational --  >, < ,  ==, ===, >=, <=
Logical -- &&, ||, !

typeof operator in JS -- It returns the datatype of a variable in JS as a string


typeof 100 -- "number" 
typeof false -- "boolean"
typeof "Hello" -- "string"
typeof {name: "Vikas"} -- "object"
typeof [1,2,3] --- "object"
typeof null -- "object"


typeof typeof 100  -- "string"



*/

console.log(typeof 100);
console.log(typeof false);
console.log(typeof "Hello");
console.log(typeof { name: "Vikas" });
console.log(typeof [1, 2, 3]);
console.log(typeof null);
console.log(typeof abcd);
