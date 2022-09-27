// Recursion

// When a function calls itself again, it is called recursion

const sub = num => {
    console.log(num);
    if (num < 5) {
        sub(num + 1);
    }
};

const main = () => {
    sub(1);
};

main();

// -----factorial problem
/*
5! -- 
5* 4! -- 
5 * 4 * 3! -- 
5 * 4 * 3 * 2! - 
5 * 4 * 3*2*1! -- 
5*4 * 3*2*1

*/
const factorial = num => {
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
};

console.log(factorial(5));
