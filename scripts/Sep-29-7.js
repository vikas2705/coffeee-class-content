/*
Create a function called "executeAnything" which accepts a param.
-- That param could be of any data type.

-- if the param is a string, print "Welcome, {string}"
-- if the param is a number, print its square.
-- if the param is a boolean, print the value.
-- if the param is null, print "null"
-- if the param is undefined, print "undefined".
-- if the param is a function, execute the function.
-- if the param is an array, print the last element in the array
e.g [1, 9, 45, 16]  --> 16

-- if the param is an object, print the first value in the object
e.g.  {
     school: "dav",
     firstname:  "vikas",
     lastname: "ranjan"

} ---> dav



*/

const executeAnything = param => {
    const dataType = typeof param;

    // if / else if  --> Switch statement

    if (dataType === "string") {
        console.log("Welcome, " + param);
    } else if (dataType === "number") {
        console.log(param * param);
    } else if (dataType === "boolean") {
        console.log(param);
    } else if (dataType === "object") {
        // it could be a map, array or null

        // checking for null
        if (!param) {
            console.log("null");
        }

        // map // array??? .length --> arrays

        // checking for arrays
        else if (param.length) {
            const lastIndex = param.length - 1;
            console.log(param[lastIndex]);
        } else {
            // it is a map/obj with key-value pair
            console.log(Object.values(param)[0]);
        }
    } else if (dataType === "function") {
        param();
    } else {
        console.log("undefined");
    }
};

const sampleFn = () => {
    console.log("Sample Fn is executed");
};

const sampleObj = {
    school: "dav",
    firstname: "vikas",
    lastname: "ranjan",
};

executeAnything(10); // 100
executeAnything("Vikas"); // Welcome, Vikas
executeAnything(false); // false
executeAnything(null); // "null"
executeAnything(); // "undefined"
executeAnything(sampleFn); // "Sample Fn is executed" should be printed
executeAnything([1, 9, 45, 16]); // 16
executeAnything(sampleObj); // "dav"
