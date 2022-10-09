/*
 JS Call stack


*/

console.log("1");

function a() {
    console.log("2");
    b();
    console.log("6");
}

function b() {
    console.log("3");
}

setTimeout(() => {
    console.log("11");
}, 1000);

console.log("10");
main();

function main() {
    console.log("4");
    console.log("5");
    a();
    console.log("8");
    b();
    console.log("9");
}

console.log("7");

const x = param => {};
// arrow, funct exp, anonymous

/*
JS Call stack
--- all lines are executed line by line
-- any function call gets added at the top of call stack


but whenever any async event occurs -- 
they have a func callback function associated with them
----> setTimeout, setInterval 
----> event listeners 
----> Promises/async await / API Calls

*/
