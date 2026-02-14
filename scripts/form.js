const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// run through the list get name of each and add it to HTML select id="product" as an option


let select = document.getElementById("product");

products.forEach(product => {
    let newOption = document.createElement("option");
    newOption.text = product.name;
    newOption.value = product.id;
    select.appendChild(newOption);
});


// get the selected element

// create the option element

// set the options text and value

// append the option to the select element