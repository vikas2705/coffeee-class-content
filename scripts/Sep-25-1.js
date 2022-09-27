// Immediately/ Self Invoked Functions

// IIFe / IIfy/ IIfs

// functions that execute immediately on their own

(function printMessage(name) {
    console.log("Welcome to Coffeee, " + name);
})("kumar");

/*

Functions 

BOM -- Browser Object Model

*/

const multiplyBy2 = function (num) {
    return num * 2;
};

multiplyBy2(4);

multiplyBy2(9);

multiplyBy2(15);

const swap = (num1, num2) => {
    const temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(num1);
    console.log(num2);
};

swap(20, 36);
swap(50, 66);
swap(90, 16);
