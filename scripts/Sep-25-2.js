// Arrow function

const name = function () {
    console.log("hello");
};

// AFter ES6, we introduced a new way of creating
//functions
const name2 = () => {
    console.log("hello");
};

// anonymous func using arrow func

/*() => {
	console.log("welcome")
};*/

(() => {
    console.log("welcome");
})();

/// -------

// this keyword

// this keyword is a property of every function.
// it gives you the scope from where the func is called

function print() {
    console.log(this); // window --> global scope
}

print(); // being called from global scope

function a() {
    function b() {
        console.log(this);
    }

    b();
}

a();

const obj = {
    newFunc: function () {
        console.log(this); // obj
    },
    newFunc2: () => {
        console.log(this); // window
    },
};

obj.newFunc();

obj.newFunc2();

// In a normal function, this keyword gives the scope from where the func is called
// its value can change depending on the context

// in an arrow func, this keyword always gives the scope where currently executed
// scope doesnt change

// arrow func doesnt have a func declaration

/*

    functions?
    
    function declaration
    
    anonymous func
    
    function expression
    
    self invoking func
    
    arrow func
    
    this keyword
    
    callback func
    
    recursion

*/
