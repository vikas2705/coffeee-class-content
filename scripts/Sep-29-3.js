const main = name => {
    console.log("1");

    const xyz = setTimeout(() => {
        console.log("3");
    }, 3000);

    if (name === "vikas") {
        // dont print console.log("3");
        clearTimeout(xyz);
    }
};

main("anil");
// if name is vikas
