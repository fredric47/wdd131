let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

//complete list
function addNames(names) {
    const list = document.querySelector("#nameList")
    let listItem = "";
    for (const name of names) {
        listItem += `<li>${name}</li>`
    }
    list.innerHTML = listItem;
}
const buttonli = document.getElementById("innerHTMLB");
buttonli.addEventListener("click", () => addNames(names));


// array.filter
function getBNames(names) {
    let namesB = names.filter(name => name.charAt(0) === "B"); // Filters names starting with 'B'
    const list = document.querySelector("#nameB")
    let listItem = "";
    for (const name of namesB) {
        listItem += `<li>${name}</li>`
    }
    list.innerHTML = listItem;
}
const buttonB = document.getElementById("buttonB");
buttonB.addEventListener("click", () => getBNames(names));


// Without array.map
// function namesLength(names) {
//     const array = document.querySelector("#namesLength")
//     let namesLength = [];
//     for (const name of names) {
//         let length = name.length;
//         namesLength.push(length)
//     }
//     array.innerHTML = namesLength;
// }
// const buttonMap = document.getElementById("buttonMap");
// buttonMap.addEventListener("click", () => namesLength(names));

//with array.map
function namesLength(names) {
    let nameLengths = names.map((name) => name.length);
    const array = document.querySelector("#namesLength")
    array.innerHTML = nameLengths;
}
const buttonMap = document.getElementById("buttonMap");
buttonMap.addEventListener("click", () => namesLength(names));


//names.reduce
// Solution> // names.reduce((total, name) => total + name.length, 0) / names.length;
function average(names) {
    const total = names.reduce(
        (accumulator, currentValue) => accumulator + currentValue.length,
        0
    );
    let averageLength = total / names.length;
    let namesReduced = document.querySelector("#namesReduced")
    namesReduced.innerHTML = averageLength;
}
const buttonReduce = document.getElementById("buttonReduce");
buttonReduce.addEventListener("click", () => average(names));

