let x = 20;

function main() {
    // console.log(x);
    let x = 10;
    console.log(x);
    // console.log(window.x);
    // console.log(this.x);
}

main();

/*
-- Variable hositing --
    -- if a variable is declared using var inside a functional scope,
       its declaration gets hoisted.
       
  -- if a variable is declared using let and Const inside a functional scope,
       its declaration gets hoisted.
  -- BUT, it goes into a temporal dead zone

*/
