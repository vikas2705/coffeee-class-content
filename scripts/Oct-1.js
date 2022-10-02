document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("btn-1");
    btn1.addEventListener("click", hideSection1);

    /* document.addEventListener("scroll", () => {
        alert("page scrolled");
    });*/

    const hideSection1 = () => {
        const elem = document.getElementById("section-1");
        if (elem.style.display == "none") {
            elem.style.display = "block";
            //elem.innerHTML = "<h3>Hello, everyone</h3>";
        } else {
            elem.style.display = "none";
            // elem.innerHTML = "<h3>Hello, everyone</h3>";
        }
    };
    const input1 = document.getElementById("input-1");
    input1.addEventListener("change", event => {
        alert(event.target.value);
    });

    document.getElementById("body").addEventListener("click", bodyFn, true);
    document
        .getElementById("section-1")
        .addEventListener("click", sectionFn, true);
    document.getElementById("h2-1").addEventListener("click", h2Fn, true);
});

const bodyFn = () => {
    alert("body clicked");
};

const h2Fn = () => {
    alert("h2 clicked");
};

const sectionFn = () => {
    alert("section clicked");
};
