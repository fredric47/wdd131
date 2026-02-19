
const currentYear = document.querySelector("#currentYear")
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

let chessFacts = [
    "The new pawn move, where pawns were allowed to advance two squares on their first move instead of one, was first introduced in Spain in 1280.",
    "There are well over 1,000 different openings, including variations within larger openings/defenses that one can learn.",
    "Chess sets normally have 32 pieces. But it has become popular to include 2 extra queens making it 34. The two spare queens can be used in pawn promotion.",
    "The word “gambit” is specifically a chess term, now generalized to mean a 'sacrifice for advantage'.",
    "The longest recorded tournament chess match lasted 20 hours and 15 minutes and resulted in a draw.",
    "The number of possibilities of a Knight's tour is over 122 million.",
    "The word 'Checkmate' in Chess comes from the Persian phrase 'Shah Mat,' which means 'the King is dead'.",
    "The longest chess game theoretically possible is 5,949 moves."
]

let index = localStorage.getItem('currentFact')
if (index === null) {
    localStorage.setItem('currentFact', '0');
}


// function nextFact(factIndex) {
//     let fact = factIndex;

//     return chessFacts[fact];
// }

function funFact() {
    let factIndex = JSON.parse(localStorage.getItem('currentFact')); //remember.getItem //copilot
    const funFactArea = document.getElementById("factarea");
    funFactArea.innerHTML = chessFacts[factIndex];
    factIndex++;

    if (factIndex >= chessFacts.length) {
        localStorage.setItem('currentFact', '0');
        factIndex = 0;
    };

    localStorage.setItem('currentFact', factIndex.toString());
}

const factButton = document.getElementById("chessfactbutton");
factButton.addEventListener("click", funFact);