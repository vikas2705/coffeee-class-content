document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("students-table");

    for (let index = 0; index < tableData.length; index++) {
        const data = tableData[index];

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        td1.innerHTML = data.name;
        td2.innerHTML = data.roll;
        td3.innerHTML = data.subject;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const checkEnterPress = event => {
        if (event.key == "Enter") {
            alert("Enter key pressed");
        }

        if (event.ctrlKey || event.key == "Control") {
            alert("Copy paste is disabled");
            event.preventDefault();
            return;
        }
    };

    document
        .getElementById("input1")
        .addEventListener("keypress", checkEnterPress);
});

const tableData = [
    {
        name: "Vikas",
        subject: "Chemistry",
        roll: 147,
    },
    {
        name: "Anil",
        subject: "Physics",
        roll: 13,
    },
    {
        name: "Kumar",
        subject: "IT",
        roll: 204,
    },
    {
        name: "Saurabh",
        subject: "Maths",
        roll: 89,
    },
    {
        name: "Monu",
        subject: "Electronics",
        roll: 126,
    },
    {
        name: "Indu",
        subject: "Electrical",
        roll: 136,
    },
    {
        name: "Naveen",
        subject: "Mechanice",
        roll: 144,
    },
    {
        name: "Kishore",
        subject: "EVS",
        roll: 141,
    },
    {
        name: "Sidhharth",
        subject: "Civil",
        roll: 143,
    },
];
