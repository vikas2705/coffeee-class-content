// Functions

// Java, C++ -- OOPS
// Object oriented Programming

// C -- Structure oriented Progg

// Functional oriented progg / lanuage
// JavaScript, Python, PHP

// functions are the most important parts inside these language

let num1 = 20;
let num2 = 40;
console.log(num1);
console.log(num2);

// swap any two numbers

const temp = num1;
num1 = num2;
num2 = temp;
console.log(num1);
console.log(num2);
/*

const temp2 = num3;
num4 = num3;
num3 = temp2;
console.log(num3);
console.log(num4);


const temp3 = num5;
num5 = num6;
num6 = temp3;
console.log(num5);
console.log(num6);


/*
---
  
  create a function


function function_name (parameters, parameters){
  // do the common code here
}


Advantages of creating a function 

1. Removes code duplication
2. improves code reusability
3. Decereases chances of error
4. saves time and effort
5. makes your code easy to read and understand
*/

function swap(n1, n2) {
    const temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(n1);
    console.log(n2);
}

swap(10, 40);

swap(20, 50);

swap(40, 100);
