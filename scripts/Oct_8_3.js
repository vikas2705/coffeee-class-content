/* Hoisting

-- Variable hositing --
    -- if a variable is declared using var inside a functional scope,
       its declaration gets hoisted.
       
       -- inside any function, the declaration of variables get hoisted.

-- function hoisting
      -- inside any funcitonal scope, 
      the function declaration gets hoisted

   function expression doesn't get hoisted
*/

var x = 20;

function main() {
    console.log(x); //? undefined
    var x = 10;
    console.log(x); //? 10  // 20?????
    console.log(window.x); //? 10  // 20?????
    console.log(this.x); //? 10  // 20?????
}

main();
newFn();
newFn2();

function newFn() {
    // function declaration
    console.log("hello all");
}

var newFn2 = function () {
    // function expression
    console.log("hello newFn2");
};

//console.log(x); //20

/*
function main(){
  var x;
  console.log(x); //? undefined
  x = 10;
  console.log(x); //? 10
}
*/
// var x = 10;
// var x;  // declaration
// x = 10; // assignment / initialisation
