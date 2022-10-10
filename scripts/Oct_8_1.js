// Closures

const outerFn = () => {
    const firstName = "Vikas";
    const msg = "hello";

    const innerFn = () => {
        console.log(firstName + " Ranjan");
        console.log(msg);
    };

    return innerFn;
};

const x = outerFn();
//console.log(x);
x(); // here
//----

const outerFn2 = firstName => {
    const innerFn2 = lastName => {
        console.log(firstName + "-" + lastName);
    };
    return innerFn2;
};

const val = outerFn2("Vikas");
val("Ranjan");

// closures means when an inner function has access to the scope
// of the outer function even if the outer function has already
// executed

//x();

/*
Closures
Hoisting
Event loops / Call Stack
Exception Handling -- 
method Chaining

*/

/*

Event Delegation

Asynchronous Progg in JS
-- promises
-- async await

New things in ES6
-- let, const
-- arrow functions


--- variable and array destructuring
--- question mark operators

*/

/*Bootstrap*/

/*
React

Project
*/
