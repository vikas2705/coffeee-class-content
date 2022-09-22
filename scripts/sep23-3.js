let student = {
    name: "Vikas",
    age: 29,
    isMarried: false,
    address: "Palam Vihar, Gurgaon",
};

// Printing all the keys and values inside an object

// for in loop
// it is used to get all the keys and values in an object

// it gives all the keys in an object one by one
for (let xyz in student) {
    // console.log(key);
    console.log(xyz + ":" + student[xyz]);
}

/*
Pass by Value / Call by Value

IN JS , all strings, boolean and numbers are passed by value;

let name1 = "vikas";
let name2 = name1;


name1 --- "vikas"
name2 --- "vikas"



Pass by Reference / Call by reference

In objects or Arrays, we pass the reference / memory location

let obj1 = {name: "vikas"}
let obj2 = obj1;

obj1 -- {name: "anil"} -- obj2

obj2.name = "anil"

*/

let name1 = "Vikas";
let name2 = name1;
console.log(name1);
console.log(name2);

name2 = "Anil";
console.log(name1);
console.log(name2);

// ----------

let obj1 = { name: "vikas" };
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.name = "Anil";
console.log(obj1);
console.log(obj2);

//-----

let arr1 = [1, 3, 5];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);

arr2[2] = 7;
console.log(arr1);
console.log(arr2);

// --------

console.log(typeof student);
console.log(typeof [1, 3, 5]);
console.log(typeof null);
console.log(typeof true);
console.log(typeof "hrllo");
console.log(typeof 45);
