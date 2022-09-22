let student = {
    name: "Vikas",
    age: 29,
    isMarried: false,
    address: {
        pincode: 122017,
        locality: "palam vihar",
        city: "Gurgaon",
    },
    luckyNumbers: [9, 3, 4],
};

console.log(student.name);

student.name = "Anil";

console.log(student.name);
console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
