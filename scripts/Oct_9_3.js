// array destructuring

const arr = [1, 3, 5, 6, 9];

const [x, y, z, ...a] = arr;

console.log(x);
console.log(y);
console.log(z);
console.log(a);

//---------
// dot operators

const detail = {
    address: {
        line1: {
            apartment: "mahindra",
            flat: "j204",
        },
        line2: {
            landmark: "efjefei ",
        },
    },
};

console.log(detail?.address?.lineq?.apartment);

console.log("hello");

// const x= name==="vikas" ? true: false;
