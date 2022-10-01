/*
setInterval is exactly like setTimeout. 

SYntax is similar, it is also present in window

clearInterval


-- setTimeout is executed only once after given time delay


-- setInterval keeps executing multiple times after 
given time delay until stopped


*/

console.log("1");

const main = () => {
    let count = 0;

    // always clear setInterval before creating a new one
    let xyz = setInterval(() => {
        count++;
        console.log("Welcome to Coffeee");

        if (xyz && count >= 5) {
            clearInterval(xyz);
            console.log("stopped");
        }
    }, 2000);
};

main();
console.log("2");
