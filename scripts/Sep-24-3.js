// create a function that takes one number and returns its cube

function cube(num) {
    return num * num * num;
}

const x = cube(5);
console.log(x);

console.log(cube(7));
console.log(cube(3));

// -------------

function swap(n1, n2) {
    const temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(n1);
    console.log(n2);
}
swap(30, 50);

/*
----
  
  This way of creating a function is called a function declaration
  
  function function_name (argument1, arg2, arg3, arg4,.....){
  /// write the common here
  }
*/

/*
We can also create an anonymous function
-- functions without any name


function (arg1, arg2, arg3.....) {
  // logic 
}

*/

// assign an anonymous func to a variable. this is also called as
// function expression

const multiplyBy2 = function (num) {
    return num * 2;
};

console.log(multiplyBy2(30));
