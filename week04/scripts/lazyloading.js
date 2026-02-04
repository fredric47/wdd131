
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;