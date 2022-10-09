const str = "Hello, my name is Vikas";

const str2 = str.toLowerCase();
console.log(str2);

const str3 = str2.toUpperCase();
console.log(str3);

const len = str3.length;
console.log(len);

const lenStr = len.toString();
console.log(lenStr);

const arr = lenStr.split("");
console.log(arr);

// method chaining

const res = str.toLowerCase().toUpperCase().length.toString().split("");
console.log(res);
