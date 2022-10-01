/*
What is JS and history of JS

Variables, Datatypes

let, const, var

scope of variables

typeof operator

other operators in JS

loops in JS

objects in JS

arrays in JS

functions in JS
 --- function declaration and function expression
 -- anonymous func
 -- self invoking func
 -- arrow func
 -- this operator
 -- recursion
 -- callback func
 
 
BOM

  --- window object
      -- super class of all the objects in JS
      -- all global variables and global func are a part of window
      
 Browser --> window --> document, navigator, location, history.....
 
 document --> the HTML DOM and all html elements
  
*/

const arr = [1, 2, 3, 4];

const map = { name: "vikas" };

const obj = null;

const f1 = () => {
    console.log("hello");
};

console.log(typeof arr);
console.log(typeof map);
console.log(typeof obj);
console.log(typeof f1);
