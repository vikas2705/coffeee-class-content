// Event Delegation

/**
 * Reducing the number of event listeners on the page by delegating the evemt to parent elements
 *
 */
document.addEventListener("DOMContentLoaded", () => {
    const tds = document.getElementsByTagName("td");

    for (let index = 0; index < tds.length; index++) {
        const eachTd = tds[index];

        const color = eachTd.getAttribute("colorToShow");
        eachTd.style.backgroundColor = color;

        /* eachTd.addEventListener("click", () => {
            alert("You click on " + color + " color");
        });*/
    }

    const clickHandler = event => {
        // console.log(event);
        const element = event.target;
        const color = element.getAttribute("colorToShow");
        alert("You clicked on " + color + " color");
    };

    const mainTable = document.getElementById("main-table");
    mainTable.addEventListener("click", clickHandler);
});
