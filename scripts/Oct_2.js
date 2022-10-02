document.addEventListener("DOMContentLoaded", () => {
    const hideSection1 = () => {
        const elem = document.getElementById("section-1");
        if (elem.style.color == "red") {
            elem.style.color = "green";
            elem.innerHTML = "<h3>Hello, everyone</h3><h4>Hello, everyone</h4>";
        } else {
            elem.style.color = "red";
            elem.innerHTML = "<h3>Hello, everyone</h3><h4>Hello, everyone</h4>";
        }
    };

    const btn1 = document.getElementById("btn-1");
    btn1.addEventListener("click", hideSection1);

    /* document.addEventListener("scroll", () => {
        alert("page scrolled");
    });*/

    const input1 = document.getElementById("input-1");
    input1.addEventListener("change", event => {
        alert(event.target.value);
    });

    // const sec1 = document.getElementById("section-1");
    //sec1.innerHTML = "<h3>Hello, everyone</h3>";

    // document.getElementById("body").addEventListener("click", bodyFn, true);

    // document.getElementById("h2-1").addEventListener("click", h2Fn, true);

    document.getElementById("btn-anchor").addEventListener("click", () => {
        const anchor = document.getElementById("anchor-1");
        anchor.setAttribute("href", "https://www.facebook.com");
    });

    const h1 = document.createElement("h1"); //create an element
    h1.setAttribute("title", "This is main heading");
    h1.innerHTML = "This is generated using JS";
    //  document.getElementById("section-1").appendChild(h1);

    const p = document.getElementById("section1-p");
    //  document.getElementById("section-1").removeChild(p);

    document.getElementById("section-1").replaceChild(h1, p);
});
