
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;


//NEW//UPDATED CONTENT
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 30",
        area: 32895,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-3-2278181.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 21",
        area: 45800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-temple-954939-wallpaper.jpg"
    },
    {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana ",
        dedicated: "2000, July, 16",
        area: 10890,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
    },
];

cardContainer = document.getElementById("templeCards");
createTcard(temples);
function createTcard(filteredTemples) {
    cardContainer.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let tName = document.createElement("h1");
        let tLocation = document.createElement("p");
        let dedication = document.createElement("p");
        let size = document.createElement("p");
        let tImage = document.createElement("img")

        tName.textContent = temple.templeName;
        tLocation.textContent = `Location: ${temple.location}`
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        size.textContent = `Floor Area: ${temple.area}sq ft`;
        tImage.src = temple.imageUrl;
        tImage.alt = temple.templeName;
        tImage.loading = ("lazy");

        card.append(tName, tLocation, dedication, size, tImage);
        cardContainer.append(card);
    })
};

function createTcardNew(filteredTemples) {
    cardContainer.innerHTML = "";
    filteredTemples.forEach(temple => {

        const age = parseInt(temple.dedicated.split(",")[0]); //used copilot to figure this out

        if (age >= 2000) {
            let card = document.createElement("section");
            let tName = document.createElement("h1");
            let tLocation = document.createElement("p");
            let dedication = document.createElement("p");
            let size = document.createElement("p");
            let tImage = document.createElement("img")

            tName.textContent = temple.templeName;
            tLocation.textContent = `Location: ${temple.location}`
            dedication.textContent = `Dedicated: ${temple.dedicated}`;
            size.textContent = `Floor Area: ${temple.area}sq ft`;
            tImage.src = temple.imageUrl;
            tImage.alt = temple.templeName;
            tImage.loading = ("lazy");

            card.append(tName, tLocation, dedication, size, tImage);
            cardContainer.append(card);
        }
    })
};

function createTcardOld(filteredTemples) {
    cardContainer.innerHTML = "";
    filteredTemples.forEach(temple => {

        const age = parseInt(temple.dedicated.split(",")[0]); //used copilot to figure this out

        if (age <= 1900) {
            let card = document.createElement("section");
            let tName = document.createElement("h1");
            let tLocation = document.createElement("p");
            let dedication = document.createElement("p");
            let size = document.createElement("p");
            let tImage = document.createElement("img")

            tName.textContent = temple.templeName;
            tLocation.textContent = `Location: ${temple.location}`
            dedication.textContent = `Dedicated: ${temple.dedicated}`;
            size.textContent = `Floor Area: ${temple.area}sq ft`;
            tImage.src = temple.imageUrl;
            tImage.alt = temple.templeName;
            tImage.loading = ("lazy");

            card.append(tName, tLocation, dedication, size, tImage);
            cardContainer.append(card);
        }
    })
};

function createTcardLarge(filteredTemples) {
    cardContainer.innerHTML = "";
    filteredTemples.forEach(temple => {

        if (temple.area > 90000) {
            let card = document.createElement("section");
            let tName = document.createElement("h1");
            let tLocation = document.createElement("p");
            let dedication = document.createElement("p");
            let size = document.createElement("p");
            let tImage = document.createElement("img")

            tName.textContent = temple.templeName;
            tLocation.textContent = `Location: ${temple.location}`
            dedication.textContent = `Dedicated: ${temple.dedicated}`;
            size.textContent = `Floor Area: ${temple.area}sq ft`;
            tImage.src = temple.imageUrl;
            tImage.alt = temple.templeName;
            tImage.loading = ("lazy");

            card.append(tName, tLocation, dedication, size, tImage);
            cardContainer.append(card);
        }
    })
};

function createTcardSmall(filteredTemples) {
    cardContainer.innerHTML = "";
    filteredTemples.forEach(temple => {

        if (temple.area < 10000) {
            let card = document.createElement("section");
            let tName = document.createElement("h1");
            let tLocation = document.createElement("p");
            let dedication = document.createElement("p");
            let size = document.createElement("p");
            let tImage = document.createElement("img")

            tName.textContent = temple.templeName;
            tLocation.textContent = `Location: ${temple.location}`
            dedication.textContent = `Dedicated: ${temple.dedicated}`;
            size.textContent = `Floor Area: ${temple.area}sq ft`;
            tImage.src = temple.imageUrl;
            tImage.alt = temple.templeName;
            tImage.loading = ("lazy");

            card.append(tName, tLocation, dedication, size, tImage);
            cardContainer.append(card);
        }
    })
};


const navHome = document.getElementById("home");
navHome.addEventListener("click", () => createTcard(temples));

const navnew = document.getElementById("new");
navnew.addEventListener("click", () => createTcardNew(temples));

const navold = document.getElementById("old");
navold.addEventListener("click", () => createTcardOld(temples));

const navlarge = document.getElementById("large");
navlarge.addEventListener("click", () => createTcardLarge(temples));

const navsmall = document.getElementById("small");
navsmall.addEventListener("click", () => createTcardSmall(temples));