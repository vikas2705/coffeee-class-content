console.log(1 == "1");
// double equals operator in JS only checks for the value if same or not

console.log(1 === "1");
// triple equals operator in JS checks for both the value and the datatype

console.log(false == 0);
console.log(false == "");
console.log(false == false);
console.log(false == null);
console.log(false == undefined);

console.log(false === 0);
console.log(false === "");
console.log(false === false);
console.log(false === null);
console.log(false === undefined);

/**
JavaScipt

Falsy values in JavaScript

Some values are equivalent to false
Numbers - 0 
boolean - false
string - ""
*/

//loops
let str = "";
for (var i = 1; i < 10; i++) {
    str = str + i;
}
console.log(str);

var j = 100;
while (j >= 1) {
    console.log(j);
    j--;
}

console.log(false == "false"); //false

// convert a string into number

console.log("101");
console.log(Number("101"));

console.log("false");
console.log(Boolean("kjyfyuym;oiu;oinuoi"));

// -----
