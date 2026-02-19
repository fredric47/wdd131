
const currentYear = document.querySelector("#currentYear")
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

let chessFacts = [
    "0Chess is over 1000 years old",
    "1Chess is over 1000 years old",
    "2Chess is among the oldest games in the world",
    "3Chess is among the oldest games in the world",
    "4Chess is one of the most reconigisable games world wide",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]

let index = localStorage.getItem('currentFact')
if (index === null) {
    localStorage.setItem('currentFact', '0');
}


function nextFact(factArray, factIndex) {
    if (factIndex >= factArray.length) {
        localStorage.setItem('currentFact', '0');
        factIndex = 0;
    };
    return chessFacts[factIndex];
}

function funFact() {
    let factIndex = JSON.parse(localStorage.getItem('currentFact')); //remember.getItem //copilot
    const funFactArea = document.getElementById("factarea");
    funFactArea.innerHTML = nextFact(chessFacts, factIndex);
    factIndex++;
    localStorage.setItem('currentFact', factIndex.toString());
}

const factButton = document.getElementById("chessfactbutton");
factButton.addEventListener("click", funFact);