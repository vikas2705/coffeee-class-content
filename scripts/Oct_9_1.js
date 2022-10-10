/**

New things in ES6
-- let, const
-- arrow functions -- the value of this property is always 
the current execution content


--- object and array destructuring
-- spread operators
--- question mark operators
-- default values
*/

// Object destructuring

const obj = {
    nsame: "vikas",
    age: 29,
    pincode: 122017,
    message: "helo",
    isMarried: false,
    phoneNumbers: ["232332", "434343"],
};

/*
const name = obj.name;
const age = obj.age;
const pincode = obj.pincode;
const message = obj.message;
*/

const {
    name = "",
    message = "",
    pincode: zipcode = 0,
    age = 0,
    dateOfBirth = "01 jan",
    isMarried = false,
    phoneNumbers = [],
} = obj;

console.log(name.toLowerCase());
console.log(message);
console.log(zipcode);
console.log(age);
console.log(dateOfBirth);

/*-------*/

function convertToLowerCase(str = "") {
    return str.toLowerCase();
}

convertToLowerCase();

/****/
