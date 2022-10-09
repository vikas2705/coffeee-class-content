// Application of closures

// a function with private variables and some methods to access them
const main = () => {
    let counter = 0; //private variable

    const increment = () => {
        counter++;
    };

    const decrement = () => {
        counter--;
    };

    const display = () => {
        console.log("Current counter value is: --" + counter);
    };

    return {
        increment: increment,
        decrement: decrement,
        display: display,
    };
};

const result = main();
//console.log(result);

result.display(); //0

result.increment();
result.increment();
result.increment();
result.increment();
result.display(); //4

result.decrement();
result.decrement();
result.display(); //2
