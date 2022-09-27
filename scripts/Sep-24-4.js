function completeName(firstname, lastname) {
    return firstname + ", " + lastname;
}

const val = completeName("vikas", "ranjan");
console.log(val);
console.log(completeName("anil", "kumar"));

// -----------------

function completeName2(firstname, lastname) {
    console.log(firstname + ", " + lastname);
    const x = 1;
}

// if a function doesnt return anything, its return value is undefined

const value = completeName2("vikas", "ranjan");
console.log(value);

console.log(completeName2("anil", "kumar"));

//---

const completeName3 = (firstname, lastname) => {
    return firstname + ", " + lastname;
};

completeName3("vikas", "ranjan");
