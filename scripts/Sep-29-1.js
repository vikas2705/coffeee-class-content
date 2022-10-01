/*
console.log("hello");
setTimeout(()=> {
  console.log("Callback func called");
}, 5000);
console.log("hello 1");
console.log("hello 2");
*/

console.log("1");
const main = () => {
    console.log("3");

    setTimeout(() => {
        console.log("4");
    }, 3000);

    console.log("5");

    setTimeout(() => {
        console.log("6");
    }, 1000);

    console.log("7");

    setTimeout(() => {
        console.log("8");
    });

    console.log("9");

    setTimeout(() => {
        console.log("10");
    }, 0);

    console.log("11");
};
console.log("12");
main();
console.log("2");

// i want to print another message with some delay.

// setTimeout
//-- directly under window. you can also use window.setTimeout
/*
setTimeout takes two parameters, 
one is a callback func, 
other is a time delay in milisec

It is a special func that enables async behavior in JS

10 sec - 10,000 mS 

*/
