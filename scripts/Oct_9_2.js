const obj2 = {
    name: "vikas",
    age: 29,
    pincode: 122017,
    message: "helo",
    isMarried: false,
    phoneNumbers: ["232332", "434343"],
};

const { name, pincode, ...obj3 } = obj2;
console.log(name);
console.log(obj3);

const obj5 = obj2;
const obj4 = { ...obj2 };

obj2.name = "anil";

console.log(obj2); // anil
console.log(obj5); // anil
console.log(obj4); // vikas
